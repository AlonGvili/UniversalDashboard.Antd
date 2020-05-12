import React from "react"
import { useParams } from "react-router-dom"
import queryString from "query-string"
import { useQuery } from "react-query"
import { Spin } from "antd"
import { getMeta } from "../../meta"

const dashboardid = getMeta("ud-dashboard")

export default ({ id, autoRefresh, refreshInterval }) => {
	const params = useParams()
	const query = `?${queryString.stringify(params)}`
	const dynamicUrl = "/api/internal/component/element/"
	let url = `${window.baseUrl}${dynamicUrl}${id}${query}`

	const { data, isFetching, status, error } = useQuery(
		["pageUrl", {pageUrl: url}],
		() =>
			fetch(url, { headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId } })
				.then(res => res.json())
				.then(res => res),
		{
			refetchInterval: autoRefresh && refreshInterval,
			refetchIntervalInBackground: autoRefresh,
			retry: 3,
			refetchOnWindowFocus: false,
			refetchOnMount: false
		}
	)

	if (status === "loading") return <Spin spinning={isFetching} tip="Getting Page Data" />
	if (status === "error") return <p>{`Error: ${error.message}`}</p>

	console.log("page data", data)
	return (
		UniversalDashboard.renderComponent(data)
	)
}
