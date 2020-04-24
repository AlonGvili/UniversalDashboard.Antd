import React, { useRef, useEffect } from "react"

export default function useEffectAfterMount(callback, dependencies) {
	const componentJustMounted = useRef(true)
	useEffect(() => {
		if (!componentJustMounted.current) return callback()
		componentJustMounted.current = false
	}, dependencies)
}
