import React from "react"
import { Switch } from "antd"
import { useDarkMode, useIsDarkMode } from "./darkMode"
// import darkTheme from "@ant-design/dark-theme"
import aliyunTheme from "@ant-design/aliyun-theme"
export default function AntdDarkModeToggle({ size }) {
	const toggle = useDarkMode()
	const darkMode = useIsDarkMode()

	// !!darkMode &&
	// 		window.less
	// 			.modifyVars(aliyunTheme)
	// 			.then(c => console.log("theme was update to light"))
	// 			.catch(err => console.log(err))
				

	return <Switch onClick={toggle} size={size} />
}
