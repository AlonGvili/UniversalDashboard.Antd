import React from "react"
import { Button } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

export default function AntdButton ({ id, ...props }) {
	const [{ attributes }] = useDashboardEvent(id, props)
	const { icon, htmlType, buttonType, hasCallback, label} = attributes

	const onClick = () => {
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onClick",
			eventName: "onClick",
			eventData: "",
		})
	}

	return (
		<Button 
			{...attributes}
			icon={icon && UniversalDashboard.renderComponent(icon)}
			htmlType={htmlType}
			type={buttonType}
			onClick={hasCallback && onClick}
		>
			{label}
		</Button>
	)
}

AntdButton.displayName = "AntdButton"
