import React from "react"
import { useParams } from "react-router-dom"
import queryString from "query-string"
import { useQuery } from "react-query"
import Spin from "antd/es/spin"
import "antd/es/spin/style/index.css"

export default ({ id, autoRefresh, refreshInterval }) => {
	const params = useParams()
	const query = `?${queryString.stringify(params)}`
	const dynamicUrl = "/api/internal/component/element/"

	const { data, isFetching, status } = useQuery(
		id,
		() =>
			fetch(`${window.baseUrl}${dynamicUrl}${id}${query}`)
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
