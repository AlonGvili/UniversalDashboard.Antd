import { useQuery, queryCache } from 'react-query'

export default function useTimeline(id) {
    async function getItems() {
        const data = await queryCache.getQueryData(["timeline", { id }])
        if (data !== undefined) return [...data]
        else return []
    }

    return useQuery(
        id && ["timeline", { id }], () => getItems(), { refetchOnMount: true, refetchOnWindowFocus: true }
    )
}