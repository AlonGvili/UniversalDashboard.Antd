import React, { Suspense } from "react"

const UdElementComponent = React.lazy(() => import("./../ud-element.jsx" /* webpackChunkName: "ud-element" */))

export function internalRenderComponent(component, history) {
	if (!component) return null

	switch (component.type) {
		case "element":
			return (
				<Suspense fallback={null}>
					<UdElementComponent {...component} key={component.key} history={history} />
				</Suspense>
			)
	}

	return component
}

export default function renderComponent(component, history, dynamicallyLoaded) {
	return window.UniversalDashboard.renderComponent(component, history, dynamicallyLoaded)
}
