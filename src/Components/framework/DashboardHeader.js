import React from "react"
import { Layout } from "antd"
import { useThemeUI, jsx } from "theme-ui"
import { Link } from "react-router-dom"
import { useDashboardState } from "../app-state"

export default function DashboardHeader({ content = [], visible = true }) {
	const [{ pages }, dispatch] = useDashboardState()
	const context = useThemeUI()
	const { theme, colorMode } = context
	return (
		visible && (
			<Layout.Header
				style={{
					backgroundColor: theme.colors.primary,
					color: theme.colors.text,
				}}
			>
				{pages.map(page => (
					<Link to={page.dynamic ? page.url : `/${page.name}`}> {page.name} </Link>
				))}
			</Layout.Header>
		)
	)
}

DashboardHeader.displayName = "DashboardHeader"
