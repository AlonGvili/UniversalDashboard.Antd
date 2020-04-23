import React, { useContext } from "react"
import { Layout, Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
import { DashboardContext } from "../appReducer"

export default function DashboardHeader({ content = [], visible = true }) {
	const location = useLocation()

	const {
		state: { pages, selectedPageKey },
		setPage
	} = useContext(DashboardContext)

	const handleClick = eventKey => {
		let pTitle = pages.find(page => {
			return page.name === eventKey
		})
		console.log("eventKey", eventKey,pTitle)
		setPage(eventKey, pTitle.title)
	}

	return (
		visible && (
			<Layout.Header>
				<Menu
					theme="dark"
					mode="horizontal"
					onClick={({ key }) => handleClick(key)}
					selectedKeys={[selectedPageKey || `${location.pathname.split("/")[1]}`]}
					defaultSelectedKeys={[`${location.pathname.split("/")[1]}`]}
				>
					{pages.map((page, index) => (
						<Menu.Item key={page.name}>
							<Link
								to={{
									pathname: `/${page.name}`,
									state: {
										returnPathname: location.pathname
									}
								}}
							>
								{page.name}
							</Link>
						</Menu.Item>
					))}
				</Menu>
			</Layout.Header>
		)
	)
}

DashboardHeader.displayName = "DashboardHeader"
