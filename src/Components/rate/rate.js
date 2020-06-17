import React from 'react'
import { Rate } from 'antd'
import StarFilled from '@ant-design/icons/StarFilled'
export default function AntdRating(props) {
    const { character, ...restOfProps } = props
    return <Rate
        { ...restOfProps }
        character={ character && UniversalDashboard.renderComponent(character) || <StarFilled /> }
    />
}

AntdRating.displayName = "AntdRating"