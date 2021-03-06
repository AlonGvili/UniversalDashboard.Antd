import React from "react"
import { Dropdown, Avatar, Space } from "antd"

export default function HeaderAccountSettings({ image, size, name, menu }) {
	return (
		<Dropdown overlay={UniversalDashboard.renderComponent(menu)} placement="bottomCenter" forceRender>
			<Space size="small">
				<Avatar src={image} size={size} style={{ marginRight: 0 }} />
				{name}
			</Space>
		</Dropdown>
	)
}

HeaderAccountSettings.displayName = "HeaderAccountSettings"
