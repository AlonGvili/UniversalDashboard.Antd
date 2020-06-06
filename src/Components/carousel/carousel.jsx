import React from "react";
import { Carousel, Alert } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";
import useCarousel from "./useCarousel";

export default function AntdCarousel({ id, ...props }) {

  const afterChange = current => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: id + "afterChange",
      eventName: "afterChange",
      eventData: JSON.stringify(current),
    })
  }
  const [{ attributes }] = useDashboardEvent(props.id, props);
  const { autoRefresh, refreshInterval, hasCallback } = attributes 
  const { data, status, error } = useCarousel(id, autoRefresh, refreshInterval)

  if (status === "error") return <Alert message={error.message} type="error"  />

  return (
    <Carousel {...attributes} afterChange={hasCallback && afterChange}>
      {UniversalDashboard.renderComponent(data)}
    </Carousel>
  );
};

AntdCarousel.displayName = "AntdCarousel"
