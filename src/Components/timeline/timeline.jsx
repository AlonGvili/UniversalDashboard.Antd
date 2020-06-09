import React from "react"
import { Timeline, Spin, Alert } from "antd"
import useDashboardEvent, {useEndpointSubscription} from "../api/Hooks/useDashboardEvent"
import useTimeline from "./useTimeline"
import useAddToTimeline from "./addToTimeline"
import { queryCache } from 'react-query'

// const [{ attributes }] = useDashboardEvent(id, props)
export default function AntdTimeline({ id, ...props }) {
	const [content, setContent] = React.useState([])
	const { autoRefresh, refreshInterval, ...restOfProps } = props
	useTimeline(id, autoRefresh, refreshInterval, setContent)
	const [add,{data,status,error}] = useAddToTimeline()
	
	function addItem (message, event) {
		if(event.type === "addTimelineItem"){
			add({timelineId: event.data.timelineId, item: event.data.item})
			if(status === "success") {
				console.log("success timeline add cache data", queryCache.getQueryData(["timeline", { id }]))
			}
		}
	}
	useEndpointSubscription(id, addItem)

	console.log("timeline data", content)
	console.log("timeline add data", data)
	console.log("timeline add cache data", queryCache.getQueryData(["timeline", { id }]))
	
	return (
		<Timeline
			{ ...restOfProps }	
		>
			{ content !== undefined && content.map(
				item => <Timeline.Item key={item.id} { ...item }
					dot={ item.dot && UniversalDashboard.renderComponent(item.dot) }
					label={ item.label && UniversalDashboard.renderComponent(item.label) }
				>
					{ UniversalDashboard.renderComponent(item.content) }
				</Timeline.Item>) }
		</Timeline>
	)
}