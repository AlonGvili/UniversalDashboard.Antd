import React from 'react'
import { useMutation, queryCache } from 'react-query'
import { message } from 'antd'

export default function useAddToTimeline() {
    const addItemToTimeline = ({ timelineId, items }) => {
        queryCache.setQueryData(["timeline", { id: timelineId }], prevData => {
            if (prevData !== undefined) {
                // multi items check
                if (Array.isArray(items)) {
                    let filteredItems = []
                    items.forEach((item, index) => {
                        if (prevData.some(data => data.id === item.id)) {
                            message.error({
                                content: `Item with id ${item.id} already exsist`,
                                duration: 4
                            })
                        } else{
                            filteredItems.push(item)
                        }
                    })
                    return [...prevData, ...filteredItems]
                } else {
                    // single item check
                    if (prevData.some(data => data.id === items.id)) {
                        message.error({
                            content: `Item with id ${items.id} already exsist`,
                            duration: 4
                        })
                        return [...prevData]
                    }
                }
            } else {
                return [...items]
            }
        })
    }
    return useMutation(addItemToTimeline)
}

