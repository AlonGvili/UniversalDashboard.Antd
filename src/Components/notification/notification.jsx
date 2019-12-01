import React from 'react'
import { notification } from 'antd';
import useDashboardEvent from "../Hooks/useDashboardEvent";

const UDAntdNotification = props => {
    const [state, reload] = useDashboardEvent(props.id, props);
    const { attributes } = state;

    const onClose = () => {
        attributes.hasCallback ?
            UniversalDashboard.publish("element-event", {
                type: "clientEvent",
                eventId: attributes.id + "onClose",
                eventName: "onClose",
                eventData: ""
            }) : null
    };

    const notificationPreset = () => {
        notification[attributes.preset]({
        message: attributes.title && attributes.title.type ? UniversalDashboard.renderComponent(attributes.title) : attributes.title,
        description: attributes.description ? attributes.description.type ? UniversalDashboard.renderComponent(attributes.description) : attributes.description : null,
        placement: attributes.placement || 'topRight',
        duration: attributes.duration || 4.5,
        onClose: () => onClose(),
        key: attributes.key,
        id: attributes.id
        })
    }

    const notificationCustom = () => {
        notification.open({
            message: attributes.title && attributes.title.type ? UniversalDashboard.renderComponent(attributes.title) : <div style={{...attributes.titleStyle}}>{attributes.title}</div>,
            description: attributes.description ? attributes.description.type ? UniversalDashboard.renderComponent(attributes.description) : attributes.description : null,
            icon: attributes.icon ? UniversalDashboard.renderComponent(attributes.icon) : null,
            placement: attributes.placement || 'topRight',
            duration: attributes.duration || 4.5,
            onClose: () => onClose(),
            btn: attributes.customCloseButton ? UniversalDashboard.renderComponent(attributes.customCloseButton) : null,
            style: { ...attributes.style },
            key: attributes.key,
            id: attributes.id
        })
    }

    const showNotification = (notificationFn = () => {}) => {
        attributes.visible ? notificationFn() : notification.close(attributes.id)
    }

    attributes.preset ? showNotification(notificationPreset) : showNotification(notificationCustom)
    return null
}

export default UDAntdNotification