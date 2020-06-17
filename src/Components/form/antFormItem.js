/* eslint-disable react/display-name */
import React from "react"
import { Form } from "antd"

export default ({ id, label, name, rules, content, ...rest }) => {
	return (
		<Form.Item { ...rest } key={id} label={label} name={name} rules={rules && [rules]} >
				{UniversalDashboard.renderComponent(content)}
		</Form.Item>
	)
}
