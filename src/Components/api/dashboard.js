/* eslint-disable react/display-name */
import React from "react"
import { Layout } from "antd"
import store from "./store"
const PageManager = React.lazy(() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager"))
const DashboardFooter = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardFooter'*/ "../framework/core/DashboardFooter")
)
const DashboardSideBar = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardSideBar'*/ "../framework/core/DashboardSideBar")
)

export default ({ appbar }) => {
	return (
		<store.Provider initialValue={{ darkMode: false }}>
			<store.Provider initialValue={{ isOpen: true }}>
				<Layout style={{ minHeight: "100vh" }}>
					<DashboardSideBar />
					<Layout>
						{UniversalDashboard.renderComponent(appbar.appbar)}
						<Layout.Content style={{ padding: 24 }}>
							<PageManager />
						</Layout.Content>
						<DashboardFooter />
					</Layout>
				</Layout>
			</store.Provider>
		</store.Provider>
	)
}

window.less.options.javascriptEnabled = true
