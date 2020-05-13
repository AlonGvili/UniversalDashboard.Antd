import React from "react"

import { getApiPath } from "./config.jsx"
import PubSub from "pubsub-js"
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr"
import LazyElement from "./basics/lazy-element.jsx"
import { useLocation, useHistory } from "react-router-dom"
import { getMeta } from "../Components/framework/meta.js"
import { queryCache, ReactQueryConfigProvider } from "react-query"

const dashboardId = getMeta("ud-dashboard")

var connection

function connectWebSocket(sessionId, location, history) {
	if (connection) {
		// setLoading(false)
	}

	connection = new HubConnectionBuilder()
		.withUrl(getApiPath() + `/dashboardhub?dashboardId=${dashboardId}`)
		.configureLogging(LogLevel.Information)
		.build()

	connection.on("reload", data => {
		window.location.reload(true)
	})

	connection.on("setState", json => {
		var data = JSON.parse(json)

		PubSub.publish(data.componentId, {
			type: "setState",
			state: data.state,
		})
	})

	connection.on("showToast", json => {
		var model = JSON.parse(json)
		toaster.show(model)
	})

	connection.on("showError", json => {
		var model = JSON.parse(json)
		console.log(model)
	})

	connection.on("requestState", json => {
		var data = JSON.parse(json)

		PubSub.publish(data.componentId, {
			type: "requestState",
			requestId: data.requestId,
		})
	})

	connection.on("removeElement", json => {
		var data = JSON.parse(json)

		PubSub.publish(data.componentId, {
			type: "removeElement",
			componentId: data.componentId,
			parentId: data.parentId,
		})
	})

	connection.on("clearElement", componentId => {
		PubSub.publish(componentId, {
			type: "clearElement",
			componentId: componentId,
		})
	})

	connection.on("syncElement", componentId => {
		PubSub.publish(componentId, {
			type: "syncElement",
			componentId: componentId,
		})
	})

	connection.on("addElement", json => {
		var data = JSON.parse(json)

		PubSub.publish(data.componentId, {
			type: "addElement",
			componentId: data.componentId,
			elements: data.elements,
		})
	})

	connection.on("showModal", json => {
		var props = JSON.parse(json)
		PubSub.publish("modal.open", props)
	})

	connection.on("closeModal", () => {
		PubSub.publish("modal.close", {})
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

	connection.on("select", json => {
		var data = JSON.parse(json)
		document.getElementById(data.id).focus()
		if (data.scrollToElement) {
			document.getElementById(data.id).scrollIntoView()
		}
	})

	connection.on("invokejavascript", jsscript => {
		eval(jsscript)
	})

	connection.on("write", message => {
		PubSub.publish("write", message)
	})

	connection.on("setConnectionId", id => {
		UniversalDashboard.connectionId = id
		// setLoading(false)
	})

	PubSub.subscribe("element-event", function (e, data) {
		if (data.type === "requestStateResponse") {
			connection.invoke("requestStateResponse", data.requestId, data.state)
		}

		if (data.type === "clientEvent") {
			console.log("clientEvent", data)
			connection.invoke("clientEvent", data.eventId, data.eventName, data.eventData, "").catch(function (e) {
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
}

function loadStylesheet(url) {
	var styles = document.createElement("link")
	styles.rel = "stylesheet"
	styles.type = "text/css"
	styles.media = "screen"
	styles.href = url
	document.getElementsByTagName("head")[0].appendChild(styles)
}

function loadJavascript(url, onLoad) {
	var jsElm = document.createElement("script")
	jsElm.onload = onLoad
	jsElm.type = "application/javascript"
	jsElm.src = url
	document.body.appendChild(jsElm)
}

const loadData = (setDashboard, history, location) => {
	UniversalDashboard.get(
		"/api/internal/dashboard",
		function (json) {
			var dashboard = json.dashboard

			// if (dashboard.stylesheets) dashboard.stylesheets.map(loadStylesheet)
			// if (dashboard.scripts) dashboard.scripts.map(loadJavascript)
			
			queryCache.setQueryData("pages", dashboard.pages)

			connectWebSocket(json.sessionId, location, history)
			UniversalDashboard.sessionId = json.sessionId

			UniversalDashboard.design = dashboard.design

			setDashboard(dashboard)
		},
		history
	)
}

function Dashboard() {
	const [dashboard, setDashboard] = React.useState(null)
	let history = useHistory()
	let location = useLocation()

	const dashboardRef = React.useRef(UniversalDashboard.connectionId)
	React.useEffect(() => {
		let isCurrent = true
		if (isCurrent) {
			loadData(setDashboard, history, location)
		}
		return () => (isCurrent = false)
	}, [UniversalDashboard.connectionId, dashboardId])

	if (!dashboard) return null
	
	return UniversalDashboard.renderDashboard({
		dashboard,
		history,
	})
}

export default Dashboard
