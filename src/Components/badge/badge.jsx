import React from "react";
// import ReactInterval from "react-interval";
import { Badge } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";
import '../../styles/index.less'

const AntdBadge = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const countProps = {
    count: (
        attributes.count && attributes.count.type
          ? <span>{UniversalDashboard.renderComponent(attributes.count)}</span>
          : attributes.count
    ),
    showZero: attributes.showZero,
    overflowCount: attributes.overflowCount,
    style: attributes.style
  };

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
      children={
        content && content.type
          ? UniversalDashboard.renderComponent(content)
          : content
      }
    />
  );
};

export default AntdBadge;
