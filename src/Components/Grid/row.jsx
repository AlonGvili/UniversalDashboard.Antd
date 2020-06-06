import React from "react";
import { Row, Skeleton } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default function AntdRow({ id, ...props }) {
  const [{ content, attributes }] = useDashboardEvent(id, props);
  return (
    <Row {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Row>
  )
}

AntdRow.displayName = "AntdRow"
