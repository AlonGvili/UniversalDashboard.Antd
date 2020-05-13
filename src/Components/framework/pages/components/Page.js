import React from "react"
import { useQuery } from "react-query"
import { getMeta } from "../../meta"
import { endpoint } from "../../../api/consts"

const dashboardid = getMeta("ud-dashboard")

const pageContext = React.createContext()

export function usePage() {
	const dataRef = React.useRef()

	const api = {
		pageContext,
		endpoint,
		dataRef,
	}

	const Page = usePageComponent(api)

	return {
		...api,
		Page,
	}
}

function usePageComponent(api) {
	const Page = React.useMemo(
		() => ({ id, autoRefresh, refreshInterval }) => {
			const { endpoint, pageContext, dataRef } = Page.api

			let url = endpoint(id)

			const { data, status, error } = useQuery(
				["pageUrl", { pageUrl: url }],
				() =>
					fetch(url, {
						headers: {
							dashboardid,
							UDConnectionId: UniversalDashboard.connectionId,
						},
					})
						.then(res => res.json())
						.then(res => res),
				{
					refetchInterval: autoRefresh && refreshInterval,
					refetchIntervalInBackground: autoRefresh,
					retry: 3,
					refetchOnWindowFocus: false,
					refetchOnMount: false,
				}
			)
			if (status === "error") return <p>{`Error: ${error.message}`}</p>
			dataRef.current = data

			return (
				<pageContext.Provider value={Page.api}>
					{UniversalDashboard.renderComponent(dataRef.current)}
				</pageContext.Provider>
			)
		},
		[]
	)

	Page.api = api

	return Page
}
