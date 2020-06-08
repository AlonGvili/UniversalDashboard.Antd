import React from "react"
import { useAddTimelineItem } from "./useTimeline"

export default function AddAntdTimeLineItem({ id, item }) {
    const { status } = useAddTimelineItem(id, item)
    console.log("Is adding item was success ?", status)
    return null
}