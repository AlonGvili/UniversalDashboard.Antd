import React from "react"
import { Radio } from "antd"
import { guid } from "../appReducer"

export default ({ id, content, ...restOfProps }) => {
	const onChange = event => {
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onChange",
			eventName: "onChange",
			eventData: event.target.value,
		})
	}

	return (
		<Radio.Group id={id} key={guid()} onChange={onChange} {...restOfProps}>
			{UniversalDashboard.renderComponent(content)}
		</Radio.Group>
	)
}

