/* eslint-disable react/display-name */
import React from "react"
import { Form, Button } from "antd"
import { message } from "antd"

export default ({ id, content, layout, formName }) => {
	const [form] = Form.useForm()

	const onFormReset = fields => {
		form.resetFields()
		new message.info({
			content: "Form was reset!",
		})
	}

	const onFormFill = values => {
		form.setFieldsValue({ ...values })
	}

	const onFormSubmit = values => {
		console.log("event data from form", JSON.stringify(values))
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onSubmit",
			eventName: "onSubmit",
			eventData: JSON.stringify(values),
		})
	}

	return (
		<div style={{ padding: 48 }}>
			<Form id={id} form={form} name={formName || `form-${id}`} layout={layout} onFinish={onFormSubmit}>
				{UniversalDashboard.renderComponent(content)}
				<Form.Item>
					<Button htmlType="submit" type="primary" style={{ marginRight: 16 }}>
						Send
					</Button>
				</Form.Item>
				<Form.Item>
					<Button htmlType="button" type="dashed" onClick={onFormReset}>
						Reset
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
