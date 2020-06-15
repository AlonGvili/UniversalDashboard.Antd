/* eslint-disable import/no-unresolved */
import React from 'react'
import { InputNumber } from 'antd'
import useDashboardEvent from "../api/Hooks/useDashboardEvent"


export default function AntdInputNumber({ id, prefix, suffix, ...props }) {
    const onFormat = value => `${prefix}${value}${suffix}`
    return (
        <InputNumber
            { ...props }
            formatter={ value => onFormat(value) }
        />
    )
}

AntdInputNumber.displayName = "AntdInputNumber"