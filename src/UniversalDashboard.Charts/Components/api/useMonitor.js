import { useQuery } from 'react-query'
import { getMeta } from '../../../Components/framework/meta'
import { endpoint } from '../../../Components/api/consts'


const dashboardid = getMeta("ud-dashboard")

export default function useMonitor(id, autoRefresh, refreshInterval) {
    const url = endpoint(id)
    return useQuery( ["monitor", { id: id }], async () => {
        const res = await fetch(url, {
            headers: {
                dashboardid,
                UDConnectionId: UniversalDashboard.connectionId,
            },
        })
        const res_1 = await res.json()
        return res_1
    },
    {
        refetchInterval: autoRefresh && refreshInterval,
        refetchIntervalInBackground: autoRefresh
    })
}