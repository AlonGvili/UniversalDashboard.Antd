import React, { useRef } from "react";
import { Input } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdInput = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const inputRef = useRef();

  const onChange = event => {
    console.log(event.target.value);
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onChange",
      eventName: "onChange",
      eventData: JSON.stringify(event.target.value)
    });
  };

  const onPressEnter = event => {
    console.log(
      "parent&children",
      inputRef.current.input.offsetParent.childNodes[0].offsetParent
        .offsetParent.children
    );
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onPressEnter",
      eventName: "onPressEnter",
      eventData: "" // JSON.stringify(
        //inputRef.current.input.offsetParent.childNodes[0].offsetParent
          //.offsetParent.children
      //)
    });
  };

  const prefix_suffix = {
    prefix: UniversalDashboard.renderComponent(attributes.prefix),
    suffix: UniversalDashboard.renderComponent(attributes.suffix)
  };

  const addons = {
    addonBefore:
      attributes.addonBefore !== null
        ? attributes.addonBefore.type
          ? UniversalDashboard.renderComponent(attributes.addonBefore)
          : attributes.addonBefore
        : null,
    addonAfter:
      attributes.addonAfter !== null
        ? attributes.addonAfter.type
          ? UniversalDashboard.renderComponent(attributes.addonAfter)
          : attributes.addonAfter
        : null
  };

  return (
    <Input
      {...attributes}
      {...addons}
      {...prefix_suffix}
      onChange={event => onChange(event)}
      onPressEnter={event => onPressEnter(event)}
      ref={inputRef}
    />
  );
};

export default AntdInput;
