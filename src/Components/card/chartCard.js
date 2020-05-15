import React from "react"
import "ant-design-pro/lib/Charts/style/index"
import ChartCard from "ant-design-pro/lib/Charts/ChartCard"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { useMiniProgress } from "../charts/miniProgress"


export default function AntdChartCard({ id, ...props }) {
	const { MiniProgressBar } = useMiniProgress()
	const [{ content, 	attributes }] = useDashboardEvent(id, props)
	const { autoRefresh, refreshInterval, title, action, total, contentHeight, footer, avatar, bordered } = attributes
	// const { data, isFetching, status, error } = useQuery(
	// 	id,
	// 	() =>
	// 		fetch(endpoint(id), {
	// 			headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId },
	// 		})
	// 			.then(res => res.json())
	// 			.then(res => res),
	// 	{
	// 		refetchInterval: autoRefresh && refreshInterval,
	// 		refetchIntervalInBackground: false,
	// 		refetchOnMount: false,
	// 		refetchOnWindowFocus: false,
	// 	}
	// )

	// if (status === "loading") return <Spin spinning={isFetching} />
	// if (status === "error") return <p>{`Error: ${error.message}`}</p>

	return (
		<ChartCard
			bordered={bordered}
			title={title}
			action={UniversalDashboard.renderComponent(action)}
			total={total && UniversalDashboard.renderComponent(total)}
			contentHeight={contentHeight || "auto"}
			footer={footer && UniversalDashboard.renderComponent(footer)}
			avatar={avatar && UniversalDashboard.renderComponent(avatar)}
		>
			{UniversalDashboard.renderComponent(content)}
		</ChartCard>
	)
}
