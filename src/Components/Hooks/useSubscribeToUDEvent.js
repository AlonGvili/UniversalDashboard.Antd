import React,{ useEffect } from "react"

export default function useSubscribeToUDEvent(id,callback) {
	useEffect(() => {
		const pubSubToken = UniversalDashboard.subscribe(id, callback())
		return () => UniversalDashboard.unsubscribe(pubSubToken)
	},[id])
}
