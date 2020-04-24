// import { REMOVE_TAG, ADD_TAG, SET_TAG } from "./consts"
import React, { useReducer, createContext, Suspense, useCallback, useState } from "react"
import { Tag } from "antd"


const AntdTag = ({ content, icon, color, id, closable }) => {
	const [closed, setClosed] = useState(false)

	return (
		<Tag
			id={id}
			icon={icon && UniversalDashboard.renderComponent(icon)}
			onClose={() => closable && setClosed(true)}
			visible={!closed}
			color={color}
			closable={closable}
		>
			{UniversalDashboard.renderComponent(content)}
		</Tag>
	)
}

export default AntdTag



