import React, { useRef } from "react";
import { Timeline } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

const AntdTimeLineItem = props => {
  const [state] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const contentRef = useRef()

  contentRef.current = content
  return (
    <Timeline.Item  {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Timeline.Item>
  );
};

export default AntdTimeLineItem;
