/* eslint-disable react/jsx-key */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react"
import { Menu, Space } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { Link, useLocation } from "react-router-dom"
import { useIsDarkMode } from "../framework/core/darkMode"

const AntdMenu = props => {
	const [state] = useDashboardEvent(props.id, props)
	const { content, attributes } = state
	const [current, setCurrent] = useState([])
	let location = useLocation()
	const darkMode = useIsDarkMode()

	const renderMenuLink = item => (
		<Menu.Item>
			<Link to={item.to} style={{ color: "inherit", width: "100%" }}>
				<Menu.Item key={item.key} icon={item.icon && UniversalDashboard.renderComponent(item.icon)}>
					{item.text && UniversalDashboard.renderComponent(item.text)}
				</Menu.Item>
			</Link>
		</Menu.Item>
	)

	const renderMenuContent = item => (
		<Menu.Item key={item.key} icon={item.icon && UniversalDashboard.renderComponent(item.icon)}>
			<Space>
				{item.text && UniversalDashboard.renderComponent(item.text)}
				{item.content && UniversalDashboard.renderComponent(item.content)}
			</Space>
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
