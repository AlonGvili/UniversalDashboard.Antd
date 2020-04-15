import React from "react"
import { Layout } from "antd"
import PageManager from "./framework/pageManager"
import { disableUdTheme } from "./resets/reset-style"
import DashboardHeader from "./framework/DashboardHeader"
import DashboardFooter from "./framework/DashboardFooter"
import DashboardSideBar from "./framework/DashboardSideBar"
import { DashboardStateProvider } from "./app-state"
import appStateReducer, { initialState } from "./appReducer"

const { Content } = Layout

export default ({ dashboard }) => {
	disableUdTheme()
	const { pages } = dashboard
	return (
		<DashboardStateProvider initialState={{ ...initialState, pages: pages }} reducer={appStateReducer}>
			<Layout style={{ height: "100vh" }}>
				<DashboardHeader />
				<Layout>
					<DashboardSideBar />
					<Content>
						<PageManager />
					</Content>
				</Layout>
				<DashboardFooter />
			</Layout>
		</DashboardStateProvider>
	)
}
