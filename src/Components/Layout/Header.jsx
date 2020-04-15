import React from "react"
import { Layout } from "antd"

export default props => {
	const { content, ...attributes } = props
	return <Layout.Header {...attributes}>{UniversalDashboard.renderComponent(content)}</Layout.Header>
}

