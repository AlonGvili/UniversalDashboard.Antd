import React from "react"
import { Progress, Alert } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import useProgress from "./useProgress"

export default function AntdProgress({ id, ...props }) {
    const [{ attributes }] = useDashboardEvent(id, props)
    const { autoRefresh, refreshInterval, variant: type, type: udType, ...rest } = attributes
    const { data, status, error } = useProgress(id, autoRefresh, refreshInterval)
    if (status === "error") return <Alert message={error.message} type="error" />
    return <Progress id={id} {...rest} type={type} percent={data} />
}