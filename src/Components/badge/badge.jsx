import React from "react";
import ReactInterval from "react-interval";
import { Badge } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";


const AntdBadge = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Badge {...attributes} count={attributes.count}>
      {UniversalDashboard.renderComponent(content)}
      <ReactInterval
        callback={reload}
        timeout={attributes.refreshInterval}
        enabled={attributes.autoRefresh}
      />
    </Badge>
  );
};

export default AntdBadge;
