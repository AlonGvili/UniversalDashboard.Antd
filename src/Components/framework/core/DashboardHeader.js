import React, { useState, useEffect } from "react"
import { Layout, Menu, Spin } from "antd"
import { Link, useLocation } from "react-router-dom"
import { queryCache, useQuery } from "react-query"
import { getMeta } from '../meta'

const dashboardid = getMeta('ud-dashboard');

export default function DashboardHeader({ visible = true }) {
	const [current, setCurrent] = useState([])
	const location = useLocation()

	const { data, isFetching, error, status } = useQuery("pages", () =>
		fetch(`${window.baseUrl}/api/internal/component/element/pages`, { headers: { dashboardid,  UDConnectionId: UniversalDashboard.connectionId }})
			.then(res => res.json())
			.then(res => res)
	)
	

	if (status === "loading") return <Spin spinning={isFetching} tip="Getting Pages" delay={750} />
	if (status === "error") return <p>{`Error: ${error.message}`}</p> 

	const pages = data.filter(page => page.name !== "404")
	const links = pages.map(page => (
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
						current === `${location.pathname.split("/")[1]}`
							? current
							: `${location.pathname.split("/")[1]}`,
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
