import store from "../../../api/store"

export const useIsOpen = () => {
	const [{ isOpen }] = store.useStore()

	return isOpen
}

export const useCollapsed = () => {
	const [_, setState] = store.useStore()

	return () =>
		setState(old => ({
			...old,
			isOpen: !old.isOpen,
		}))
}


