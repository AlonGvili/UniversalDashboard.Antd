import React from "react"
import { Col } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import useColumn from './useColumn'

export default ({ id, ...props }) => {
	const [{ attributes }] = useDashboardEvent(id, props)
	const { autoRefresh, refreshInterval, ...restOfProps } = attributes
	const { data, error, status } = useColumn(id, autoRefresh, refreshInterval)

	if (status === "error") return <Alert message="Error in AntdProgress component" description={error.message} type="error" />

	return (
		<Col {...restOfProps}>
			{UniversalDashboard.renderComponent(data)}
		</Col>
	)
}
