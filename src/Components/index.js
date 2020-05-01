// import "./framework/public-path"
import React, { Suspense } from "react"
import AntDesign from "./api/dashboard"
import registerComponents from "./api/imports"
// import disableUdTheme from "./resets/reset-style"

UniversalDashboard.renderDashboard = () => {
	registerComponents()
	// disableUdTheme()
	return (
		<Suspense fallback={null}>
			<AntDesign />
		</Suspense>
	)
}
