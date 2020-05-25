import React from "react"
import "ant-design-pro/lib/Trend/style/index"
import Trend from "ant-design-pro/lib/Trend"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { Alert } from "antd"
import useTrend from './useTrend'
export default function AntdChartTrend({ id, ...props }) {
	const [{ attributes }] = useDashboardEvent(id, props)
	const { autoRefresh, refreshInterval, ...restOfProps } = attributes
	const { data, error, status } = useTrend(id, autoRefresh, refreshInterval)

	if (status === "error") return <Alert message={error.message} type="error"  />
	
	return (
		<Trend {...restOfProps}>
			{data}
		</Trend>
	)
}

AntdChartTrend.displayName = "AntdChartTrend"
