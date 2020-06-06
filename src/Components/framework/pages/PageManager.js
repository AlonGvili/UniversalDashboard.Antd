/* eslint-disable react/display-name */
import React from "react"
import AntdPage from "./components/Page"
import { Route, Switch, Redirect } from "react-router-dom"
import { Alert } from "antd"
import usePages from "./usePages"




export default function PageManager() {
	const data = usePages()

	const getHomePage = React.useCallback(pages => {
		let homePage = pages.find(page => page.defaultHomePage || page.name === "home")
		if (!homePage) return pages[0].name
		return homePage.name
	}, [])

	const home = getHomePage(data)

	return (
		<Alert.ErrorBoundary>
			<Switch>
				{data.length > 1 && data.map(page => (
					<Route
						key={page.dynamic ? page.id : page.name}
						path={page.dynamic ? `${window.baseUrl}${page.url}` : `${window.baseUrl}/${page.name}`}
					>
						<AntdPage id={page.id} />
					</Route>
				))}
				<Redirect exact from={`${window.baseUrl}`} to={`${window.baseUrl}/${home}`} />
				<Redirect from={`${window.baseUrl}`} to={`${window.baseUrl}/404`} />
			</Switch>
		</Alert.ErrorBoundary>
	)
}

