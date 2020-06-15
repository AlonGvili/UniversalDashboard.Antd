import React from "react"
import { Timeline, Alert, Spin } from "antd"
import useTimeline from './useTimeline'


export default function AntdTimeline({ id, ...props }) {
	const {content, attributes} = useTimeline({id:id, ...props})
	return (
		<Alert.ErrorBoundary>
			<React.Suspense fallback={ <Spin spinning size="default" /> } >
				<Timeline { ...attributes } >
					{ content }
				</Timeline>
			</React.Suspense>
		</Alert.ErrorBoundary>
	)
}