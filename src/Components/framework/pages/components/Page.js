import React from "react"
import usePage from '../usePage'
import { Alert, Spin } from "antd"

export default function AntdPage({ id }) {
	const { data, status, error, isFetching } = usePage(id)
	if (status === "error") return <Alert message={error.message} type="error" />
	return (
		<Alert.ErrorBoundary>
			<React.Suspense
				fallback={<Spin spinning={isFetching} size="large" tip="Getting page data" />}
			>
				{UniversalDashboard.renderComponent(data)}
			</React.Suspense>
		</Alert.ErrorBoundary>
	)
}
