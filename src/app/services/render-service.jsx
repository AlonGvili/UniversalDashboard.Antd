export function internalRenderComponent(component, history) {
	if (!component) return null

	return component
}

export default function renderComponent(component, history, dynamicallyLoaded) {
	return window.UniversalDashboard.renderComponent(component, history, dynamicallyLoaded)
}
