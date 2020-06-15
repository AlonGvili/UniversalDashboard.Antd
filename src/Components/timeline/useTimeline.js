import React from 'react'
import { useQuery, queryCache } from 'react-query'
import { useEndpointSubscription } from '../api/Hooks/useDashboardEvent'
import useAddToTimeline from './addToTimeline'
import useRemoveFromTimeline from './removeFromTimeline'
import useClearTimeline from './clearTimeline'
import { Timeline } from 'antd'

async function getItems(id) {
    const data = await queryCache.getQueryData(["timeline", { id }])
    if (data !== undefined) return [...data]
    else return []
}

export default function useTimeline({ id, ...props }) {
    const [attributes, setAttributes] = React.useState({ ...props })
    const [add] = useAddToTimeline()
    const [remove] = useRemoveFromTimeline()
    const [clear] = useClearTimeline()

    const { data } = useQuery(
        ["timeline", { id }], () => getItems(id), { suspense: true }
    )
    const content = data.map(
        item => {
            return <Timeline.Item
                { ...item }
                key={ item?.id }
                dot={ UniversalDashboard.renderComponent(item?.dot) }
                label={ UniversalDashboard.renderComponent(item?.label) }
            >
                { UniversalDashboard.renderComponent(item.content) }
            </Timeline.Item>
        }
    )

    useEndpointSubscription(id, (_, event) => {
        if (event.type === "addTimelineItem") {
            add({ timelineId: event.data.timelineId, items: event.data.items })
        }
        if (event.type === "removeTimelineItem") {
            remove({ timelineId: event.data.timelineId, itemId: event.data.itemId })
        }
        if (event.type === "clearTimeline") {
            clear({ timelineId: event.data.timelineId })
        }
        if (event.type === "updateTimeline") {
            setAttributes(old => ({
                ...old,
                ...event.data.props
            }))
        }
    })

    return { content, attributes }
}