import { useQuery } from 'react-query'
import { getMeta } from '../meta'
const dashboardid = getMeta("ud-dashboard")

export async function getPage(pageUrl) {
    const res = await fetch(pageUrl, {
        headers: {
            dashboardid,
            UDConnectionId: UniversalDashboard.connectionId,
        },
    })
    const res_1 = await res.json()
    return res_1
}

export default function usePage(pageUrl) {
    return useQuery(["page", { pageUrl }], () => getPage(pageUrl), { suspense: true })
}