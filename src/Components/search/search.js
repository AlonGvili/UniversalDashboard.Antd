import React from "react"
import HeaderSearch from "ant-design-pro/lib/HeaderSearch"
import { useQuery } from "react-query"
import { getMeta } from "../framework/meta"

const dashboardid = getMeta("ud-dashboard")

const searchContext = React.createContext()

export function useSearch() {
	const getSearchResult = React.useCallback(value => {
        
        UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: props.id + "onClick",
			eventName: "onClick",
			eventData: "",
        })
        
		return value
	}, [])

	const api = {
		searchContext,
		endpoint,
		getSearchResult,
	}

	const Search = useSearchComponent(api)

	return {
		...api,
		Search,
	}
}

function useSearchComponent(api) {
	const Search = React.useMemo(
		() => ({ id, placeholder }) => {
			let url = endpoint(id)
			const { endpoint, searchContext } = Search.api

			const { data, isFetching, status, error, failureCount, refetch } = useQuery(
				id,
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
					refetchInterval: false,
					refetchIntervalInBackground: false,
					refetchOnWindowFocus: false,
					refetchOnMount: false,
				}
			)

			if (status === "error") return <p>{`Error: ${error.message}`}</p>

			return (
				<searchContext.Provider value={Search.api}>
					<HeaderSearch placeholder={placeholder} dataSource={[...data]} onPressEnter={onPressEnter}  />
				</searchContext.Provider>
			)
		},
		[]
	)

	Search.api = api

	return Search
}
