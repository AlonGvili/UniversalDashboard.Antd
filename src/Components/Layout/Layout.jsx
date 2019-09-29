import React from "react";
import { Layout } from "antd";

const AntdLayout = props => {
  const { content, ...attributes } = props;
  return (
    <Layout {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Layout>
  );
};
export default AntdLayout;
