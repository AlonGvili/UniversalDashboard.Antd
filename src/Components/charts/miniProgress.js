import React from "react"
import MiniProgress from "ant-design-pro/lib/Charts/MiniProgress"

const miniContext = React.createContext()

export function useMiniProgress() {
	const progressValue = React.useRef()
	const api = {
		progressValue,
		miniContext,
	}
	const MiniProgressBar = useMiniProgressBarComponent(api)
	return {
		...api,
		MiniProgressBar,
	}
}

function useMiniProgressBarComponent(api) {
	const MiniProgressBar = React.useMemo(
		() => ({ id, percent, target, strokeWidth, color }) => {
			const { miniContext, progressValue } = MiniProgressBar.api
			progressValue.current = percent
			return (
				<miniContext.Provider value={MiniProgressBar.api}>
					<MiniProgress
						id={id}
						percent={progressValue.current}
						target={target}
						color={color}
						strokeWidth={strokeWidth}
					/>
				</miniContext.Provider>
			)
		},[]
	)
	MiniProgressBar.api = api
	return MiniProgressBar
}
