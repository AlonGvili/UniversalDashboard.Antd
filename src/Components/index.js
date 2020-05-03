/* eslint-disable react/display-name */
import React, { Suspense } from "react"
import AntDesign from "./api/dashboard"
import registerComponents from "./api/imports"


UniversalDashboard.renderDashboard = ({ dashboard }) => {
	registerComponents()
	return (
		<Suspense fallback={null}>
			<AntDesign appbar={dashboard.appbar}/>
		</Suspense>
	)
}
