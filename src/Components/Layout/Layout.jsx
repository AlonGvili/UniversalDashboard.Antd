import React from "react"
import { Layout } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default props => {
	const [{ content, attributes }] = useDashboardEvent(props.id, props)
	return <Layout {...attributes}>{UniversalDashboard.renderComponent(content)}</Layout>
}
