import React from "react"
import { Layout } from "antd"
const PageManager = React.lazy(() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager"))
import DashboardHeader from '../framework/core/DashboardHeader'
const DashboardFooter = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardFooter'*/ "../framework/core/DashboardFooter")
)
const DashboardSideBar = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardSideBar'*/ "../framework/core/DashboardSideBar")
)
import DashboardProvider from "./appReducer"

export default () => (
	<Layout style={{ minHeight: "100vh" }}>
		<DashboardProvider>
			<DashboardSideBar />
			<Layout>
				<DashboardHeader />
				<Layout.Content style={{ padding: 24 }}>
					<PageManager />
				</Layout.Content>
				<DashboardFooter />
			</Layout>
		</DashboardProvider>
	</Layout>
)
