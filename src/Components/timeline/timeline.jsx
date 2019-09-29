import React, { useState, useEffect, Fragment } from "react";
import ReactInterval from "react-interval";
import { Timeline } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdTimeLine = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;


  return (
    <Fragment>
      <Timeline {...attributes}>
        {UniversalDashboard.renderComponent(content)}
      </Timeline>
      <ReactInterval
        callback={reload}
        timeout={attributes.refreshInterval}
        enabled={attributes.autoRefresh}
      />
    </Fragment>
  );
};

export default AntdTimeLine;
