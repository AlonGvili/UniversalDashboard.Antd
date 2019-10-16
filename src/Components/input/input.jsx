import React, { useRef } from "react";
import { Input } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdInput = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const inputRef = useRef();

  const onChange = event => {
    attributes.hasOnChangeCallback ?
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onChange",
      eventName: "onChange",
      eventData: JSON.stringify(event.target.value)
    }) : null
  };

  const onPressEnter = event => {
    event.preventDefault()
    UniversalDashboard.post(`/api/internal/component/element/${attributes.id }`, event.target.value , result => {
      result.error ? console.log('result.error', result.error) : null
    })
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
      onChange={onChange}
      onPressEnter={onPressEnter}
      ref={inputRef}
    />
  );
};

export default AntdInput;
