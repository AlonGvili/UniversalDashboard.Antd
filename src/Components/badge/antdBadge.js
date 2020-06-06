import React from "react"
import { Badge } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

function AntdBadge({ id, ...props }) {
	const [{ content, attributes }] = useDashboardEvent(id, props)
	return (
		<Badge {...attributes}>
			{content && UniversalDashboard.renderComponent(content)}
		</Badge>
	)
}
AntdBadge.displayName = "AntdBadge"
export default AntdBadge
