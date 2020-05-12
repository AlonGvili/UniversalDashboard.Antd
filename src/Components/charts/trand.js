import React from "react"
import "ant-design-pro/lib/Trend/style/index"
import Trend from "ant-design-pro/lib/Trend"
// import { useQuery } from "react-query"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
// import { getMeta } from "../framework/meta"
// import { Alert } from "antd"

// const dashboardid = getMeta("ud-dashboard")

export default function AntdChartTrend({ id, ...props }) {
	const [{ content, attributes }] = useDashboardEvent(id, props)
	const { reverseColor, flag, colorful } = attributes

	// const { data, status, error } = useQuery(
	// 	id,
	// 	() =>
	// 		fetch(`${window.baseUrl}/api/internal/component/element/${id}`, {
	// 			headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId },
	// 		})
	// 			.then(res => res.json())
	// 			.then(res => setReturnValue(res)),
	// 	{
	// 		refetchInterval: autoRefresh && refreshInterval,
	// 		refetchIntervalInBackground: autoRefresh,
	// 		refetchOnMount: false,
	// 		refetchOnWindowFocus: false,
	// 	}
	// )

	// if (status === "loading") return null
	// if (status === "error") throw error

	return (
			<Trend id={id} colorful={colorful} flag={flag} reverseColor={reverseColor}>
				{content}
			</Trend>
	)
}

AntdChartTrend.displayName = "AntdChartTrend"
