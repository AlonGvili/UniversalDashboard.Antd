const initialState = { authAttempted: false, auth: null, user: null, theme: { primaryColor: ''}  }

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_CHANGE": {
      return { ...state, auth: action.auth, authAttempted: true }
    }
    case "LOAD_USER": {
      return { ...state, user: action.user }
    }
    case "SET_THEME": {
      return { ...state, theme: { primaryColor: action.theme } }
    }
    default:
      return state
  }
}

export { initialState }
export default appStateReducer
