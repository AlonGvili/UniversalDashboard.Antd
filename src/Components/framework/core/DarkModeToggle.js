import React from "react"
import { Switch } from "antd"
import { useDarkMode, useIsDarkMode } from "./darkMode"

export default function AntdDarkModeToggle() {
        const darkMode = useIsDarkMode()
	const toggle = useDarkMode()

	console.log("darkMode on: ", darkMode)
	return <Switch onChange={toggle} />
}
