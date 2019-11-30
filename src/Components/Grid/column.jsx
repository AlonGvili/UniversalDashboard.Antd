import React, { Suspense } from "react";
import { Col, Skeleton } from "antd";
import ReactInterval from 'react-interval'
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdColumn = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  // const { content, style } = props;

  return (
    <Suspense fallback={null}>
    <Skeleton loading={content ? false : true } paragraph={{rows: 4}} avatar={false}>
    <Col {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Col>
    </Skeleton>
    <ReactInterval callback={reload} enabled={attributes.autoRefresh} timeout={attributes.refreshInterval}/>
    </Suspense>
  );
};

export default AntdColumn;
