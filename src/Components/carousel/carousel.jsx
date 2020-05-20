import React from "react";
import { Carousel, Alert, Typography } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";
import { endpoint } from "../api/consts";
import { useQuery } from "react-query";
import { getMeta } from "../framework/meta";

const dashboardid = getMeta("ud-dashboard")

export default function AntdCarousel({ id, ...props }) {
  const [{ attributes }] = useDashboardEvent(props.id, props);
  const { autoRefresh, refreshInterval } = attributes

  let url = endpoint(id)

  const { data, status, error } = useQuery(
    ["carousel", { id: id }],
    () =>
      fetch(url, {
        headers: { dashboardid, UDConnectionId: UniversalDashboard.connectionId },
      })
        .then(res => res.json())
        .then(res => res),
    {
      refetchInterval: autoRefresh && refreshInterval,
      refetchIntervalInBackground: autoRefresh,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
    }
  )

  if (status === "loading") return null
  if (status === "error") return <Alert.ErrorBoundary message="Error in Carousel component" description={
    <Typography.Text code copyable title="Error Information">
      {error.message}
      {`component id: ${id}`}
      {`component props: ${{ ...props }}`}
    </Typography.Text>
  } />

  const afterChange = current => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: id + "afterChange",
      eventName: "afterChange",
      eventData: JSON.stringify(current),
    })
  }

  return (
    <Carousel {...attributes} afterChange={afterChange}>
      {UniversalDashboard.renderComponent(data)}
    </Carousel>
  );
};

AntdCarousel.displayName = "AntdCarousel"
