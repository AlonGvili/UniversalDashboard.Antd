import React from 'react'
import { useMutation, queryCache } from 'react-query'
import { message } from 'antd'

export default function useRemoveFromTimeline() {
    const removeItem = ({ timelineId, itemId }) => {
        queryCache.setQueryData(itemId && ["timeline", { id: timelineId }], prevData => {
            if (prevData !== undefined) {
                if (prevData.some(data => data.id === itemId)) {
                    const filterData = prevData.filter(item => item.id !== itemId)
                    return filterData
                } else {
                    message.error({
                        content: `You already remove item ${itemId}`,
                        duration: 5
                    })
                    return [...prevData]
                }
            } else {
                message.info({
                    content: `Timeline is empty, please add items.`,
                    duration: 5
                })
            }
        })
    }
    return useMutation(removeItem)
}