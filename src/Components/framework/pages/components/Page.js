import React from "react"
import { useParams } from "react-router-dom"
import queryString from "query-string"
import { useQuery } from "react-query"
import {Spin} from "antd"
// import "antd/es/spin/style/index.css"
import { getMeta } from '../../meta'

const dashboardid = getMeta('ud-dashboard');

export default ({ id, autoRefresh, refreshInterval }) => {
	const params = useParams()
	const query = `?${queryString.stringify(params)}`
	const dynamicUrl = "/api/internal/component/element/"
	let url = `${window.baseUrl}${dynamicUrl}${id}${query}`

	const { data, isFetching, status } = useQuery(
		url,
		() =>
			fetch(url, { headers: { dashboardid,  UDConnectionId: UniversalDashboard.connectionId }})
				.then(res => res.json())
				.then(res => res),
		{
			refetchInterval: autoRefresh && refreshInterval,
			refetchIntervalInBackground: autoRefresh,
		}
	)
	return (
		<Spin spinning={isFetching} tip={`Loading data please wait...`}>
			{status === "loading" ? [] : UniversalDashboard.renderComponent(data)}
		</Spin>
	)
}
