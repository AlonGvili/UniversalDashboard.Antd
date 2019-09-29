import React from "react";
import ReactInterval from "react-interval";
import { Descriptions } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";

const AntdDescriptionList = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Fragment>
      <Descriptions {...attributes}>
        {content.map(item => UniversalDashboard.renderComponent(item))}
      </Descriptions>
      <ReactInterval
        callback={reload}
        enabled={attributes.autoRefresh}
        timeout={attributes.refreshInterval}
      />
    </Fragment>
  );
};

export default AntdDescriptionList;
