import React from 'react'
import { useMutation, queryCache } from 'react-query'
import { message } from 'antd'

export default function useAddToTimeline() {
    const addItemToTimeline = ({ timelineId, item }) => {
        queryCache.setQueryData(["timeline", { id: timelineId }], prevData => {
            if (prevData !== undefined) {
                if (prevData.some(data => data.id === item.id)) {
                    message.error({
                        content: `Item with id ${item.id} already exsist`,
                        duration: 4
                    })
                    return [...prevData]
                } else {
                    return [...prevData, item]
                }
            } else {
                return [item]
            }
        })
    }
    return useMutation(addItemToTimeline)
}