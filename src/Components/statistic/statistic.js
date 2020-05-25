import React from "react";
import { Statistic, Spin, Alert, Typography } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";
import { getMeta } from "../framework/meta";
import { useQuery } from "react-query";
import { endpoint } from "../api/consts";
import useStatistic from "./useStatistic";

const dashboardid = getMeta("ud-dashboard")

const AntdStatistic = ({id, ...props }) => {
  const [{attributes}] = useDashboardEvent(id, props);
  const {autoRefresh, refreshInterval} = attributes
  const { data, status, error, isFetching } = useStatistic(id, autoRefresh, refreshInterval)

  if (status === "loading") return <Spin spinning={isFetching} size="small" />
  if (status === "error") return <Alert message="Error in AntdStatistic component" description={error.message} type="error"/>
  
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
