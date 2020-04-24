import React from "react"
import { Layout } from "antd/es"
import PageManager from "../framework/pages/PageManager"
import DashboardHeader from "../framework/core/DashboardHeader"
import DashboardFooter from "../framework/core/DashboardFooter"
import DashboardSideBar from "../framework/core/DashboardSideBar"
import DashboardProvider from "./appReducer"

export default ({ dashboard }) => {
	const { pages } = dashboard
	return (
		<DashboardProvider>
			<Layout style={{ minHeight: "100vh" }}>
				<DashboardSideBar />
				<Layout>
					<DashboardHeader />
					<PageManager pages={pages} />
					<DashboardFooter />
				</Layout>
			</Layout>
		</DashboardProvider>
	)
}
