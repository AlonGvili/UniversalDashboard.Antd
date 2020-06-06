import React from "react";
import { Space } from 'antd'
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default ({ id, ...props }) => {
  const [{ content, attributes }] = useDashboardEvent(id, props)
  return (
    <Space {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Space>
  );
};
