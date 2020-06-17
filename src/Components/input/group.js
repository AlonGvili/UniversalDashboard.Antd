import React from "react"
import { Input } from "antd"

export default function AntdInputGroup({ content, ...props }) {
    return (
        <Input.Group { ...props }>
            { UniversalDashboard.renderComponent(content) }
        </Input.Group>
    )
}
