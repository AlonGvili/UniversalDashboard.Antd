import React from "react"
import Page from "./components/Page"
import NotFound from "../templates/NotFound"
import { Route, Switch, Redirect } from "react-router-dom"
import { useQuery } from "react-query"
import Spin from "antd/es/spin"
import "antd/es/spin/style/index.css"

export default () => {
	const { data, status, isFetching, error } = useQuery("pages", () =>
		fetch(`${window.baseUrl}/api/internal/dashboard/pages`)
			.then(res => res.json())
			.then(res => res)
	)

	return (
		<React.Fragment>
			{status === "loading" ? (
				<Spin spinning={isFetching} tip="Getting Pages" />
			) : status === "error" ? (
				<span>{error.message}</span>
			) : (
				<Switch>
					{data.map(page => (
						<Route path={`/${page.name}`}>
							<Page {...page} />
						</Route>
					))}
					<Redirect exact from="/" to="/Icons" />
					<Route path="/" component={NotFound} />
				</Switch>
			)}
		</React.Fragment>
	)
}
