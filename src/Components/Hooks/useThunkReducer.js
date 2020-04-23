import React, { useReducer, useCallback } from "react"

export default function useThunkReducer(reducer, initialState) {
	const [state, dispatch] = useReducer(reducer, initialState)

	const thunkDispatch = useCallback(
		action => {
			if (typeof action === "function") {
				action(dispatch)
			} else {
				dispatch(action)
			}
		},
		[dispatch]
	)

	return [state, thunkDispatch]
}
