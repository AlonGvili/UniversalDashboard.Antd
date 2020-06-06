import React from "react"
import { Timeline, Spin, Alert } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import useTimeline from "./useTimeline"

export default function AntdTimeline({ id, ...props }) {
	const [{ content, attributes }] = useDashboardEvent(id, props)
	const { autoRefresh, refreshInterval, ...restOfProps } = attributes
	const { data, status, error, isFetching } = useTimeline(id, autoRefresh, refreshInterval)

	if (status === "loading") return <Spin spinning={isFetching} size="small" />
	if (status === "error") return <Alert message="Error in AntdTimeline component" description={error.message} type="error" />

	return (
		<Timeline
			{...restOfProps}
		>
			{content.map(
				item => <Timeline.Item {...item}
					dot={item.dot && UniversalDashboard.renderComponent(item.dot)}
					label={item.label && UniversalDashboard.renderComponent(item.label)}
				>
					{UniversalDashboard.renderComponent(item.content)}
				</Timeline.Item>)}
		</Timeline>
	)
}