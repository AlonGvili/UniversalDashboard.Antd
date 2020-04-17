import React, { useEffect, useState, useCallback } from "react"
import queryString from "query-string"
import { useParams } from "react-router-dom"
import useSubscribeToUDEvent from "./useSubscribeToUDEvent"

const dynamicUrl = "/api/internal/component/element/"
const staticUrl = "/api/internal/dashboard/page/"

export default function useFetchPageContent(id, name, dynamic) {
	const [content, setContent] = useState([])

	const params = useParams()
	const query = `?${queryString.stringify(params)}`

	const fetchData = () => {
		if (dynamic) UniversalDashboard.get(`${dynamicUrl}${id}${query}`, data => setContent(data))
		else UniversalDashboard.get(`${staticUrl}${name}`, data => setContent(data.components))(id, query)
	}

	const subscribeToEvent = useCallback((msg, event) => {
		if (event.type === "syncElement") fetchData()
	}, [])

	useEffect(() => {
		const pubSubToken = UniversalDashboard.subscribe(id, subscribeToEvent)
		fetchData()
		return () => UniversalDashboard.unsubscribe(pubSubToken)
	}, [id])

	return [content, fetchData]
}
