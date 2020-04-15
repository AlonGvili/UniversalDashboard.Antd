import React, { useState } from "react"
import { Layout } from "antd"

const Sider = Layout.Sider

export default function DashboardSideBar({ content = [], visible = true }) {
	const [collapsed, setCollapsed] = useState(false)
	const onCollapse = () => setCollapsed(!collapsed)
	return (
		visible && (
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
				{UniversalDashboard.renderComponent(content)}
			</Sider>
		)
	)
}

DashboardSideBar.displayName = "DashboardSideBar"
