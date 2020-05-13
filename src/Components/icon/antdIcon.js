import React from "react"
import Icon from "@ant-design/icons-react"
import * as AntdIcons from "@ant-design/icons-svg/"

export function useIcon() {
	const fontSize = React.useMemo(
		() => ({
			xs: 12,
			sm: 14,
			lg: 16,
			"2x": 18,
			"3x": 24,
			"4x": 32,
			"5x": 48,
			"6x": 64,
			"7x": 96,
			"8x": 128,
			"9x": 192,
			"10x": 256,
		}),
		[]
	)

	const onClick = React.useCallback(
		(event, id) => {
		console.log("Icon event click", event, id)	
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onClick",
			eventName: "onClick",
			eventData: "",
		})
	}, [])

	const api = {
		AntdIcons,
		fontSize,
		onClick,
	}

	const AntdIcon = useIconComponent(api)

	return {
		...api,
		AntdIcon,
	}
}

function useIconComponent(api) {
	const AntdIcon = React.useMemo(
		() => ({ id, name, size, hasCallback }) => {
			const { AntdIcons, fontSize, onClick} = AntdIcon.api
			return (
				<Icon
					className="anticon"
					onClick={(event) => hasCallback && onClick(event,id)}
					type={AntdIcons[name] || AntdIcons.QuestionCircleOutlined}
					style={{ fontSize: fontSize[size] }}
				/>
			)
		},
		[]
	)
	AntdIcon.api = api
	AntdIcon.displayName = "AntdIcon"
	return AntdIcon
}

export default props => {
	const { AntdIcon } = useIcon()
	return <AntdIcon {...props}/>
}