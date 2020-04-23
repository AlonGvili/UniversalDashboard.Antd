import React from "react"
import { Col, Skeleton } from "antd"
import ReactInterval from "react-interval"
import { endpoint } from "../consts"
import useApi from "../Hooks/useApi"

export default ({ id, autoRefresh, refreshInterval, ...restOfProps }) => {
  const [data, loading, error, get] = useApi(endpoint(id))
  
	return (
		<Skeleton loading={loading} paragraph={{ rows: 4 }}>
			<Col {...restOfProps}>{UniversalDashboard.renderComponent(data)}</Col>
			<ReactInterval callback={get} enabled={autoRefresh} timeout={refreshInterval} />
		</Skeleton>
	)
}
