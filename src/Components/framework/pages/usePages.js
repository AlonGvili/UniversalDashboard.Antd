import { useQuery, queryCache } from 'react-query'
import { getMeta } from '../meta'
import { getPage } from './usePage'
import { Spin, Alert } from 'antd'
import { useParams } from 'react-router-dom'
import {stringify} from 'query-string'
import { endpoint } from '../../api/consts'

const dashboardid = getMeta("ud-dashboard")

export default function usePages() {
    let url = endpoint("pages")    
    const { data, error, status, isFetching } = useQuery("pages", async () => {
        const res = await fetch(url, {
            headers: {
                dashboardid,
                UDConnectionId: UniversalDashboard.connectionId,
            },
        })
        const res_1 = await res.json()
        console.log("res_1",res_1)
        return res_1
    })

    if (status === "loading") return <Spin spinning={isFetching} size="large" tip="Getting pages" delay={500} />
    if (status === "error") return <Alert message={error.message} type="error" /> 
    
    data.forEach(element => {
        const path = `${element.id}${stringify(useParams())}`
        queryCache.prefetchQuery(["page", { path }], () => getPage(element.id))
    });

    return data
}

