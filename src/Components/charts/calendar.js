import React from 'react'
import { Calendar } from '@ant-design/charts'
import useDashboardEvent from '../api/Hooks/useDashboardEvent'
import useCalander from './useCalendar'
import { Spin, Alert } from 'antd'

export default function AntdCalendar ({ id, ...props }) {
    const [{attributes}] = useDashboardEvent(id, props)
    const { autoRefresh, refreshInterval, ...restOfProps} = attributes
    const { data, status, error, isFetching } = useCalander(id, autoRefresh, refreshInterval)

    if(status === "loading") return <Spin spinning={isFetching} />
    if(status === "error") return <Alert message={error.message} type="error"/>

    console.log("data", data)

    const config = {
        ...restOfProps,
        data,
    }
    return (
        <Calendar {...config}/>
    )
}

AntdCalendar.displayName = "AntdCalendar"