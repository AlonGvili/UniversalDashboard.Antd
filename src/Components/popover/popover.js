import React from "react"
import { Popover } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

const { renderComponent } = UniversalDashboard
export default function AntdPopover({ id, ...props }) {
  const [{ content, attributes }] = useDashboardEvent(id, props)
  const { trigger, title, ...restOfProps } = attributes

  return (
    <Popover { ...restOfProps } title={ title } content={ renderComponent(content) } autoAdjustOverflow={ true } trigger="hover">
      { renderComponent(trigger) }
    </Popover>
  )
}

