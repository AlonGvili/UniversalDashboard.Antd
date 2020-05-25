import React from "react"
import { Switch } from "antd"
import { useDarkMode, useIsDarkMode } from "./darkMode"

export default function AntdDarkModeToggle({ size }) {
	const toggle = useDarkMode()
	
	return <Switch onClick={toggle} size={size} />
}
