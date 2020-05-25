import React, { useState } from "react";
import { Dropdown } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

const AntdDropDown = ({id, ...props}) => {
  const [{ attributes }] = useDashboardEvent(id, props);
  const { autoRefresh, refreshInterval, targetOffset, overlay, visible: isVisible,...restOfProps } = attributes;
  const [visible, setVisible] = useState(isVisible);


  const onVisibleChangeEvent = event => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: id + "onVisibleChange",
      eventName: "onVisibleChange",
      eventData: ""
    });
  };

  
  return (
    <Dropdown
      {...restOfProps}
      align={{ targetOffset: targetOffset }}
      overlay={UniversalDashboard.renderComponent(overlay)}
      visible={visible}
      onVisibleChange={setVisible(!visible)}
    >
      <span>
        {UniversalDashboard.renderComponent(data)}
      </span>
    </Dropdown>
  );
};

export default AntdDropDown;
