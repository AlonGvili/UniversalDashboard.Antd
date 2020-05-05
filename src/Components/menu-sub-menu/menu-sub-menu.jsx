import React from "react"
import { Menu } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

const AntdSubMenu = props => {
	const [state, reload] = useDashboardEvent(props.id, props)
	const { content, attributes } = state

	return <Menu.SubMenu {...attributes} title={attributes.title}>
    {UniversalDashboard.renderComponent(content)}
    </Menu.SubMenu>
}

export default AntdSubMenu
