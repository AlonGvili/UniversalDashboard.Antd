import React, { useEffect } from "react"
import queryString from "query-string"
import { useParams } from "react-router-dom"
// import useSubscribeToUDEvent from "./useSubscribeToUDEvent"
import useApi from "./useApi"

const dynamicUrl = "/api/internal/component/element/"
const staticUrl = "/api/internal/dashboard/page/"

export default function useFetchPageContent(id, name, dynamic) {
	const params = useParams()
	const query = `?${queryString.stringify(params)}`

	const [data, loading, error, get] = useApi(`${dynamicUrl}${id}${query}`)
	
	// useEffect(() => {
	// 	const pubSubToken = UniversalDashboard.subscribe(id, subscribeToEvent)
	// 	return () => UniversalDashboard.unsubscribe(pubSubToken)
	// }, [id])

	return [data, loading, error, get]
}
