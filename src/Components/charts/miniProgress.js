import React from "react"
import { MiniProgress } from "ant-design-pro/lib/Charts"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

export default function AntdChartMiniProgress({ id, ...props }) {
	const [{ attributes }] = useDashboardEvent(id, props)
	return <MiniProgress {...props} />
}
