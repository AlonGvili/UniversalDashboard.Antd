import { useQuery } from 'react-query'
import { endpoint } from '../../api/consts'
import { getMeta } from '../meta'
import { useParams } from 'react-router-dom'
import {stringify} from 'query-string'

const dashboardid = getMeta("ud-dashboard")

export async function getPage(id) {
    let url = endpoint(id)
    const res = await fetch(url, {
        headers: {
            dashboardid,
            UDConnectionId: UniversalDashboard.connectionId,
        },
    })
    const res_1 = await res.json()
    console.log("getPage", res_1)
    return res_1
}

export default function usePage(pageId) {
    const path = `${pageId}${stringify(useParams())}`
    return useQuery(["page", { path }], () => getPage(pageId))
}