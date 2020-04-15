import React from "react"
import { Form, Button } from "antd/es"
import "antd/lib/form/style/index.css"
import "antd/lib/button/style/index.css"

export default ({ id, content, layout }) => {
	const onFinish = values => {
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onSubmit",
			eventName: "onSubmit",
			eventData: JSON.stringify(values),
		})
	}

	return (
		<div style={{ maxWidth: 300 }}>
			<Form id={id} layout={layout} onFinish={onFinish}>
				{UniversalDashboard.renderComponent(content)}
				<Form.Item>
					<Button htmlType="submit" type="primary">
						Send
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
