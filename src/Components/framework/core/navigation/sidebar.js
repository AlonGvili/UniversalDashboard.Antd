import React from "react"
import { Layout, Alert } from "antd"
import { useIsOpen, useCollapsed } from "./sidebarStore"
import useSidebar from "./useSidebar"
import useDashboardEvent from "../../../api/Hooks/useDashboardEvent"
import { useTheme } from 'antd-theme'

export default function AntdSideBar({ id, ...props }) {
	const [{ name }] = useTheme()
	const { data, status, error } = useSidebar(id)
	const [{ attributes }] = useDashboardEvent(id, props)
	const isOpen = useIsOpen()
	const collapsed = useCollapsed()

	const { visible, ...restOfProps } = attributes

	// if (status === "loading") return null
	// if (status === "error") return <Alert message={ error.message } type="error" />

	return (
		visible && (
			<Layout.Sider { ...restOfProps } theme={ name === "dark" ? "dark" : "light" } collapsible collapsed={ !isOpen } onCollapse={ () => collapsed() }>
				<Alert.ErrorBoundary>
					{ UniversalDashboard.renderComponent(data) }
				</Alert.ErrorBoundary>
			</Layout.Sider>
		)
	)
}

AntdSideBar.displayName = "AntdSideBar"
