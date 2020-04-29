import React from "react"
import { Col } from "antd"
import { getMeta } from "../framework/meta"
import { useQuery } from "react-query"
import { Spin } from "antd"

const dashboardid = getMeta("ud-dashboard")

export default ({ id, autoRefresh, refreshInterval, ...restOfProps }) => {
	const { data, isFetching, status } = useQuery(
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
		}
	)
	if (status === "loading") return <Spin spinning={isFetching} tip="Getting Data" delay={750} />
	if (status === "error") return <p>{`Error: ${error.message}`}</p>

	return <Col {...restOfProps}>{UniversalDashboard.renderComponent(data)}</Col>
}
