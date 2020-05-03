import React from "react"
import { Layout } from "antd"
import { useIsDarkMode } from "../framework/core/darkMode"

export default function AntdAppBar({ visible, content }) {
	const darkMode = useIsDarkMode()

	return (
		visible && (
			<Layout.Header
				style={{
					padding: 0,
					boxShadow:
						"0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)",
					backgroundColor: darkMode ? "#001529" : "#fff",
				}}
			>
				{UniversalDashboard.renderComponent(content)}
			</Layout.Header>
		)
	)
}

AntdAppBar.displayName = "AntdAppBar"
