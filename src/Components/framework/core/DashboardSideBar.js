import React from "react"
import { Layout } from "antd"
import { useIsOpen, useCollapsed } from "./sidebar"
const Sider = Layout.Sider

export default function DashboardSideBar({ content = [], visible = true }) {
	const isOpen = useIsOpen()
	const collapsed = useCollapsed()

	return (
		visible && (
			<Sider collapsible collapsed={isOpen} onCollapse={() => collapsed()}>
				{UniversalDashboard.renderComponent(content)}
			</Sider>
		)
	)
}

DashboardSideBar.displayName = "DashboardSideBar"
