import React from "react"
import { Button } from "antd/es"
// import "antd/lib/button/style/index.less"

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
		<Button {...props} htmlType={props.htmlType} type={props.buttonType} onClick={props.hasCallback && onClick}>
			{props.label}
		</Button>
	)
}

export default AntdButton
