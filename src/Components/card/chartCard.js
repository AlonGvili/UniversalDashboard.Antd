import React from "react"
import { ChartCard } from "ant-design-pro/lib/Charts"
import "ant-design-pro/lib/Charts/style"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { getMeta } from "../framework/meta"
import { useQuery } from "react-query"
import { Spin } from "antd"

const dashboardid = getMeta("ud-dashboard")

export default function AntdChartCard({
	id,
	autoRefresh,
	refreshInterval,
	title,
	action,
	total,
	contentHeight,
	footer,
    avatar,
    bordered
}) {
    const [{ attributes }] = useDashboardEvent(id, {
		autoRefresh,
		refreshInterval,
		title,
		action,
		total,
		contentHeight,
		footer,
		avatar,
		bordered,
	})
	const { data, isFetching, status, error } = useQuery(
		id,
		() =>
			fetch(`${window.baseUrl}/api/internal/component/element/${id}`, {
				headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId },
			})
				.then(res => res.json())
				.then(res => res),
		{
			refetchInterval: autoRefresh && refreshInterval,
			refetchIntervalInBackground: false,
			refetchOnMount: false,
            refetchOnWindowFocus: false,
		}
	)

    if(status === "loading") return <Spin spinning={isFetching}/>
	if (status === "error") return <p>{`Error: ${error.message}`}</p>

	return (
		<ChartCard 
            bordered={bordered}
			title={title}
			action={UniversalDashboard.renderComponent(action)}
			total={attributes.total}
			contentHeight={contentHeight || "auto"}
			footer={footer && UniversalDashboard.renderComponent(footer)}
			avatar={avatar && UniversalDashboard.renderComponent(avatar)}
		>
			{UniversalDashboard.renderComponent(data)}
		</ChartCard>
	)
}
