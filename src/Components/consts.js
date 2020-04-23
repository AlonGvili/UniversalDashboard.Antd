/**
 *  Pages Action
 */

export const ADD_PAGE = "ADD_PAGE"
export const REMOVE_PAGE = "REMOVE_PAGE"
export const SET_PAGE = "SET_PAGE"

/**
 *  Feedback Actions
 */

export const SET_VISIBILITY = "SET_VISIBILITY" // show or hide component
export const SET_LOADING = "SET_LOADING" // show or hide global loader
export const SET_SIDEBAR = "SET_SIDEBAR"
/**
 *  Layout Actions
 */

export const SET_LAYOUT = "SET_LAYOUT"

/**
 *  Theme Action
 */

export const SET_THEME = "SET_THEME"
export const ADD_THEME = "ADD_THEME"
export const REMOVE_THEME = "REMOVE_THEME"
export const SET_PRIMARY_COLOR = "SET_PRIMARY_COLOR"
export const SET_COLOR_MODE = "SET_COLOR_MODE"

/**
 *  Api Actions
 */

export const FETCH_GET = "FETCH_GET"
export const FETCH_POST = "FETCH_POST"
export const FETCH_DELETE = "FETCH_DELETE"
export const FETCH_PUT = "FETCH_PUT"
export const FETCH_FORM_DATA = "FETCH_FORM_DATA"

/**
 *  Endpoint Actions
 */

export const SET_COMPONENT = "setState"
export const GET_COMPONENT = "requestState"
export const ADD_COMPONENT = "addElement"
export const REMOVE_COMPONENT = "removeElement"
export const CLEAR_COMPONENT = "clearElement"
export const SYNC_COMPONENT = "syncElement"

/**
 *  Endpoint Urls
 */

export const endpoint = elementId => `/api/internal/component/element/${elementId}`
