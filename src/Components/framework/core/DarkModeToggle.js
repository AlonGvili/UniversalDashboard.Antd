import React from "react"
import { Switch } from "antd"
import { useDarkMode, useIsDarkMode } from "./darkMode"
import { queryCache } from "react-query"
var darkTheme = require("@ant-design/dark-theme")
var light = require("@ant-design/aliyun-theme").default

export default function AntdDarkModeToggle({ size }) {
	const toggle = useDarkMode()
	const darkMode = useIsDarkMode()

    queryCache.setQueryData("darkMode", darkMode)
	window.localStorage.setItem("darkMode", darkMode)


	return <Switch onClick={toggle} size={size} />
}
