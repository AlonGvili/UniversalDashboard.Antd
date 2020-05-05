/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react"
import Page from "./components/Page"
import { Route, Switch, Redirect } from "react-router-dom"
import { queryCache } from "react-query"
import useDashboardPages from "../../api/Hooks/useDashboardPages"
import { Layout } from "antd"

export default () => {
	const pages = queryCache.getQueryData("pages")


	console.log("page manager")
	if(!pages) return null

	function useHomePage() {
		let homePage = pages.find(page => page.defaultHomePage || page.name === "home")
		if (!homePage) return pages[0].name
		return homePage.name
	}

	let home = useHomePage()
	return (
		<Layout.Content style={{ padding: 24 }}>
			<Switch>
				{pages.map(page => (
					<Route key={page.dynamic ? page.id : page.name} path={page.dynamic ? page.url : `/${page.name}`}>
						<Page {...page} />
					</Route>
				))}
				<Redirect exact from="/" to={home} />
				<Redirect from="/" to="/404" />
			</Switch>
		</Layout.Content>
	)
}
