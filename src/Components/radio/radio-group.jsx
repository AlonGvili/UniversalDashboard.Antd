import React, { useState } from "react";
import { Radio } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdRadioGroup = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const [value, setValue] = useState(attributes.value);

  const onChange = event => {
    setValue(event.target.value);
    console.log(event.target.value)
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onChange",
      eventName: "onChange",
      eventData: event.target.value
    });
  };

  return (
    <Radio.Group
      {...attributes}
      value={value}
      onChange={onChange}
      key={attributes.id}
    >
      {UniversalDashboard.renderComponent(content)}
    </Radio.Group>
  );
};

export default AntdRadioGroup;
