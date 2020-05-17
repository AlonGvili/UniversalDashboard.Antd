/* eslint-disable react/display-name */
import React from "react"
import { Form, Button, Space } from "antd"
import { message } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

function useForm() {

	const onFormSubmit = (id, values) => {
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onSubmit",
			eventName: "onSubmit",
			eventData: JSON.stringify(values),
		})
	}

	const onFormReset = form => {
		form.resetFields()
		new message.info({
			content: "Form was reset!",
		})
	}

	const api = {
		onFormSubmit,
		onFormReset
	}

	const AntdForm = useFormComponent(api)
	return {
		...api,
		AntdForm
	}
}

function useFormComponent(api) {
	const AntdForm = React.useMemo(
		() => ({ id, ...props }) => {
			const [form] = Form.useForm()
			const { onFormSubmit, onFormReset } = AntdForm.api
			const [{ content, attributes }] = useDashboardEvent(id, props)
			const { layout, formName } = attributes

			return <div style={{ padding: 48 }}>
				<Form id={id} form={form} name={formName || `form-${id}`} layout={layout} onFinish={(values) => onFormSubmit(id, values)}>
					{UniversalDashboard.renderComponent(content)}
					<Space direction="horizontal" size="large">
						<Form.Item>
							<Button htmlType="submit" type="primary" style={{ marginRight: 16 }}>
								Send
							</Button>
						</Form.Item>
						<Form.Item>
							<Button htmlType="button" type="dashed" onClick={() => onFormReset(form)}>
								Reset
							</Button>
						</Form.Item>
					</Space>
				</Form>
			</div>
		},
		[]
	)

	AntdForm.api = api
	return AntdForm
}

export default props => {
	const { AntdForm } = useForm()
	return <AntdForm {...props} />
}

