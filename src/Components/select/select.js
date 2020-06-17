import React from 'react'
import { Select } from 'antd'
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
