import React from "react";
import { Row, Skeleton } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";
import useRow from './useRow'

export default function AntdRow({ id, ...props }) {
  const [{ attributes }] = useDashboardEvent(id, props);
  const { autoRefresh, refreshInterval, ...restOfProps } = attributes
  const { data, error, status, isFetching } = useRow(id, autoRefresh, refreshInterval)

  if (status === "loading") return <Skeleton loading={isFetching} avatar={false} paragraph={{ rows: 4 }} title={false} active />
  if (status === "error") return <Alert message="Error in AntdProgress component" description={error.message} type="error" />

  return (
    <Row {...restOfProps}>
      {UniversalDashboard.renderComponent(data)}
    </Row>
  )
}

AntdRow.displayName = "AntdRow"
