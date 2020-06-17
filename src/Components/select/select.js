import React from 'react'
import { Select, Alert, Input } from 'antd'
import { getMeta } from '../framework/meta'
import useDashboardEvent from '../api/Hooks/useDashboardEvent'
import useSelect from './useSelect'

const { Option } = Select

export default function AntdSelect(props) {
    const { content, ...restOfProps } = props
    return (
        <Select { ...restOfProps }>
           {content.map( item => <Option value={ item.value }>{ item.value }</Option>)}
        </Select>
    )
}
