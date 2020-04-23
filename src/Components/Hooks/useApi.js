import React, { useEffect, useReducer, useState } from "react"


const baseUrl = window.baseUrl

const useApi = url => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(true)

	function fetchApiData() {
		fetch(`${baseUrl}${url}`)
			.then(response => response.json())
			.then(response => {
				setLoading(false)
				setData(response)
			})
			.catch(error => {
				setLoading(false)
				setError(error.message)
			})
	}

	useEffect(() => {
		let isCurrent = true

		if (isCurrent) {
			setLoading(true)
			setData([])
			setError(null)
			fetchApiData()
		}
		return () => (isCurrent = false)
	}, [url])

	return [data, loading, error, fetchApiData]
}

useApi.displayName = "useApi"

export default useApi
