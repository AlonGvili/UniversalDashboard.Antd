import React, { useContext, useState } from "react"
import { Layout, Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
import { DashboardContext } from "../../api/appReducer"

export default function DashboardHeader({ visible = true }) {
	const location = useLocation()
	const {
		state: { pages },
	} = useContext(DashboardContext)
	const [current, setCurrent] = useState([])

	const links = pages.map((page, index) => (
		<Menu.Item key={page.name}>
			<Link to={`/${page.name}`}>{page.name}</Link>
		</Menu.Item>
	))

	return (
		visible && (
			<Layout.Header>
				<Menu
					theme="dark"
					mode="horizontal"
					onClick={({ key }) => setCurrent(key)}
					selectedKeys={[
						current === `${location.pathname.split("/")[1]}`  ? current : `${location.pathname.split("/")[1]}`,
					]}
					defaultSelectedKeys={[current || `${location.pathname.split("/")[1]}`]}
				>
					{links}
				</Menu>
			</Layout.Header>
		)
	)
}

DashboardHeader.displayName = "DashboardHeader"
