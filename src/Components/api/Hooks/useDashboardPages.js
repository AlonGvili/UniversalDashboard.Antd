import React, { useEffect } from "react"
import { useQuery, queryCache } from "react-query"
import { getMeta } from "../../framework/meta"
import { Spin } from "antd"

const dashboardid = getMeta("ud-dashboard")

export default function useDashboardPages() {
	const { data } = getPages()
	const [pages, setPages] = React.useState(data)
	useEffect(() => {
		if (!data) setPages(queryCache.getQueryData("pages"))
	}, [])
	return pages
}

function getPages() {
	const { data, status, isFetching, error } = useQuery(
		"pages",
		() =>
			fetch(`${window.baseUrl}/api/internal/component/element/pages`, {
				headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId },
			})
				.then(res => res.json())
				.then(res => res),
		{ refetchIntervalInBackground: false, refetchOnMount: true, cacheTime: 1000, refetchOnWindowFocus: true }
	)

	console.log("getPages")

	if (status === "loading") return <Spin spinning={isFetching} tip="Getting Pages" />
	if (status === "error") return <p>{`Error: ${error.message}`}</p>

	return { data, status, error }
}
