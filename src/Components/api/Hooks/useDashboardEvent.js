import React, { useEffect, useState } from "react"
import { endpoint } from "../consts"

const SET_STATE = "setState"
const REQUEST_STATE = "requestState"
const REMOVE_ELEMENT = "removeElement"
const ADD_ELEMENT = "addElement"
const CLEAR_ELEMENT = "clearElement"
const SYNC_ELEMENT = "syncElement"


function useEndpointSubscription(endpointId, callback){
	const callbackRef = React.useRef() 
	callbackRef.current = callback

	React.useEffect(() => {
		const pubSubToken = UniversalDashboard.subscribe(endpointId, callbackRef.current)
		return () => UniversalDashboard.unsubscribe(pubSubToken)
	},[endpointId])

}
export default function 																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																			useDashboardEvent(elementId, initialState) {
	const { content, ...attributes } = initialState

	const [state, setState] = useState({
		content: content,
		attributes: attributes,
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
					console.log("remove element event",event)
					let newStateContent = state.content.filter(item => item.id !== event.componentId)
					// newStateContent.splice(-1, 1)
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

	useEndpointSubscription(elementId, events)
	const reload = () => {
		UniversalDashboard.get(endpoint(elementId), data =>
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
