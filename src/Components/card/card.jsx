import React, { Fragment } from "react";
import { Card } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";
import ReactInterval from "react-interval";

const AntdCard = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const cardProps = {
    cover: attributes.cover
      ? UniversalDashboard.renderComponent(attributes.cover)
      : null,
    extra: attributes.extra
      ? UniversalDashboard.renderComponent(attributes.extra)
      : null,
    actions: attributes.actions
      ? UniversalDashboard.renderComponent(attributes.actions)
      : null
  };

  return (
    <Fragment>
      <Card {...attributes} {...cardProps}>
        {UniversalDashboard.renderComponent(content)}
      </Card>
      <ReactInterval
        callback={reload}
        timeout={attributes.refreshInterval}
        enabled={attributes.autoRefresh}
      />
    </Fragment>
  );
};

export default AntdCard;
