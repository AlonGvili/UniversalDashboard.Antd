import React from "react"
import Icon from "@ant-design/icons-react"
import * as AntdIcons from "@ant-design/icons-svg/"

export default ({ name, size }) => {
	const fontSize = {
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
	}

	return <Icon className="anticon" type={AntdIcons[name] || AntdIcons.QuestionCircleOutlined} style={{fontSize: fontSize[size]}}/>
}
