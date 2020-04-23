import React, { useContext } from "react"
import Page from "./Page"
import { Route, Switch, Redirect, useLocation } from "react-router-dom"
import { DashboardContext } from "../appReducer"
import NotFound from "./NotFound"

export default () => {
	const {
		state: { pages },
	} = useContext(DashboardContext)

	console.log("pages", pages)

	const getHomePage = () => {
		const home = pages.find(page => page.defaultHomePage || page.name === "Home")
		if (!home) return pages[0].name !== "404" ? pages[0] : pages[1]
		else return home
	}

	if (pages.length < 1) return null

	let home = getHomePage()

	const dashboardPages = pages.map(page => (
		<Route path={`/${page.name}`}>
			<Page {...page} />
		</Route>
	))

	dashboardPages.unshift(<Redirect exact from="/" to={`/${home.name}`} />)
	dashboardPages.push(
		<Route path="/" component={NotFound} />
	)

	return <Switch>{dashboardPages}</Switch>
}
