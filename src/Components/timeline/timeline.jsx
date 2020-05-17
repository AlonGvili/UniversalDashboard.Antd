import React from "react"
import { Timeline } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

const timelineContext = React.createContext()

export function useTimeline() {
	const api = {
		timelineContext
	}
	const UDAntdTimeLine = useTimelineComponent(api)
	return {
		...api,
		UDAntdTimeLine
	}
}

function useTimelineComponent(api) {
	const UDAntdTimeLine = React.useMemo(
		() => ({ id, ...props }) => {
			const { timelineContext } = UDAntdTimeLine.api
			const [{ content, attributes }] = useDashboardEvent(id, props)
			return (
				<timelineContext.Provider value={UDAntdTimeLine.api}>
					<Timeline {...attributes}>
						{content.map(item =>
							<Timeline.Item
								{...item}
								dot={item.dot && UniversalDashboard.renderComponent(item.dot)}
								label={item.label && UniversalDashboard.renderComponent(item.label)}
							>
								{UniversalDashboard.renderComponent(item.content)}
							</Timeline.Item>)}
					</Timeline>
				</timelineContext.Provider>
			)
		},
		[]
	)
	UDAntdTimeLine.api = api
	return UDAntdTimeLine
}

export default props => {
	const { UDAntdTimeLine } = useTimeline()
	return <UDAntdTimeLine {...props} />
}