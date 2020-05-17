import { Tag } from "antd"
import React, { useState } from "react"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"


const AntdTag = ({ id, ...props }) => {
	const [closed, setClosed] = useState(false)
	const [{content, attributes}] = useDashboardEvent(id, props)
	const { icon, color, closable } = attributes
	
	const onClose = () => {
		setClosed(true)
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onClose",
			eventName: "onClose",
			eventData: id,
		})
	}

	return (
		<Tag
			id={id}
			icon={icon && UniversalDashboard.renderComponent(icon)}
			onClose={ closable && onClose}
			visible={!closed}
			color={color}
			closable={closable}
		>
			{UniversalDashboard.renderComponent(content)}
		</Tag>
	)
}

AntdTag.displayName = "AntdTag"
export default AntdTag



