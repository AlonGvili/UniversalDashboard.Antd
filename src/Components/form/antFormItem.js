import React from "react"
import { Form } from "antd"
import "antd/lib/form/style/index.css"

export default ({ id, label, name, rules, content, ...rest }) => {
	return (
		<Form.Item key={id} label={label} name={name} rules={rules && [...rules]} {...rest}>
			{UniversalDashboard.renderComponent(content)}
		</Form.Item>
	)
}
