import React from "react"
import { Form } from "antd"
import "antd/lib/form/style/index.css"
import AntdErrorBoundary from "../framework/core/errorBoundries"

export default ({ id, label, name, rules, content, ...rest }) => {
	return (
		<AntdErrorBoundary>
			<Form.Item key={id} label={label} name={name} rules={rules && [rules]} {...rest}>
				{UniversalDashboard.renderComponent(content)}
			</Form.Item>
		</AntdErrorBoundary>
	)
}
