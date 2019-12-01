import React from "react";
import { Popover } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdPopover = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const title = (
    <span>
      {attributes.title ? attributes.title.map(
          popTitle => popTitle.type === "icon" ? UniversalDashboard.renderComponent(popTitle) : popTitle
      ): null}
    </span>
  )

  const popContent = (
      content.map(
        item => item.type ?  UniversalDashboard.renderComponent(item) : <div key={item}>{item}</div>
      )
  )

  return <Popover
      {...attributes}
      title={title}
      content={popContent}
      autoAdjustOverflow={true}
    >
      {attributes.children.map(item =>
        item.type && UniversalDashboard.renderComponent(item) || item
      )}
    </Popover>
};

export default AntdPopover;
