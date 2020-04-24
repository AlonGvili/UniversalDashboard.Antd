import React, { useContext, useEffect } from "react"
import Page from "./components/Page"
import { Route, Switch, Redirect } from "react-router-dom"
import NotFound from "../templates/NotFound"
import { DashboardContext } from "../../api/appReducer"
import { Layout } from "antd"

export default ({ pages }) => {
	const { addPage } = useContext(DashboardContext)

	const getHomePage = () => {
		const home = pages.find(page => page.defaultHomePage || page.name === "Home")
		if (!home) return pages[0].name !== "404" ? pages[0] : pages[1]
		else return home
	}
	let home = getHomePage()

	useEffect(() => {
		if (pages.length < 1) return null
		pages.map(page => addPage(page))
	}, [])

	return (
		<Layout.Content style={{ padding: 24 }}>
			<Switch>
				{pages.map(page => (
					<Route path={`/${page.name}`}>
						<Page {...page} />
					</Route>
				))}
				<Redirect exact from="/" to={`/${home.name}`} />
				<Route path="/" component={NotFound} />
			</Switch>
		</Layout.Content>
	)
}
