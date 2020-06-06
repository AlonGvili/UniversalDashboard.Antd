import store from "../../../api/store"

export const useIsDarkMode = () => {
	const [{ darkMode = false }] = store.useStore()
	return darkMode
}

export const useDarkMode = () => {
	const [_, setState] = store.useStore()

	return () =>
		setState(old => ({
			...old,
			darkMode: !old.darkMode,
		}))
}


