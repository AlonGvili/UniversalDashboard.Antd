import React from "react"
import { useQuery } from "react-query"
import { Progress, Alert, Typography } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import { getMeta } from "../framework/meta"
import { endpoint } from "../api/consts"

const dashboardid = getMeta("ud-dashboard")

export default function AntdProgress({ id, ...props }) {
    const [{ attributes }] = useDashboardEvent(id, props)
    const { autoRefresh, refreshInterval, variant: type, type: udType, ...rest } = attributes

    let url = endpoint(id)
    const { data, status, error } = useQuery(
        ["progress", { progressUrl: url }],
        () =>
            fetch(url, {
                headers: {
                    dashboardid,
                    UDConnectionId: UniversalDashboard.connectionId,
                },
            })
                .then(res => res.json())
                .then(res => res),
        {
            refetchInterval: autoRefresh && refreshInterval,
            refetchIntervalInBackground: autoRefresh,
            retry: 3,
            retryDelay: 10000,
            refetchOnWindowFocus: false,
            refetchOnMount: true
        }
    )

    if (status === "error") return <Alert.ErrorBoundary message="Error in AntdProgress component" description={
        <Typography.Text code copyable title="Error Information">
            {error.message}
            {`component id: ${id}`}
            {`component props: ${{ ...props }}`}
        </Typography.Text>
    } />

    return <Progress id={id} {...rest} type={type} percent={data} />
}