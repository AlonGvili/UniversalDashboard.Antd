import React, { useEffect } from "react"
import ReactInterval from "react-interval"
import useFetchPageContent from "../Hooks/useFetchPageContent"
import { Spin } from "antd"

export default ({ id, name, autoRefresh, refreshInterval }) => {
	const [data, loading, error, get] = useFetchPageContent(id, name)

	return (
		<Spin spinning={loading} >
			{UniversalDashboard.renderComponent(data)}
			<ReactInterval callback={get} enabled={autoRefresh} timeout={refreshInterval} />
		</Spin>
	)
}
