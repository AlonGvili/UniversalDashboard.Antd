import React from "react"
import MiniProgress from "ant-design-pro/lib/Charts/MiniProgress"

const miniContext = React.createContext()

export function useMiniProgress() {

	const api = {
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
			const { miniContext } = MiniProgressBar.api

			console.log("inside mini progress bar")
			return (
				<miniContext.Provider value={MiniProgressBar.api}>
					<MiniProgress
						id={id}
						percent={percent}
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

export default props => {
	const {MiniProgressBar } = useMiniProgress()
	return <MiniProgressBar {...props} /> 
}