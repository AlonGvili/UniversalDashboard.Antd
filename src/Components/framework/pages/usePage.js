import { useQuery } from 'react-query'
import { endpoint } from '../../api/consts'
import { getMeta } from '../meta'

const dashboardid = getMeta("ud-dashboard")

export default function usePage(pageId) {
    const url = endpoint(pageId)
    return useQuery(["page", {url: url}], async () => {
        const res = await fetch(url, {
            headers: {
                dashboardid,
                UDConnectionId: UniversalDashboard.connectionId,
            },
        })
        const res_1 = await res.json()
        return res_1
    })
}