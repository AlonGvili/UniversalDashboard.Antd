import React from "react"

export default function (elementRef, callback) {
	const callbackRef = React.useRef()
	callbackRef.current = callback

	React.useEffect(() => {
		const handleClickOutSide = event => {
			if (elementRef?.current?.contains(event.target) && callback) {
				callbackRef.current(event)
			}
		}
		document.addEventListener("click", handleClickOutSide, true)
		return () => document.removeEventListener("click", handleClickOutSide, true)
	}, [callbackRef, elementRef])
}
