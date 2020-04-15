const initialState = {
	pages: [],
	page: {},
	getPage: name => pages.find(page => page.name === name),
	routes: [],
	components: UniversalDashboard.components,
	renderComponent: UniversalDashboard.renderComponent,
	registerComponent: UniversalDashboard.register,
	framework: "Antd",
	...UniversalDashboard,
}

const appStateReducer = (state, action) => {
	switch (action.type) {
		case "LOAD_PAGES": {
			return { ...state, pages: action.payload }
		}
		case "GET_PAGE": {
			// const page = state.getPage(action.payload)
			return {
				...state,
				page: state.pages.find(page => page.name === action.payload),
			}
		}
		case "LOAD_ROUTES": {
			return { ...state, routes: action.payload }
		}
		default:
			return state
	}
}

export { initialState }
export default appStateReducer
