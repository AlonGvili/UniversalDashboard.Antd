import React from 'react'
import AvatarList from 'ant-design-pro/lib/AvatarList'
import 'ant-design-pro/lib/AvatarList/style'
import useDashboardEvent from '../api/Hooks/useDashboardEvent'
import { Skeleton } from 'antd'
import useAvatarList from './useAvatarList'

export default function AntdAvatarList({ id, ...props }) {
    const [{ attributes }] = useDashboardEvent(id, props)
    const { autoRefresh, refreshInterval, ...restOfProps } = attributes
    const { data, status, error } = useAvatarList(id, autoRefresh, refreshInterval)

    if (status === "loading") return <Skeleton.Avatar active size="default" />
    if (status === "error") return <Alert message={error.message} type="error" />

    return (
        <AvatarList {...restOfProps}>
            {data.map(item =>
                <AvatarList.Item
                    key={item.id}
                    tips={UniversalDashboard.renderComponent(item.tips)}
                    src={item.src}
                    onClick={() => UniversalDashboard.publish("element-event", {
                        type: "clientEvent",
                        eventId: item.id + "onClick",
                        eventName: "onClick",
                        eventData: "",
                    })}
                />
            )}
        </AvatarList>
    )
}

AntdAvatarList.displayName = "AntdAvatarList"