import React, { useEffect } from "react"
import ReactInterval from "react-interval"
import useFetchPageContent from "../Hooks/useFetchPageContent"

export default ({ id, dynamic, name, autoRefresh, refreshInterval }) => {
	const [content, fetch] = useFetchPageContent(id, name, dynamic)

	return (
		<React.Fragment>
			{UniversalDashboard.renderComponent(content)}
			<ReactInterval callback={fetch} enabled={autoRefresh} timeout={refreshInterval} />
		</React.Fragment>
	)
}
