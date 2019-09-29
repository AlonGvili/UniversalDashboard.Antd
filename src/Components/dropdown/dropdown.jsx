import React, { useState } from "react";
import { Dropdown } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdDropDown = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const [visible, setVisible] = useState(attributes.visible);


  const onVisibleChangeEvent = event => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onVisibleChange",
      eventName: "onVisibleChange",
      eventData: ""
    });
  };

  
  return (
    <Dropdown
      {...attributes}
      align={{ targetOffset: targetOffset }}
      overlay={UniversalDashboard.renderComponent(attributes.overlay)}
      visible={visible}
      onVisibleChange={setVisible(!visible)}
    >
      <span>
        {content.map(item =>
          item.type ? UniversalDashboard.renderComponent(item) : item
        )}
      </span>
    </Dropdown>
  );
};

export default AntdDropDown;
