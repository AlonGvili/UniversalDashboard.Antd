import React, { useEffect } from "react"
import { Switch } from "antd"
import { useDarkMode, useIsDarkMode } from "./darkMode"
import darkTheme from "@ant-design/dark-theme"
import aliyunTheme from "@ant-design/aliyun-theme"
import useLocalStorage from "../../api/Hooks/useLocalStorage"


export default function AntdDarkModeToggle({ size }) {
	const toggle = useDarkMode()
	const darkMode = useIsDarkMode()
	const [value, setValue] = useLocalStorage("udtheme", () => ({
		...aliyunTheme
	}))																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																								

	useEffect(() => {
		;(darkMode && setValue(darkTheme)) || setValue(aliyunTheme)
	},[darkMode])

	console.log("udtheme",value)	

	return <Switch onClick={toggle} size={size} />
}
