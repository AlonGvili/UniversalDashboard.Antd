/* eslint-disable react/display-name */
import React from "react"
import { usePage } from "./components/Page"
import { Route, Switch, Redirect } from "react-router-dom"
import { queryCache } from "react-query"
import { Layout } from "antd"

const managerContext = React.createContext()

function usePageManager() {
	const pages = queryCache.getQueryData("pages")

	const api = {
		pages,
		managerContext,
	}

	const PageManager = usePageManagerComponent(api)

	return {
		...api,
		PageManager,
	}
}

function usePageManagerComponent(api) {
	const getHomePage = React.useCallback(pages => {
		let homePage = pages.find(page => page.defaultHomePage || page.name === "home")
		if (!homePage) return pages[0].name
		return homePage.name
	}, [])

	const PageManager = React.useMemo(
		() => props => {
		const { pages, managerContext } = PageManager.api
		const { Page } = usePage()
		const home = getHomePage(pages)

		return (
			<Layout.Content style={{ padding: 24 }}>
				<managerContext.Provider value={PageManager.api}>
					<Switch>
						{pages.map(page => (
							<Route
								key={page.dynamic ? page.id : page.name}
								path={page.dynamic ? `${window.baseUrl}${page.url}` : `${window.baseUrl}/${page.name}`}
							>
								<Page {...page} />
							</Route>
						))}
						<Redirect exact from={`${window.baseUrl}`} to={`${window.baseUrl}/${home}`} />
						<Redirect from={`${window.baseUrl}`} to="/404" />
					</Switch>
				</managerContext.Provider>
			</Layout.Content>
		)
	}, [])

	PageManager.api = api
	PageManager.displayName = "PageManager"

	return PageManager
}

export default () => {
	const { PageManager } = usePageManager()
	return <PageManager />
}
