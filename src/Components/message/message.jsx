import React from 'react'
import { message } from 'antd';
import useDashboardEvent from "../Hooks/useDashboardEvent";

const UDAntdMessage = props => {
    const [state, reload] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;

    const onClose = () => {
        attributes.hasCallback ?
            UniversalDashboard.publish("element-event", {
                type: "clientEvent",
                eventId: attributes.id + "onClose",
                eventName: "onClose",
                eventData: ""
            }) : null
    };

    const messagePreset = () => {
        message[attributes.preset]({
            content: content && content.type ? UniversalDashboard.renderComponent(content) : content,
            duration: attributes.duration || 3,
            onClose: () => onClose(),
            key: attributes.key,
            id: attributes.id
        })
    }

    const messageCustom = () => {
        message.open({
            content: content && content.type ? UniversalDashboard.renderComponent(content) : content,
            icon: attributes.icon ? UniversalDashboard.renderComponent(attributes.icon) : null,
            duration: attributes.duration || 3,
            onClose: () => onClose(),
            style: { ...attributes.style },
            key: attributes.key,
            id: attributes.id
        })
    }

    const showMessage = (messageFn = () => { }) => {
        attributes.visible ? messageFn() : null
    }

    attributes.preset ? showMessage(messagePreset) : showMessage(messageCustom)
    return null
}

export default UDAntdMessage