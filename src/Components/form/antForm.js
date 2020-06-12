/* eslint-disable react/display-name */
import React from "react"
import { Form, Space, Button } from "antd"
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

	const onFormReset = (form, id, hasResetCallback) => {
		form.resetFields()
		hasResetCallback && UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onReset",
			eventName: "onReset",
			eventData: "",
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
		() => ({ id, hasResetCallback, ...props }) => {
			const [form] = Form.useForm()
			const { onFormSubmit, onFormReset } = AntdForm.api
			const [{ content, attributes }] = useDashboardEvent(id, props)
			const { layout, formName, submitButton } = attributes

			return (
				<Form
					id={ id }
					form={ form }
					name={ formName || `form-${id}` }
					layout={ layout }
					onFinish={ (values) => onFormSubmit(id, values) }
				>
					{ UniversalDashboard.renderComponent(content) }
					<Space direction="horizontal" size="small">
						<Form.Item>
							{ !submitButton && <Button htmlType="submit" type="primary">
								Send
							</Button> || UniversalDashboard.renderComponent(submitButton) }
						</Form.Item>
						<Form.Item>
							<Button htmlType="button" type="dashed" onClick={ () => onFormReset(form, id, hasResetCallback) }>
								Reset
							</Button>
						</Form.Item>
					</Space>
				</Form>
			)
		},
		[]
	)

	AntdForm.api = api
	return AntdForm
}

export default props => {
	const { AntdForm } = useForm()
	return <AntdForm { ...props } />
}

