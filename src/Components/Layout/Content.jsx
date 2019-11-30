import React, { Suspense, useEffect, useState } from "react";
import { Layout, Skeleton, Spin } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";
import '../../styles/index.less'

const AntdContent = props => {
  const [state, reload] = useDashboardEvent(props.id, props)
  const { content, attributes } = state

  return (
    <Suspense fallback={<Spin />}>
      <Layout.Content {...attributes} children={UniversalDashboard.renderComponent(content)} />
    </Suspense>
  );
};

export default AntdContent;
