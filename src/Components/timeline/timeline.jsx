import React from "react"
import ReactInterval from "react-interval"
import { Timeline } from "antd"
import useDashboardEvent from "../Hooks/useDashboardEvent"

const AntdTimeLine = props => {
	const [state, reload] = useDashboardEvent(props.id, props)
	const { content, attributes } = state

	return (
		<Timeline {...attributes}>
			{UniversalDashboard.renderComponent(content)}
			<ReactInterval callback={reload} timeout={attributes.refreshInterval} enabled={attributes.autoRefresh} />
		</Timeline>
	)
}

export default AntdTimeLine
