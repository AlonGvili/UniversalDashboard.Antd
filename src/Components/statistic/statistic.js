import React from "react";
import { Statistic, Spin, Alert, Typography } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";
import { getMeta } from "../framework/meta";
import { useQuery } from "react-query";
import { endpoint } from "../api/consts";

const dashboardid = getMeta("ud-dashboard")

const AntdStatistic = ({id, ...props }) => {
  const [{attributes}] = useDashboardEvent(id, props);
  const {autoRefresh, refreshInterval} = attributes
  const url = endpoint(id)
  
  const { data, status, error, isFetching } = useQuery(
    ["statisticId", { id: id }],
    () =>
      fetch(url, {
        headers: {
          dashboardid,
          UDConnectionId: UniversalDashboard.connectionId,
        },
      })
        .then(res => res.json())
        .then(res => res),
    {
      refetchInterval: autoRefresh && refreshInterval,
      refetchIntervalInBackground: autoRefresh
    }
  )

  
  if (status === "loading") return <Spin spinning={isFetching} size="small" />
  if (status === "error") return <Alert.ErrorBoundary message="Error in AntdProgress component" description={
    <Typography.Text code copyable title="Error Information">
        {error.message}
        {`component id: ${id}`}
        {`component props: ${{ ...props }}`}
    </Typography.Text>
} />
  
  return (
      <Statistic 
        {...attributes} 
        prefix={attributes.prefix && UniversalDashboard.renderComponent(attributes.prefix)} 
        suffix={attributes.suffix && UniversalDashboard.renderComponent(attributes.suffix)} 
        value={data}
      />
  )
}

export default AntdStatistic;
