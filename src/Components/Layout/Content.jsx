import React from "react";
import { Layout } from "antd";

const AntdContent = props => {
  const Content = Layout.Content;
  const { content, ...attributes } = props;

  return (
    <Content {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Content>
  );
};
export default AntdContent;
