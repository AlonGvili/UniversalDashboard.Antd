import React, { Suspense } from "react";
import { Row, Skeleton, Spin } from "antd";
import ReactInterval from 'react-interval'
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdRow = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Suspense fallback={<Skeleton loading avatar={false} paragraph={{rows: 6}} title active />}>
        <Row {...attributes}>
          {UniversalDashboard.renderComponent(content)}
        </Row>
      <ReactInterval callback={reload} enabled={attributes.autoRefresh} timeout={attributes.refreshInterval} />
    </Suspense>
  );
};

export default AntdRow;
