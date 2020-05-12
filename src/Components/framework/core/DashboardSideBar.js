import React from "react"
import { Layout } from "antd"
import { useIsOpen, useCollapsed } from "./sidebar"
import { useIsDarkMode } from "./darkMode"

export default function DashboardSideBar({ content = [], visible = true }) {
	const isOpen = useIsOpen()
	const collapsed = useCollapsed()
	const darkMode = useIsDarkMode()

	return (
		visible && (
			<Layout.Sider theme={darkMode ? "dark" : "light"} collapsible collapsed={isOpen} onCollapse={() => collapsed()}>
				{UniversalDashboard.renderComponent(content)}
			</Layout.Sider>
		)
	)
}

DashboardSideBar.displayName = "DashboardSideBar"
