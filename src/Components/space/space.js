import React from "react";
import { Space } from 'antd'

export default ({ size, direction, content }) => {
  return (
    <Space  direction={direction} size={size}>
      {UniversalDashboard.renderComponent(content)}
    </Space>
  );
};
