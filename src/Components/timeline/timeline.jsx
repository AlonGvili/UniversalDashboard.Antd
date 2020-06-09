import React from "react"
import { Timeline, Alert } from "antd"
import { queryCache } from 'react-query'
import { useEndpointSubscription } from "../api/Hooks/useDashboardEvent"
import useTimeline from "./useTimeline"
import useAddToTimeline from "./addToTimeline"
import useRemoveFromTimeline from "./removeFromTimeline"


export default function AntdTimeline({ id, ...props }) {
	const { autoRefresh, refreshInterval, ...restOfProps } = props
	const [add] = useAddToTimeline()
	const [remove] = useRemoveFromTimeline()
	const { data, status, error } = useTimeline(id, autoRefresh, refreshInterval)

	useEndpointSubscription(id, (message, event) => {
		if (event.type === "addTimelineItem") {
			add({ timelineId: event.data.timelineId, item: event.data.item })
		}
		if (event.type === "removeTimelineItem") {
			remove({ timelineId: event.data.timelineId, itemId: event.data.itemId })
		}
	})

	if (status === "error") return <Alert message={ error.message } type="error" />

	return (
		<Timeline
			{ ...restOfProps }
		>
			{ data !== undefined && data.map(
				item => <Timeline.Item key={ item.id } { ...item }
					dot={ item.dot && UniversalDashboard.renderComponent(item.dot) }
					label={ item.label && UniversalDashboard.renderComponent(item.label) }
				>
					{ UniversalDashboard.renderComponent(item.content) }
				</Timeline.Item>) }
		</Timeline>
	)
}