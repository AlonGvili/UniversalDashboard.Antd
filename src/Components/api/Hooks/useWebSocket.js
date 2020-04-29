import React, { useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr"
// import { getMeta } from "../../framework/meta"
import { publish, subscribe } from "pubsub-js"
import { getApiPath } from "../../../app/config.jsx"

let connection
// const  = getMeta("ud-dashboard")
export default function useWebSocket(sessionId, dashboardId) {
	const location = useLocation()
	const history = useHistory()

	useEffect(() => {
		connection = new HubConnectionBuilder()
			.withUrl(`${getApiPath()}/dashboardhub?dashboardId=${dashboardId}`)
			.configureLogging(LogLevel.Information)
			.build()

		connection.on("reload", data => {
			window.location.reload(true)
		})

		connection.on("setState", json => {
			var data = JSON.parse(json)
			console.log("data", data)
			publish(data.componentId, {
				type: "setState",
				state: data.state,
			})
		})

		connection.on("requestState", json => {
			var data = JSON.parse(json)

			publish(data.componentId, {
				type: "requestState",
				requestId: data.requestId,
			})
		})

		connection.on("removeElement", json => {
			var data = JSON.parse(json)

			publish(data.componentId, {
				type: "removeElement",
				componentId: data.componentId,
				parentId: data.parentId,
			})
		})

		connection.on("clearElement", componentId => {
			publish(componentId, {
				type: "clearElement",
				componentId: componentId,
			})
		})

		connection.on("syncElement", componentId => {
			publish(componentId, {
				type: "syncElement",
				componentId: componentId,
			})
		})

		connection.on("addElement", json => {
			var data = JSON.parse(json)

			publish(data.componentId, {
				type: "addElement",
				componentId: data.componentId,
				elements: data.elements,
			})
		})

		connection.on("redirect", json => {
			var data = JSON.parse(json)

			if (data.url.startsWith("/")) {
				history.push(url)
			} else if (data.openInNewWindow) {
				window.open(data.url)
			} else {
				window.location.href = data.url
			}
		})

		connection.on("write", message => {
			publish("write", message)
		})

		connection.on("setConnectionId", id => {
			console.log("connectionId", id)
			UniversalDashboard.connectionId = id
		})

		subscribe("element-event", function (e, data) {
			if (data.type === "requestStateResponse") {
				connection.invoke("requestStateResponse", data.requestId, data.state)
			}

			if (data.type === "clientEvent") {
				console.log("clientEvent", data)
				connection
					.invoke("clientEvent", data.eventId, data.eventName, data.eventData, location)
					.catch(function (e) {
						console.log(e.message)
					})
			}

			if (data.type === "unregisterEvent") {
				connection.invoke("unregisterEvent", data.eventId)
			}
		})

		connection.start().then(x => {
			window.UniversalDashboard.webSocket = connection
			connection.invoke("setSessionId", sessionId)
		})
	}, [sessionId, dashboardId])
}
