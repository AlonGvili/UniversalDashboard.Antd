import React from "react";
import { Layout } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";

const AntdContent = props => {
  const Content = Layout.Content;
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Content {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Content>
  );
};
export default AntdContent;
