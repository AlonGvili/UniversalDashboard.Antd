import React from "react";
import { Button } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default function AntdButtonGroup ({id, ...props}) {
  const [{ content, attributes }] = useDashboardEvent(id, props);

  return (
    <Button.Group {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Button.Group>
  );
};

AntdButtonGroup.displayName = "AntdButtonGroup"
