import React, { Suspense } from "react"
const useSuspense = (Component, fallback = null) => {
	return (
		<Suspense fallback={fallback} >
			<Component />
		</Suspense>
	)
}

export default useSuspense
