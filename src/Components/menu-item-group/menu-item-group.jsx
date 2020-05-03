import React from "react"
import { Menu } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

const AntdMenuItemGroup = props => {
	const [{ content, attributes }] = useDashboardEvent(props.id, props)

	return <Menu.ItemGroup {...attributes}>{UniversalDashboard.renderComponent(content)}</Menu.ItemGroup>
}

export default AntdMenuItemGroup
