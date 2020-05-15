import React from "react"
import Field from "ant-design-pro/lib/Charts/Field"
import { useQuery } from "react-query"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { getMeta } from "../framework/meta"
import { endpoint } from "../api/consts"

const dashboardid = getMeta("ud-dashboard")

export default function AntdChartField({ id, ...props }) {
	const [{ content, attributes }] = useDashboardEvent(id, props)
	const { label, autoRefresh, refreshInterval } = attributes

	const [returnValue, setReturnValue] = React.useState(content)

	const { status, error } = useQuery(
		id,
		() =>
			fetch(endpoint(id), {
				headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId },
			})
				.then(res => res.json())
				.then(res => setReturnValue(res)),
		{
			refetchInterval: autoRefresh && refreshInterval,
			refetchIntervalInBackground: autoRefresh,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		}
	)

	if (status === "loading") return null
	if (status === "error") return <p>{`Error: ${error.message}`}</p>
		
	return <Field id={id} label={UniversalDashboard.renderComponent(label)} value={UniversalDashboard.renderComponent(returnValue)} />
}

AntdChartField.displayName = "AntdChartField"
