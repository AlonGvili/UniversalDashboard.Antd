import React from "react";
import { Layout } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdLayout = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Layout {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Layout>
  );
};
export default AntdLayout;
