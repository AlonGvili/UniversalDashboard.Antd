import React from "react"
import { Radio } from "antd"
import { guid } from "../Utils/utils"

export default ({ id, value, content,disabled }) => {
	return (
		<Radio id={id} value={value} key={guid()} disabled={disabled}>
			{UniversalDashboard.renderComponent(content)}
		</Radio>
	)
}

