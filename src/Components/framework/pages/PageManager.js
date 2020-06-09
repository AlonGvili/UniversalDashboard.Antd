/* eslint-disable react/display-name */
import React from "react"
import AntdPage from "./components/Page"
import { Route, Switch, Redirect } from "react-router-dom"
import { Alert, Spin } from "antd"
import usePages from "./usePages"
import { endpoint } from '../../api/consts'
import { getPage } from './usePage'
import { queryCache } from 'react-query'




export default function PageManager() {
	const { data, error, status, isFetching } = usePages()

	if (status === "loading") return <Spin spinning={ isFetching } size="large" tip="Getting pages" delay={ 500 } />
	if (status === "error") return <Alert message={ error.message } type="error" />

	data.forEach(element => {
		const pageUrl = endpoint(element.id)
		queryCache.prefetchQuery(["page", { pageUrl }], () => getPage(pageUrl))
	})

	const getHomePage = React.useCallback(pages => {
		let homePage = pages.find(page => page.defaultHomePage || page.name === "home")
		if (!homePage) return pages[0].name
		return homePage.name
	}, [])

	const home = getHomePage(data)

	return (
		<React.Suspense fallback="Loading Page Please Wait....">
			<Alert.ErrorBoundary>
				<Switch>
					{ data.length > 1 && data.map(page => (
						<Route
							key={ page.id }
							path={ page.dynamic ? `${window.baseUrl}${page.url}` : `${window.baseUrl}/${page.name}` }
						>
							{/* { queryCache.prefetchQuery(["page", { pageUrl: endpoint(page.id) }], () => getPage(endpoint(page.id))) } */ }
							<AntdPage id={ page.id } />
						</Route>
					)) }
					<Redirect exact from={ `${window.baseUrl}` } to={ `${window.baseUrl}/${home}` } />
					<Redirect from={ `${window.baseUrl}` } to={ `${window.baseUrl}/404` } />
				</Switch>
			</Alert.ErrorBoundary>
		</React.Suspense>
	)
}

