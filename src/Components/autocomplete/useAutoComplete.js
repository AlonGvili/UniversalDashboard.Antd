import { useQuery } from 'react-query'
import { endpoint } from '../api/consts'
import { getMeta } from '../framework/meta'

const dashboardid = getMeta("ud-dashboard")

export default function useAutoComplete(id, autoRefresh, refreshInterval) {
    const url = endpoint(id)
    return useQuery(["autocomplete", { id }], async () => {
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