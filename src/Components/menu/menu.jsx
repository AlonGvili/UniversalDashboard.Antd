/* eslint-disable react/jsx-key */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react"
import { Menu } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { Link } from "react-router-dom"
import { useIsDarkMode } from "../framework/core/darkMode"

const AntdMenu = props => {
	const [state] = useDashboardEvent(props.id, props)
	const { content, attributes } = state
	const [current, setCurrent] = useState([])

	const darkMode = useIsDarkMode()

	const renderMenuLink = item => (
		<Menu.Item>
			<Link to={item.to} style={{ color: "unset" }}>
				<Menu.Item key={item.key} icon={item.icon && UniversalDashboard.renderComponent(item.icon)}>
					{item.text && UniversalDashboard.renderComponent(item.text)}
				</Menu.Item>
			</Link>
		</Menu.Item>
	)

	const renderMenuContent = item => (
		<Menu.Item key={item.key} icon={item.icon && UniversalDashboard.renderComponent(item.icon)}>
				{(item.content && UniversalDashboard.renderComponent(item.content))}
		</Menu.Item>
	)

	const renderSubMenu = ({ title, content }) => (
		<Menu.SubMenu title={title}>
			{content.map(subItem => (subItem.to && renderMenuLink(subItem)) || renderMenuContent(subItem))}
		</Menu.SubMenu>
	)

	const items = content.map(item =>
		item.type === "ud-antd-sub-menu"
			? renderSubMenu({ ...item })
			: (item.to && renderMenuLink(item)) || renderMenuContent(item)
	)

	return (
		<Menu
			mode={attributes.mode}
			id={attributes.id}
			defaultOpenKeys={[attributes.defaultOpenKeys]}
			selectedKeys={[current]}
			onClick={({ key }) => setCurrent(key)}
			theme={darkMode ? "dark" : "light"}
			forceSubMenuRender={true}
		>
			{items}
		</Menu>
	)
}

export default AntdMenu
