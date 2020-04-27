import React from "react"
import Page from "./components/Page"
const NotFound = React.lazy(() => import( /* webpackChunkName: 'NotFoundPage' */ "../templates/NotFound"))
import { Route, Switch, Redirect } from "react-router-dom"
import { useQuery } from "react-query"
import Spin from "antd/es/spin"
import "antd/es/spin/style/index.css"

export default () => {
	const { data, status, isFetching, error } = useQuery("pages", () =>
		fetch(`${window.baseUrl}/api/internal/component/element/pages`, { headers: { dashboardid: 3,  UDConnectionId: UniversalDashboard.connectionId }})
			.then(res => res.json())
			.then(res => res)
	)

	if (status === "loading") return <Spin spinning={isFetching} tip="Getting Pages" delay={750} />
	if (status === "error") return <p>{`Error: ${error.message}`}</p>

	return (
		<React.Fragment>
			<Switch>
				{data.map(page => (
					<Route path={`/${page.name}`}>
						<Page {...page} />
					</Route>
				))}
				<Redirect exact from="/" to="/Icons" />
				<Route path="/" component={NotFound} />
			</Switch>
		</React.Fragment>
	)
}
