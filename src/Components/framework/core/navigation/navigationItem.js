import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"

const { Item } = Menu
export default function AntdNavigationItem({ to, icon, title, id, key }) {
	return (
		<Item id={id} key={key} icon={UniversalDashboard.renderComponent(icon)}>
			<Menu.Item>
				<Link to={to} style={{ color: "unset" }}>
					{title}
				</Link>
			</Menu.Item>
		</Item>
	)
}

AntdNavigationItem.displayName = "AntdNavigationItem"
