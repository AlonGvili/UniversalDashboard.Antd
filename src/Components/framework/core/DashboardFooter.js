import React from "react"
import { Layout } from "antd"
const Footer = Layout.Footer

export default function DashboardFooter({ content = [], visible = true }) {
	return (
		visible && (
			<Footer>
				{UniversalDashboard.renderComponent(content)}
			</Footer>
		)
	)
}

DashboardFooter.displayName = "DashboardFooter"
