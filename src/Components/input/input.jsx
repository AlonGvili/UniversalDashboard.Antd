import React, { useRef } from "react";
import { Input } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdInput = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const { addonAfter, addonBefore, suffix, prefix, type, ...restOfProps } = attributes
  const inputRef = useRef();

  const onChange = event => {
    restOfProps.hasOnChangeCallback ?
      UniversalDashboard.publish("element-event", {
        type: "clientEvent",
        eventId: restOfProps.id + "onChange",
        eventName: "onChange",
        eventData: JSON.stringify(event.target.value)
      }) : null
  };

  const onPressEnter = event => {
    restOfProps.hasOnPressEnterCallback ?
      (event.preventDefault(),
        UniversalDashboard.post(`/api/internal/component/element/${restOfProps.id}`, event.target.value, result => {
          result.error ? console.log('result.error', result.error) : null
        })) : null
  };

  const prefix_suffix = {
    prefix: UniversalDashboard.renderComponent(prefix),
    suffix: UniversalDashboard.renderComponent(suffix)
  };

  const addons = {
    addonBefore:
      addonBefore !== null
        ? addonBefore.type
          ? UniversalDashboard.renderComponent(addonBefore)
          : addonBefore
        : null,
    addonAfter:
      addonAfter !== null
        ? addonAfter.type
          ? UniversalDashboard.renderComponent(addonAfter)
          : addonAfter
        : null
  };

  return (
    <Input
      {...restOfProps}
      {...addons}
      {...prefix_suffix}
      type="text"
      // ref={inputRef}
      onChange={onChange}
      onPressEnter={onPressEnter}
    />
  );
};

export default AntdInput;
