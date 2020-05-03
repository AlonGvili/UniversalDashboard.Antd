import React from "react"
import { Menu } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { Link } from 'react-router-dom';

const AntdMenuItem = props => {
	const [{ attributes:{ text, icon, to, ...restOfProps} }] = useDashboardEvent(props.id, props)

	const onClick = event => {
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: restOfProps.id + "onClick",
			eventName: "onClick",
			eventData: JSON.stringify(event.item.toString()),
		})
	}

	return (
		<Menu.Item
			{...restOfProps}
			onClick={onClick}
			icon={icon && UniversalDashboard.renderComponent(icon)}
		>
			{to && <Link to={to} style={{color: "unset"}}> 
				{text}
			</Link> || text
			}
		</Menu.Item>
	)
}

export default AntdMenuItem
