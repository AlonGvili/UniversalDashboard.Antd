import React from "react"
import { Layout } from "antd"
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx"

export default props => {
	const [{ content, attributes }] = useDashboardEvent(props.id, props)
	return <Layout.Content {...attributes} children={UniversalDashboard.renderComponent(content)} />
}

