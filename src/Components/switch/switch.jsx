import React, { useState } from "react";
import { Switch } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdSwitch = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const [checked, setChecked] = useState(attributes.checked);

  const onChange = event => {
    setChecked(event)
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onChange",
      eventName: "onChange",
      eventData: event
    });
  };

  const customIcons = {
    checkedChildren: UniversalDashboard.renderComponent(
      attributes.checkedChildren
    ),
    unCheckedChildren: UniversalDashboard.renderComponent(
      attributes.unCheckedChildren
    )
  };

  return (
    <Switch
      {...attributes}
      {...customIcons}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default AntdSwitch;
