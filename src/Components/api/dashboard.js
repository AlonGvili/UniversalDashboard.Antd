import React from "react"
import { Layout } from "antd"
import store from "./store"
const PageManager = React.lazy(() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager"))
const DashboardHeader = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardHeader' */ "../framework/core/DashboardHeader")
)
const DashboardFooter = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardFooter'*/ "../framework/core/DashboardFooter")
)
const DashboardSideBar = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardSideBar'*/ "../framework/core/DashboardSideBar")
)

export default () => (
	<store.Provider initialValue={{ isOpen: false }}>
		<Layout style={{ minHeight: "100vh" }}>
			<DashboardSideBar />
			<Layout>
				<DashboardHeader />
				<Layout.Content style={{ padding: 24 }}>
					<PageManager />
				</Layout.Content>
				<DashboardFooter />
			</Layout>
		</Layout>
	</store.Provider>
)
