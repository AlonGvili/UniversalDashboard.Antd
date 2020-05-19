import React from "react"
import { Popconfirm } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"


export default function AntdPopConfirm({ id, ...props }) {
    const [{ content, attributes }] = useDashboardEvent(id, props)
    const [isVisible, setIsVisible] = React.useState(false)

    const onConfirm = event => {
        UniversalDashboard.publish("element-event", {
            type: "clientEvent",
            eventId: id + "onConfirm",
            eventName: "onConfirm",
            eventData: "",
        })
    }

    const onCancel = event => {
        console.log(event)
        UniversalDashboard.publish("element-event", {
            type: "clientEvent",
            eventId: id + "onCancel",
            eventName: "onCancel",
            eventData: "",
        })
    }
    
    return (
        <Popconfirm
            id={id}
            {...attributes}
            onCancel={onCancel}
            onConfirm={onConfirm}
            visible={isVisible}
            onVisibleChange={(visible) => setIsVisible(visible)}
            icon={attributes.icon && UniversalDashboard.renderComponent(attributes.icon)}
        >
            {UniversalDashboard.renderComponent(content)}
        </Popconfirm>
    )
}