import React, { createContext, useReducer, useContext, Suspense } from "react"

const Context = createContext()

export function DashboardStateProvider({ reducer = appStateReducer, initialState, children }) {
	const value = useReducer(reducer, initialState)
	return (
		<Context.Provider value={value}>
			<Suspense fallback={null}>{children}</Suspense>
		</Context.Provider>
	)
}

export function useDashboardState() {
	return useContext(Context)
}
