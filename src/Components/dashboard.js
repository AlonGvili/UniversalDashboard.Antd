import React, { useContext, useEffect } from "react"
import { Layout, Spin } from "antd/es"
import PageManager from "./framework/pageManager"
import DashboardHeader from "./framework/DashboardHeader"
import DashboardFooter from "./framework/DashboardFooter"
import DashboardSideBar from "./framework/DashboardSideBar"
import { DashboardContext } from "./appReducer"

export default ({ dashboard }) => {
	const { pages } = dashboard
	const { addPage, setLoading, state } = useContext(DashboardContext)

	useEffect(() => {
		pages.map(page => addPage(page))
		if (state.pages.length > 0) setLoading(false)
	}, [])

	console.log("state", state)
	return (
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
	)
}
