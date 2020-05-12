import React from "react"
// import "ant-design-pro/lib/Charts/style/index"
import MiniProgress from "ant-design-pro/lib/Charts/MiniProgress"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

export default function AntdChartMiniProgress({ id, ...props }) {
	// const [{ attributes }] = useDashboardEvent(id, props)
	return <MiniProgress {...props} />
}
