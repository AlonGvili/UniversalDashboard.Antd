import "./framework/public-path"
import React from "react"
import AntDesign from "./api/dashboard"
import registerComponents from "./api/imports"
import disableUdTheme from "./resets/reset-style"

UniversalDashboard.renderDashboard = ({ dashboard }) => {
	registerComponents()
	disableUdTheme()
	return <AntDesign dashboard={dashboard} />
}
