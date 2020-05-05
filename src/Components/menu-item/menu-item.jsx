import React from "react"
import { Menu } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { Link, useRouteMatch } from "react-router-dom"

const AntdMenuItem = props => {
	const [
		{
			attributes: { text, icon, to, key, ...restOfProps },
		},
	] = useDashboardEvent(props.id, props)

	let match = useRouteMatch()
	// const onClick = event => {
	// 	UniversalDashboard.publish("element-event", {
	// 		type: "clientEvent",
	// 		eventId: restOfProps.id + "onClick",
	// 		eventName: "onClick",
	// 		eventData: JSON.stringify(event.item.toString()),
	// 	})
	// }

	console.log('match', match)
	return (
		<Menu.Item key={key}>
			<Link to={to} component={Menu.Item} style={{ color: "inherit" }}>
				<Menu.Item key={key} icon={icon && UniversalDashboard.renderComponent(icon)}>
					{text && UniversalDashboard.renderComponent(text)}
				</Menu.Item>
			</Link>
		</Menu.Item>
	)
}

export default AntdMenuItem
