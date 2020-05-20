import React from 'react'
import AvatarList from 'ant-design-pro/lib/AvatarList'
import 'ant-design-pro/lib/AvatarList/style'
import useDashboardEvent from '../api/Hooks/useDashboardEvent'
import { endpoint } from '../api/consts'
import { useQuery } from 'react-query'
import { getMeta } from '../framework/meta'
import { Statistic } from 'antd'


const dashboardid = getMeta("ud-dashboard")

export default function AntdAvatarList({ id, ...props }) {
    const [{ attributes }] = useDashboardEvent(id, props)
    const { autoRefresh, refreshInterval, ...restOfProps } = attributes

    let url = endpoint(id)

    const { data, isFetching, status, error } = useQuery(
        ["avatarList", { avatarListId: id }],
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
            initialData: []
        }
    )


    if (status === "error") return <Alert.ErrorBoundary message="Error in AntdAvatarList component" description={
        <Typography.Text code copyable title="Error Information">
            {error.message}
            {`component id: ${id}`}
            {`component props: ${{ ...props }}`}
        </Typography.Text>
    } />

    // const onClick = item => {
    //     UniversalDashboard.publish("element-event", {
    //         type: "clientEvent",
    //         eventId: item.id + "onClick",
    //         eventName: "onClick",
    //         eventData: JSON.stringify(item),
    //     })
    // }


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