/* eslint-disable react/display-name */
import React from "react"
import AntdPage from "./components/Page"
import { Route, Switch, Redirect } from "react-router-dom"
import { Layout, Spin, Alert } from "antd"
import { queryCache } from "react-query"
import usePages from "./usePages"


export default function PageManager() {
	// const pages = queryCache.getQueryData("pages")

	const {data: pages, error,status, isFetching} = usePages()

	const getHomePage = React.useCallback(pages => {
		let homePage = pages.find(page => page.defaultHomePage || page.name === "home")
		if (!homePage) return pages[0].name
		return homePage.name
	}, [])

	if (status === "loading") return <Spin spinning={isFetching} size="large" tip="Getting pages" delay={750}/>
	if (status === "error") return console.log("page error", error.message)

	const home = getHomePage(pages)
	return (
		<Layout.Content style={{ padding: 24 }}>
			<Switch>
				{pages.length > 1 && pages.map(page => (
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
		</Layout.Content>
	)
}

