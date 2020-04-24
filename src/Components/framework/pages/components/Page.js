import React, {Fragment } from "react"
import ReactInterval from "react-interval"
import { useParams } from "react-router-dom"
import useApi from "../../../api/Hooks/useApi"
import queryString from "query-string"
import { Spin } from "antd"
const dynamicUrl = "/api/internal/component/element/"

export default ({ id, autoRefresh, refreshInterval }) => {
	const params = useParams()
	const query = `?${queryString.stringify(params)}`
	const {data, loading, error, get} = useApi(`${dynamicUrl}${id}${query}`)
	return (
		<Spin spinning={loading} tip={`Loading data please wait...`} delay={250}>
			{UniversalDashboard.renderComponent(data)}
			<ReactInterval callback={get} enabled={autoRefresh} timeout={refreshInterval} />
		</Spin>
	)
}
