import React from 'react'
import { useQuery } from 'react-query'
// import { endpoint } from '../api/consts'
import { getMeta } from '../framework/meta'
import { Alert, Select } from 'antd'

const dashboardid = getMeta("ud-dashboard")
const { Option } = Select
export default function useSelect(url) {
    const { data, status, error, isFetching } = useQuery(["select", { url }], async () => {
        const res = await fetch(url, {
            headers: {
                dashboardid,
                UDConnectionId: UniversalDashboard.connectionId,
            },
        })
        const res_1 = await res.json()
        return res_1
    },{refetchOnMount: true})

    if (status === "error") return <Alert message={error.message} type="error"/>
    const options = data && data.map(i => <Option key={ i } value={ i }>{ i }</Option>)
    return { options, isFetching }
}