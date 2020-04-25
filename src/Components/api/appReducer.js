// import { SET_SIDEBAR } from "./consts"
import React, { useReducer, createContext, useCallback } from "react"

const SET_SIDEBAR = "SET_SIDEBAR"

const initialState = {
	framework: "Antd",
	theme: {
		defaultTheme: {},
		selectedTheme: {},
		colorModes: [],
		selectedColorMode: "",
	},
	sideMenu: {
		collapsed: true,
	},
}

export const DashboardContext = createContext()

const reducer = (state, action) => {

	if (action.type === SET_SIDEBAR) {
		return {
			...state,
			sideMenu: { collapsed: action.payload.collapsed },
		}
	}

	return state
}

const DashboardProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)

	const setSidebar = useCallback(
		collapsed => {
			dispatch({
				type: SET_SIDEBAR,
				payload: { collapsed },
			})
		},
		[dispatch]
	)
	
	let collapsed = state.sideMenu.collapsed

	let value = React.useMemo(
		() => ({collapsed, dispatch, setSidebar }),
		[collapsed, dispatch, setSidebar]
	)
	return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}

export default DashboardProvider
