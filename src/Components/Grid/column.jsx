import React from "react"
import { Col } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

export default function AntdColumn({ id, ...props }) {
	const [{ content, attributes }] = useDashboardEvent(id, props)
	return (
		<Col { ...attributes }>
			{ UniversalDashboard.renderComponent(content) }
		</Col>
	)
}
