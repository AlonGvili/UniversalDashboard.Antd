import React from "react"
import { useErrorBoundary } from "use-error-boundary"
import { Alert } from "antd"

const { ErrorBoundary } = Alert
export default function AntdErrorBoundary({ children }) {
	const {
		didCatch, // boolean - Whether the ErrorBoundary catched something
		error, // null or the error
		errorInfo, // null or the error info as described in the react docs
	} = useErrorBoundary()

    console.log(errorInfo)
	return (
		<ErrorBoundary message={`An Uncaught Error`} description={errorInfo}>
			{children}
		</ErrorBoundary>
	)
}
