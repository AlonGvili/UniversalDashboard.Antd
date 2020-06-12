import React from "react"
import { Timeline, Alert } from "antd"
import { queryCache } from 'react-query'
import { useEndpointSubscription } from "../api/Hooks/useDashboardEvent"
import useTimeline from "./useTimeline"
import useAddToTimeline from "./addToTimeline"
import useRemoveFromTimeline from "./removeFromTimeline"
import useClearTimeline from "./clearTimeline"


export default function AntdTimeline({ id, ...props }) {
	const { autoRefresh, refreshInterval, ...restOfProps } = props
	const [add, { status: addStatus, reset, data: addData }] = useAddToTimeline()
	const [remove] = useRemoveFromTimeline()
	const [clear] = useClearTimeline()

	const { data, status, error, isFetching, isStale, refetch } = useTimeline(id, autoRefresh, refreshInterval)

	useEndpointSubscription(id, (_, event) => {
		if (event.type === "addTimelineItem") {
			add({ timelineId: event?.data?.timelineId, item: event?.data?.item })
		}
		if (event.type === "removeTimelineItem") {
			remove({ timelineId: event?.data?.timelineId, itemId: event?.data?.itemId })
		}
		if (event.type === "clearTimeline") {
			clear({ timelineId: event?.data?.timelineId })
		}
	})

	if (status === "error") return <Alert message={ error.message } type="error" />

	console.log("addStatus", addStatus)
	console.log("status", status)
	console.log("addData", addData)
	console.log("data", data)
	return (
		<Timeline
			pending={ addStatus === "loading" && "Getting data..." }
			{ ...restOfProps }
		>
			{ data !== undefined && data.map(
				item => <Timeline.Item
					{ ...item }
					key={ item?.id }
					dot={ UniversalDashboard.renderComponent(item?.dot) }
					label={ UniversalDashboard.renderComponent(item?.label) }
					onClick={ () => reset() }
				>
					{ UniversalDashboard.renderComponent(item.content) }
				</Timeline.Item>) }
		</Timeline>
	)
}