import React from "react"
import usePage from '../usePage'
import { Alert, Spin } from "antd"
import { endpoint } from '../../../api/consts'

export default function AntdPage({ id }) {
	const pageUrl = endpoint(id)
	const { data, isFetching } = usePage(pageUrl)
	return (
		<Alert.ErrorBoundary>
			<React.Suspense
				fallback={ <Spin spinning={ isFetching } size="large" tip="Getting page data" /> }
			>
				{ UniversalDashboard.renderComponent(data) }
			</React.Suspense>
		</Alert.ErrorBoundary>
	)
}
