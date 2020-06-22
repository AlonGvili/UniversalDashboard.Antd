import { Tag } from "antd"
import {
	CheckCircleOutlined,
	SyncOutlined,
	CloseCircleOutlined,
	ExclamationCircleOutlined,
	ClockCircleOutlined,
} from '@ant-design/icons'
import React, { useState } from "react"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"


export default function AntdTag({ id, ...props }) {
	const [closed, setClosed] = useState(false)
	const [{ content, attributes }] = useDashboardEvent(id, props)
	const { icon, color, closable, withIcon, ...restOfProps } = attributes

	const onClose = () => {
		setClosed(true)
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onClose",
			eventName: "onClose",
			eventData: id,
		})
	}

	const icons = {
		"success": <CheckCircleOutlined />,
		"processing": <SyncOutlined />,
		"error": <CloseCircleOutlined />,
		"warning": <ExclamationCircleOutlined />,
		"default": <ClockCircleOutlined />,
	}
	return (
		<Tag
			id={ id }
			icon={ withIcon && UniversalDashboard.renderComponent(icons[color]) || icon && UniversalDashboard.renderComponent(icon) }
			onClose={ closable && onClose }
			visible={ !closed }
			color={ color }
			closable={ closable }
		>
			{ UniversalDashboard.renderComponent(content) }
		</Tag>
	)
}

AntdTag.displayName = "AntdTag"



