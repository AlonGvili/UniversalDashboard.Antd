import "./framework/public-path"
import React from "react"
import AntDesign from "./dashboard"
import { DashboardProvider } from "./appReducer"
import registerComponents from "./imports"
import { disableUdTheme } from "./resets/reset-style"

UniversalDashboard.renderDashboard = ({ dashboard }) => {
	registerComponents()
	disableUdTheme()
	return (
		<DashboardProvider>
			<AntDesign dashboard={dashboard} />
		</DashboardProvider>
	)
}
