import React from "react"
import { Popover } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

const AntdPopover = props => {
  const [{ content, attributes }] = useDashboardEvent(props.id, props)
  const title = (
    <span>
      { attributes.title && UniversalDashboard.renderComponent(attributes.title) }
    </span>
  )

  return <Popover
    { ...attributes }
    title={ title }
    content={ UniversalDashboard.renderComponent(content) }
    autoAdjustOverflow={ true }
  >
    { content && UniversalDashboard.renderComponent(children) }
  </Popover>
}

export default AntdPopover
