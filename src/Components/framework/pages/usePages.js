import { useQuery } from 'react-query'
import { getMeta } from '../meta'

const dashboardid = getMeta("ud-dashboard")

export default function usePages() {
    return useQuery("pages", async () => {
        const res = await fetch("/api/pages", {
            headers: {
                dashboardid,
                UDConnectionId: UniversalDashboard.connectionId,
            },
        })
        const res_1 = await res.json()
        return res_1
    })
}

