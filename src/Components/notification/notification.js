import React, { Suspense } from "react"
import { notification } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

const UDAntdNotification = props => {
	const [{attributes}, reload, setState] = useDashboardEvent(props.id, props)
    const {visible, preset, updateKey, ...restOfProps} = attributes

	const onClose = () => {
		restOfProps.hasCallback
			? UniversalDashboard.publish("element-event", {
					type: "clientEvent",
					eventId: restOfProps.id + "onClose",
					eventName: "onClose",
					eventData: "",
			  })
			: null
	}

	const openNotification = notificationProps => {
		notification[preset]({
			...notificationProps,
			onClose: () => onClose(),
			key: updateKey || restOfProps.id,
		})
        setState({attributes: {...attributes, visible: false}})
	}


    const Notify = () => {
        visible && openNotification(restOfProps)
        return null 
    }

    return <Notify />
}

export default UDAntdNotification
