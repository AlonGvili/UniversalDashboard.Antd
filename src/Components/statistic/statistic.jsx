import React, { Fragment } from "react";
import ReactInterval from "react-interval";
import { Statistic } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdStatistic = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const setPrefix = () =>
    prefix.map(item =>
      item.type ? UniversalDashboard.renderComponent(item) : item
    );

  const setSuffix = () =>
    suffix.map(item =>
      item.type ? UniversalDashboard.renderComponent(item) : item
    );

  const setTitle = () =>
    title.map(item =>
      item.type ? UniversalDashboard.renderComponent(item) : item
    );


  return (
    <Fragment>
      <Statistic
        id={attributes.id}
        title={setTitle}
        value={attributes.value}
        prefix={setPrefix}
        suffix={setSuffix}
        {...attributes}
      />
      <ReactInterval
        callback={reload}
        enabled={attributes.autoRefresh}
        timeout={attributes.refreshInterval}
      />
    </Fragment>
  );
};

export default AntdStatistic;
