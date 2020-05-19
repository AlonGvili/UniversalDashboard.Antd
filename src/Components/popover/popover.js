import React from "react";
import { Popover } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

const AntdPopover = props => {
  const [{ content, attributes }] = useDashboardEvent(props.id, props);
  const title = (
    <span>
      {attributes.title && UniversalDashboard.renderComponent(attributes.title)}
    </span>
  )
  
  return <Popover
      {...attributes}
      title={title}
      content={UniversalDashboard.renderComponent(content)}
      autoAdjustOverflow={true}
    >
      {attributes.children.map(item =>
        item.type && UniversalDashboard.renderComponent(item) || item
      )}
    </Popover>
};

export default AntdPopover;
