import React, { useRef } from "react";
import { Input } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdInputPassword = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const onPressEnter = event => {
      UniversalDashboard.publish("element-event", {
          type: "clientEvent",
          eventId: attributes.id + "onPressEnter",
          eventName: "onPressEnter",
          eventData: JSON.stringify(event.target.value)
        });
  };

  return <Input.Password {...attributes} onPressEnter={onPressEnter} />;
};

export default AntdInputPassword;
