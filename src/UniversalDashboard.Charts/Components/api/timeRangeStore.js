import store from "./store"

export const useTimeRange = () => {
	const [{ selected }] = store.useStore()
	return selected
}

export const useUpdateTimeRange = () => {
	const [_, setState] = store.useStore()

	return (value) =>
		setState(old => ({
			...old,
			selected: value,
		}))
}
