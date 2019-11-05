import React from "react";
import ReactInterval from "react-interval";
import { Badge } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";


const AntdBadge = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const countProps = {
    count: attributes.count,
    showZero: attributes.showZero,
    overflowCount: attributes.overflowCount,
    style: attributes.style
  }

  const dotProps = {
    color: attributes.color,
    text: attributes.text,
    status: attributes.status,
    dot: attributes.dot
  }

  const propsToUse = attributes.count ? { ...countProps } : { ...dotProps }
  return (
    <Badge
      {...propsToUse}
      children={UniversalDashboard.renderComponent(content)} />
  );
};

export default AntdBadge;
