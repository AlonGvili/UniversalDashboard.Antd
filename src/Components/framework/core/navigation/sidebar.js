import React from "react"
import { Layout, Alert } from "antd"
import { useIsOpen, useCollapsed } from "./sidebarStore"
import useSidebar from "./useSidebar"
import { useIsDarkMode } from "../darkmode/darkMode"
import useDashboardEvent from "../../../api/Hooks/useDashboardEvent"

export default function AntdSideBar({ id, ...props }) {
	const { data, status, error } = useSidebar(id)
	const [{ attributes }] = useDashboardEvent(id, props)
	const isOpen = useIsOpen()
	const collapsed = useCollapsed()
	const darkMode = useIsDarkMode()

	const { visible, ...restOfProps } = attributes

	if (status === "loading") return null
	if (status === "error") return <Alert message={error.message} type="error" />

	return (
		visible && (
			<Layout.Sider {...restOfProps} theme={darkMode ? "dark" : "light"} collapsible collapsed={!isOpen} onCollapse={() => collapsed()}>
				{UniversalDashboard.renderComponent(data)}
			</Layout.Sider>
		)
	)
}

AntdSideBar.displayName = "AntdSideBar"
