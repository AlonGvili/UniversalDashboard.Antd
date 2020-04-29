import React from "react"
import { Form, Button } from "antd/es"
import "antd/lib/form/style/index.css"
import "antd/lib/button/style/index.css"
import { message } from "antd"

export default ({ id, content, layout, formName }) => {
	const [form] = Form.useForm()

	const tailLayout = {
		wrapperCol: {
			offset: 2,
			span: 22,
		},
	}

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
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onSubmit",
			eventName: "onSubmit",
			eventData: JSON.stringify(values),
		})
	}

	return (
		<div style={{ maxWidth: 300, padding: 48 }}>
			<Form id={id} form={form} name={formName || `form-${id}`} layout={layout} onFinish={onFormSubmit}>
				{UniversalDashboard.renderComponent(content)}
				<Form.Item {...tailLayout}>
					<Button htmlType="submit" type="primary" style={{ marginRight: 16 }}>
						Send
					</Button>
					<Button htmlType="button" type="dashed" onClick={onFormReset}>
						Reset
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}
