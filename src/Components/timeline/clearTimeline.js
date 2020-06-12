import React from 'react'
import { useMutation, queryCache } from 'react-query'

export default function useClearTimeline() {
    const clearTimeline = ({ timelineId }) => {
        queryCache.setQueryData(["timeline", { id: timelineId }], [])
    }
    return useMutation(clearTimeline)
}