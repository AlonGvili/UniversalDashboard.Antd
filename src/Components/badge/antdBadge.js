import React from "react"
import { Badge } from "antd"

function AntdBadge({ content, color }) {
	return (
		<div>
			<Badge color={color}>{UniversalDashboard.renderComponent(content)}</Badge>
		</div>
	)
}
AntdBadge.displayName = "AntdBadge"
export default AntdBadge
