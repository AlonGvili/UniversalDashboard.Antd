import React from "react";
import ReactInterval from "react-interval";
import { Descriptions } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";

const AntdDescriptionListItem = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Descriptions.Item
      label={attributes.label}
      key={attributes.id}
      id={attributes.id}
      span={attributes.span}
    >
      {UniversalDashboard.renderComponent(content)}
      <ReactInterval
        callback={reload}
        timeout={attributes.refreshInterval}
        enabled={attributes.autoRefresh}
      />
    </Descriptions.Item>
  );
};

export default AntdDescriptionListItem;
