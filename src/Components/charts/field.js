import React from "react"
import { Field } from "ant-design-pro/lib/Charts"
import { useQuery } from "react-query"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { getMeta } from "../framework/meta"

const dashboardid = getMeta	("ud-dashboard")

export default function AntdChartField({ id, ...props }) {
	const [{ attributes }] = useDashboardEvent(id, props)
	const { label, autoRefresh, refreshInterval } = attributes
	const { data, status, error } = useQuery(
		id,
		() =>
			fetch(`${window.baseUrl}/api/internal/component/element/${id}`, {
				headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId },
			})
				.then(res => res.json())
				.then(res => res),
		{
			refetchInterval: autoRefresh && refreshInterval,
			refetchIntervalInBackground: autoRefresh,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		}
	)

	if (status === "loading") return null
	if (status === "error") return <p>{`Error: ${error.message}`}</p>

	return (
		<Field
			id={id}
			label={UniversalDashboard.renderComponent(label)}
			value={UniversalDashboard.renderComponent(data)}
		/>
	)
}
