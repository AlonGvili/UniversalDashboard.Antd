/* eslint-disable react/display-name */
import React from "react"
import { Layout } from "antd"
import store from "./store"
import { ReactQueryDevtools } from "react-query-devtools/dist/react-query-devtools.development"
const PageManager = React.lazy(() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager"))
const DashboardFooter = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardFooter'*/ "../framework/core/DashboardFooter")
)
const DashboardSideBar = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardSideBar'*/ "../framework/core/DashboardSideBar")
)
{
	/* <store.Provider initialValue={{ isOpen: true }}> */
}

export default ({ appbar }) => {
	return (
		<store.Provider initialValue={{ darkMode: false }}>
			<Layout style={{ minHeight: "100vh" }}>
				<Layout>
					{UniversalDashboard.renderComponent(appbar)}
					<PageManager />
					<DashboardFooter />
					<ReactQueryDevtools initialIsOpen={false} />
				</Layout>
			</Layout>
		</store.Provider>
	)
}

window.less.options.javascriptEnabled = true
