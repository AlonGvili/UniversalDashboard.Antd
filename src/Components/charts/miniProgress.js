import React from "react"
import MiniProgress from "ant-design-pro/lib/Charts/MiniProgress"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { Skeleton, Alert } from "antd"
import { getMeta } from "../framework/meta"
import { endpoint } from "../api/consts"
import { useQuery } from "react-query"

const dashboardid = getMeta("ud-dashboard")

const miniContext = React.createContext()

export function useMiniProgress() {
	const [value, setValue] = React.useState(0)

	const getCurrentValue = (id, value) => {
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: id + "onChange",
			eventName: "onChange",
			eventData: JSON.stringify({ currentValue: value }),
		})
	}

	const api = {
		miniContext,
		value,
		setValue,
		getCurrentValue
	}

	const MiniProgressBar = useMiniProgressBarComponent(api)
	return {
		...api,
		MiniProgressBar,
	}
}

function useMiniProgressBarComponent(api) {
	const MiniProgressBar = React.useMemo(
		() => ({ id, ...props }) => {
			const { miniContext, getCurrentValue, value, setValue } = MiniProgressBar.api
			const [{ attributes }] = useDashboardEvent(id, props)
			const { target, strokeWidth, color, autoRefresh, refreshInterval } = attributes

			const url = endpoint(id)
			const { data, status, error, isFetching } = useQuery(
				["MiniProgressBar", { progreesBarId: id }],
				() =>
					fetch(url, {
						headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId },
					})
						.then(res => res.json())
						.then(res => res),
				{
					refetchInterval: autoRefresh && refreshInterval,
					refetchIntervalInBackground: autoRefresh,
					refetchOnMount: true,
					refetchOnWindowFocus: false,
				}
			)

			
			if (status === "loading") return <Skeleton active avatar={false} loading={isFetching} paragraph={{ rows: 1 }} />
			if (status === "error") return <Alert.ErrorBoundary message={error.message} />
			
			return (
				<miniContext.Provider value={MiniProgressBar.api}>
					<MiniProgress
						id={id}
						percent={data}
						target={target}
						color={color}
						strokeWidth={strokeWidth}
						onChange={getCurrentValue(id, data)}
					/>
				</miniContext.Provider>
			)
		}, []
	)
	MiniProgressBar.api = api
	return MiniProgressBar
}

export default props => {
	const { MiniProgressBar } = useMiniProgress()
	return <MiniProgressBar {...props} />
}