import React from "react";
import { Button } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdButton = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const onClick = () => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onClick",
      eventName: "onClick",
      eventData: ""
    });
  };

  return (
    <Button
      htmlType="button"
      type={attributes.buttonType}
      onClick={onClick}
      children={attributes.label}
      {...attributes}
    />
  );
}

export default AntdButton;
