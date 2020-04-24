import React from "react"
import { Col, Skeleton } from "antd"
import ReactInterval from "react-interval"
import { endpoint } from "../api/consts";
import useApi from "../api/Hooks/useApi";

export default ({ id, autoRefresh, refreshInterval, ...restOfProps }) => {
  const {data, get} = useApi(endpoint(id))
  
	return (
		<React.Fragment>
			<Col {...restOfProps}>{UniversalDashboard.renderComponent(data)}</Col>
			<ReactInterval callback={get} enabled={autoRefresh} timeout={refreshInterval} />
		</React.Fragment>
	)
}
