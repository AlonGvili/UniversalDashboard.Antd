import React, { useRef } from "react";
import { Input } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdInputTextArea = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const {history, type, ...otherProps} = attributes
  const { TextArea } = Input;

  const onPressEnter = event => {
    event.keyCode === 13 && event.shiftKey ? null :   
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onPressEnter",
      eventName: "onPressEnter",
      eventData: JSON.stringify(event.target.value)
    });
  };

  return <TextArea {...otherProps} onPressEnter={onPressEnter} spellCheck={true}/>;
};

export default AntdInputTextArea;
