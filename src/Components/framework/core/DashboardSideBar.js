import React, { useContext } from "react"
import { Layout } from "antd"
import { DashboardContext } from "../../api/appReducer"
const Sider = Layout.Sider

export default function DashboardSideBar({ content = [], visible = true }) {
	const { state, setSidebar } = useContext(DashboardContext)
	const collapsed = state.sideMenu.collapsed

	return (
		visible && (
			<Sider collapsible collapsed={collapsed} onCollapse={() => setSidebar(!collapsed)}>
				{UniversalDashboard.renderComponent(content)}
			</Sider>
		)
	)
}

DashboardSideBar.displayName = "DashboardSideBar"
