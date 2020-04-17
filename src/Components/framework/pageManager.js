import React from "react"
import Page from "./Page"
import { Route, Switch, Redirect, useLocation } from "react-router-dom"
import { useDashboardState } from "../app-state"

export default () => {
	const [{ pages }, dispatch] = useDashboardState()

	const getHomePage = () => {
		const home = pages.find(page => page.defaultHomePage || page.name === "Home")
		if (!home) return pages[0]
		else return home
	}

	let home = getHomePage()

	const dashboardPages = pages.map(page => (
		<Route
			exact={!page.dynamic}
			path={page.dynamic ? page.url : `/${page.name}`}
		>
			<Page {...page} />
		</Route>
	))

	dashboardPages.push(<Redirect exact from="/" to={home.dynamic ? home.url : `/${home.name}`} />)
	dashboardPages.push(<Redirect from="/" to="/404" />)

	return <Switch>{dashboardPages}</Switch>
}
