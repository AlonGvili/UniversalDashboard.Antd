import React from "react";
import Layout from "antd/es/layout";

const AntdHeader = props => {
  const Header = Layout.Header;
  const { content, ...attributes } = props;
  return (
    <Header {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Header>
  );
};
export default AntdHeader;
