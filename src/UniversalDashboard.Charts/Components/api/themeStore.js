import store from "./store"

export const useSelectedTheme = () => {
	const [{ theme }] = store.useStore()
	return theme
}

export const useUpdateTheme = () => {
	const [_, setState] = store.useStore()

	return (value) =>
		setState(old => ({
			...old,
			theme: value,
		}))
}
