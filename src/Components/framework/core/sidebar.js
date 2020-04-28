import store from "../../api/store"

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

// export const useDecrement = () => {
// 	const [_, setState] = store.useStore()

// 	return () =>
// 		setState(old => ({
// 			...old,
// 			count: old.count - 1,
// 		}))
// }

// export const useAsyncIncrement = () => {
// 	const increment = useIncrement()

// 	return async () => {
// 		await new Promise(resolve => setTimeout(resolve, 3000))
// 		increment()
// 	}
// }
