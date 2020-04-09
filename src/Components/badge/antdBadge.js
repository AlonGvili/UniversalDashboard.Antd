import React from "react";
import { Badge } from "antd";

export default ({ content, color }) => {
  return (
    <div>
      <Badge color={color}>
        {UniversalDashboard.renderComponent(content)}
      </Badge>
    </div>
  );
};
