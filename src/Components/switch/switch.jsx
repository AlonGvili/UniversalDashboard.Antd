import React, { useState } from "react";
import { Switch } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default function AntdSwitch({ id, ...props }) {
  const [{ attributes }] = useDashboardEvent(id, props);
  const { checkedChildren, unCheckedChildren, checked } = attributes
  const [isChecked, setIsChecked] = useState(checked);

  const onChange = event => {
    setIsChecked(event)
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: id + "onChange",
      eventName: "onChange",
      eventData: event
    });
  };

  const customIcons = {
    checkedChildren: checkedChildren && UniversalDashboard.renderComponent(checkedChildren),
    unCheckedChildren: unCheckedChildren && UniversalDashboard.renderComponent(unCheckedChildren)
  }

  return (
    <Switch
      {...attributes}
      {...customIcons}
      checked={isChecked}
      onChange={onChange}
    />
  );
};

AntdSwitch.displayName = "AntdSwitch"
