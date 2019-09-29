import React from "react";
import { Timeline } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdTimeLineItem = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Timeline.Item {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Timeline.Item>
  );
};

export default AntdTimeLineItem;
