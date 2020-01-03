import React from "react";
import { Button } from "antd";
import 'antd/es/button/style/index.less'

const AntdButton = props => {

  const onClick = () => {
    props.hasCallback ? UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: props.id + "onClick",
      eventName: "onClick",
      eventData: ""
    }) : null
  };

  return (
    <Button
      {...props}
      htmlType={props.htmlType}
      type={props.buttonType}
      onClick={onClick}
      children={props.label}
    />
  );
}

export default AntdButton;
