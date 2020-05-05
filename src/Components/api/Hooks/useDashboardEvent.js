import { useEffect, useState } from "react"

const SET_STATE = "setState"
const REQUEST_STATE = "requestState"
const REMOVE_ELEMENT = "removeElement"
const ADD_ELEMENT = "addElement"
const CLEAR_ELEMENT = "clearElement"
const SYNC_ELEMENT = "syncElement"

export default function useDashboardEvent(elementId, initialState) {
	const { content, ...attributes } = initialState

	const [state, setState] = useState({
		content: content,
		attributes: attributes,
	})

	useEffect(() => {
		const pubSubToken = UniversalDashboard.subscribe(elementId, events)
		return () => UniversalDashboard.unsubscribe(pubSubToken)
	})

	const events = (msg, event) => {
		switch (event.type) {
			// Set-UDElement
			case SET_STATE:
				console.log("dashboard event set state", event.state)
				setState(prevState => {
					return {
						attributes: { ...prevState.attributes, ...event.state.attributes },
						content: { ...event.state.content },
					}
				})
				break
			// Get-UDElement
			case REQUEST_STATE:
				console.log("REQUEST_STATE: ", state)
				UniversalDashboard.post(`/api/internal/component/element/sessionState/${event.requestId}`, { state })
				break
			// Add-UDElement
			case ADD_ELEMENT:
				setState(state => {
					return {
						...state,
						content: state.content.concat(event.elements),
					}
				})
				break
			// Remove-UDElement
			case REMOVE_ELEMENT:
				setState(state => {
					let newStateContent = state.content
					newStateContent.splice(-1, 1)
					return {
						...state,
						content: [...newStateContent],
					}
				})

				break
			// Clear-UDElement
			case CLEAR_ELEMENT:
				setState(state => {
					return {
						...state,
						content: [],
					}
				})
				break
			// Sync-UDElement
			case SYNC_ELEMENT:
				reload()
				break
			// Just break
			default:
				break
		}
	}

	const reload = () => {
		UniversalDashboard.get(`/api/internal/component/element/${elementId}`, data =>
			setState(state => {
				return {
					...state,
					content: data,
				}
			})
		)
	}

	return [state, reload, setState]
}
