import React from "react"
import { Layout } from "antd/es"
import PageManager from "../framework/pages/PageManager"
import DashboardHeader from "../framework/core/DashboardHeader"
import DashboardFooter from "../framework/core/DashboardFooter"
import DashboardSideBar from "../framework/core/DashboardSideBar"
import DashboardProvider from "./appReducer"
import { ReactQueryDevtools } from "react-query-devtools"

export default () => (
	<Layout style={{ minHeight: "100vh" }} hasSider>
		<DashboardProvider>
			<DashboardSideBar />
		</DashboardProvider>
		<Layout>
			<DashboardHeader />
			<Layout.Content style={{ padding: 24 }}>
				<PageManager />
			</Layout.Content>
			<DashboardFooter />
		</Layout>
		<ReactQueryDevtools />
	</Layout>
)
