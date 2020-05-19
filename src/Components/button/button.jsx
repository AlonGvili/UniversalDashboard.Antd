import React from "react"
import { Button } from "antd"

const AntdButton = props => {

	const onClick = () => {
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: props.id + "onClick",
			eventName: "onClick",
			eventData: "",
		})
	}

	return (
		<Button {...props} 
			icon={props.icon && UniversalDashboard.renderComponent(props.icon)} 
			htmlType={props.htmlType} 
			type={props.buttonType} 
			onClick={props.hasCallback && onClick}>
			{props.label}
		</Button>
	)
}

export default AntdButton
