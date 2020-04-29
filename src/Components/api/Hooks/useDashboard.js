import React, { useEffect } from "react"
import { useQuery } from "react-query"
import useWebSocket from "./useWebSocket"
import useStyleSheets from "./useStyleSheets"
import useJavaScript from "./useJavaScript"
import { Spin } from "antd"

let sessionCheckToken = null

const checkSession = () => {
	UniversalDashboard.get(
		`/api/internal/session/${UniversalDashboard.sessionId}`,
		() => {},
		null,
		() => {
			UniversalDashboard.sessionTimedOut = true
			UniversalDashboard.onSessionTimedOut()
			clearInterval(sessionCheckToken)
		}
	)
}

export default function useDashboard(dashboardid) {

	useEffect(() => {
        let isCurrent = true
        if(isCurrent){
		const { data, status, isFetching, error } = useQuery("dashboard", () =>
			fetch(`${window.baseUrl}/api/internal/dashboard`, {
				headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId },
			})
				.then(res => res.json())
				.then(res => res)
		)


		console.log("dashboard data", data)
        
		if (status === "loading") return <Spin spinning={isFetching} tip="Getting Dashboard" delay={750} />
		if (status === "error") return <p>{`Error: ${error.message}`}</p>
		// if (isFetching) return null

		const { dashboard, sessionId } = data
		const { stylesheets, scripts, design, geolocation } = dashboard
		// useJavaScript(scripts)
		// useStyleSheets(stylesheets)
		// useWebSocket(sessionId, dashboardid)

		// useGeoLocation(geolocation)

		UniversalDashboard.sessionId = sessionId    
		UniversalDashboard.design = design
		// sessionCheckToken = setInterval(checkSession, 5000)

        return { dashboard, sessionId, isFetching, status, error }
        }
        return () => isCurrent = false
	})
}
