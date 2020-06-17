/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import React from "react"
import { Form, Button } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"





export default function AntdForm({ id, ...props }) {
	const [form] = Form.useForm()
	const [{ content, attributes }] = useDashboardEvent(id, props)
	const { layout, formName, submitButton, resetButton, hasResetCallback, ...restOfProps } = attributes

	const onFormSubmit = (id, values) => {
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onSubmit",
			eventName: "onSubmit",
			eventData: JSON.stringify(values),
		})
	}

	const onFormReset = (form, id, hasResetCallback) => {
		form.resetFields()
		hasResetCallback && UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onReset",
			eventName: "onReset",
			eventData: "",
		})
	}
	return (
		<Form
			{ ...restOfProps }
			id={ id }
			form={ form }
			name={ formName || `form-${id}` }
			layout={ layout }
			onFinish={ (values) => onFormSubmit(id, values) }
		>
			{
				content.map(
					item => {
						const { content, rules, ...rest } = item
						return <Form.Item { ...rest } key={ rest.id } name={ rest.name } rules={ rules && [rules] }>
							{ UniversalDashboard.renderComponent(content[0]) }
						</Form.Item>
					}
				)
			}
			<Form.Item>
				{ !submitButton && <Button htmlType="submit" type="primary">Send</Button> || UniversalDashboard.renderComponent(submitButton) }
				<Button htmlType="button" type="dashed" onClick={ () => onFormReset(form, id, hasResetCallback) } style={ { marginLeft: 8 } }>
					Reset
				</Button>
			</Form.Item>
		</Form>
	)
}
