import React from 'react'
import { Select } from 'antd'

const { Option } = Select

export default function AntdSelectOption({ value }) {
    return <Option key={ value } label={ value } value={ value }>{ value }</Option>
}   