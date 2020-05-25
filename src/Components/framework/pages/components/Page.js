import React from "react"
import usePage from '../usePage'
import { Alert, Spin } from "antd"

export default function AntdPage({ id }) {
	const { data, status, error, isFetching } = usePage(id)
	if (status === "loading") return <Spin spinning={isFetching} size="large" tip="Getting page data" delay={750}/>
	if (status === "error") return console.log("page error", error.message)
	return <div>{UniversalDashboard.renderComponent(data)}</div>
}
