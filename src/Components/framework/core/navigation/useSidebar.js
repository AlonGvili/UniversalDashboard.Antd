import { useQuery } from 'react-query'
import { getMeta } from '../../meta'
import { endpoint } from '../../../api/consts'

const dashboardid = getMeta("ud-dashboard")

export default function useSidebar(id) {
    const url = endpoint(id)
    return useQuery(["sidebar", {url: url}], async () => {
        const res = await fetch(url, {
            headers: {
                dashboardid,
                UDConnectionId: UniversalDashboard.connectionId,
            },
        })
        const sidebar = await res.json()
        return sidebar
    })
}