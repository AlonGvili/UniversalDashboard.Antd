import React from "react"
import { Layout } from "antd"
import { useThemeUI } from "theme-ui"
import AddPageForm from "../pages/components/AddPageForm"
const Footer = Layout.Footer

export default function DashboardFooter({ content = [], visible = true }) {
	return (
		visible && (
			<Footer sx={{ alignItems: "center", justifyContent: "flex-end" }}>
				{UniversalDashboard.renderComponent(content)}
				<AddPageForm />
			</Footer>
		)
	)
}

DashboardFooter.displayName = "DashboardFooter"
