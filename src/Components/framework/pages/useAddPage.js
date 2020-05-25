import { useMutation, queryCache } from 'react-query'
import { getMeta } from '../meta'
import { endpoint } from '../../api/consts'

const dashboardid = getMeta("ud-dashboard")

export default function useAddPage() {
    return useMutation(
        values => {
            fetch("/api/pages", {
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json',
                    dashboardid,
                    UDConnectionId: UniversalDashboard.connectionId,
                },
                method: "POST",
                credentials: 'include',
                body: JSON.stringify(values)
            })
        }, {
        onMutate: values => {
            const previewsState = queryCache.getQueryData("pages")
            queryCache.setQueryData("pages", old => old.concat(values))

            return previewsState
        },
        onError: (err, variables, previewsState) => queryCache.setQueryData("pages", previewsState),
        onSuccess: (previewsState) => console.log("New page was added", previewsState),
        onSettled: () => queryCache.refetchQueries("pages")
    })
}