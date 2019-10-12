import React from "react";
import { Layout } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";

const AntdContent = props => {
  const Content = Layout.Content;
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  console.log('content', content)
  return (
    <Content {...attributes} children={UniversalDashboard.renderComponent(content)} />
  );
};
export default AntdContent;
