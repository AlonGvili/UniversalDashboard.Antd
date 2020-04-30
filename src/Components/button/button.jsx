import React from "react"
import { Button } from "antd"
import AntdErrorBoundary from "../framework/core/errorBoundries"

const AntdButton = props => {
	const onClick = () => {
		props.hasCallback
			? UniversalDashboard.publish("element-event", {
					type: "clientEvent",
					eventId: props.id + "onClick",
					eventName: "onClick",
					eventData: "",
			  })
			: null
	}

	return (
		<AntdErrorBoundary>
			<Button
				{...props}
				htmlType={props.htmlType}
				type={props.buttonType}
				onClick={onClick}
				children={props.label}
			/>
		</AntdErrorBoundary>
	)
}

export default AntdButton
