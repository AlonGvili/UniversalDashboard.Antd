import React, { useState } from "react"
import { Tag } from "antd"
const { CheckableTag } = Tag

const AntdCheckableTag = ({ content, icon, color, id }) => {
	const [checked, setChecked] = useState(false)

	return (
		<CheckableTag
			id={id}
			icon={icon && UniversalDashboard.renderComponent(icon)}
			onChange={() => setChecked(!checked)}
			visible={true}
			color={color}
			checked={checked}
		>
			{UniversalDashboard.renderComponent(content)}
		</CheckableTag>
	)
}

export default AntdCheckableTag
