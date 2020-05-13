import React from "react"
import RingProgress from "@ant-design/charts/es/ringProgress"

const Context = React.createContext()

export function useRingProgress() {
	const api = {
		Context,
	}
	const MiniRingProgress = useMiniRingProgress(api)
	return {
		...api,
		MiniRingProgress,
	}
}

function useMiniRingProgress(api) {
	const MiniRingProgress = React.useMemo(
		() => props => {
			const { Context } = MiniRingProgress.api
			return (
				<Context.Provider value={MiniRingProgress.api}>
					<RingProgress {...props} />
				</Context.Provider>
			)
		},
		[]
	)
	MiniRingProgress.api = api
	return MiniRingProgress
}

export default props => {
	const { MiniRingProgress } = useRingProgress()
	return <MiniRingProgress {...props} />
}
