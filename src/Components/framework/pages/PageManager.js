/* eslint-disable react/display-name */
import React from "react"
import Page from "./components/Page"
const NotFound = React.lazy(() => import( /* webpackChunkName: 'NotFoundPage' */ "../templates/NotFound"))
import { Route, Switch, Redirect } from "react-router-dom"
import { useQuery, queryCache } from "react-query"
import {Spin} from "antd"
// import "antd/es/spin/style/index.css"
import { getMeta } from '../meta'

const dashboardid = getMeta('ud-dashboard');

export default () => {
	const { data, status, isFetching, error } = useQuery("pages", () =>
		fetch(`${window.baseUrl}/api/internal/component/element/pages`, { headers: { dashboardid,  UDConnectionId: UniversalDashboard.connectionId }})
			.then(res => res.json())
			.then(res => res)
	)

	if (status === "loading") return <Spin spinning={isFetching} tip="Getting Pages" delay={750} />
	if (status === "error") return <p>{`Error: ${error.message}`}</p>

	let home = useHomePage()
	console.log('home', home)
	return (
		<React.Fragment>
			<Switch>
				{data.map(page => (
					<Route key={page.name} path={`/${page.name}`}>
						<Page {...page} />
					</Route>
				))}
				<Redirect exact from="/" to={home} />
				<Redirect from="/" to="/404" />
			</Switch>
		</React.Fragment>
	)
}


function useHomePage(){
	const pages = queryCache.getQueryData("pages")

	let homePage = pages.find(page => page.defaultHomePage || page.name === "home")
	if(!homePage) return pages[0].name
	return homePage.name 
}