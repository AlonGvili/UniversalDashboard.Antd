import React from 'react'
import { Statistic } from 'antd'
import useDashboardEvent from '../api/Hooks/useDashboardEvent'

const { Countdown } = Statistic

function useCountDown() {
    const onFinish = (id, value) => {
        UniversalDashboard.publish("element-event", {
            type: "clientEvent",
            eventId: id + "onFinish",
            eventName: "onFinish",
            eventData: JSON.stringify({ id, value })
        })
    }
    const api = {
        onFinish
    }
    const UDAntdCountDown = useCountDownComponent(api)
    return {
        ...api,
        UDAntdCountDown
    }
}

function useCountDownComponent(api) {
    const UDAntdCountDown = React.useMemo(
        () => ({ id, ...props}) => {
            const { onFinish } = UDAntdCountDown.api
            const [{attributes}] = useDashboardEvent(id, props)
            const { prefix, suffix, format, title, value, valueStyle } = attributes
            
            return <Countdown
                prefix={prefix && UniversalDashboard.renderComponent(prefix)}
                suffix={suffix && UniversalDashboard.renderComponent(suffix)}
                format={format}
                value={value}
                title={title}
                valueStyle={valueStyle}
                onFinish={() => onFinish(id, value)}
            />
        },
        []
    )

    UDAntdCountDown.api = api
    UDAntdCountDown.displayName = "AntdCountDown"
    return UDAntdCountDown
}

export default function AntdCountdown(props){
    const { UDAntdCountDown } = useCountDown()
    return <UDAntdCountDown {...props} />
}