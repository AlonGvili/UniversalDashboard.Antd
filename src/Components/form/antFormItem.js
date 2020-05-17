import React from "react"
import { Form } from "antd"

export default ({ id, label, name, rules, content, ...rest }) => {
	return (
			<Form.Item key={id} label={label} name={name} rules={rules && [rules]} {...rest}>
				{UniversalDashboard.renderComponent(content)}
			</Form.Item>
	)
}
