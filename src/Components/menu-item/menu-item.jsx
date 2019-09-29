import React from "react";
import { Menu } from "antd";
import useDashboardEvent from '../Hooks/useDashboardEvent'

const AntdMenuItem = props => {

    const [state, reload] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;

  const onClick = event => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onClick",
      eventName: "onClick",
      eventData: event.key
    });
  };

  return (
    <Menu.Item onClick={onClick} {...attributes}>
      {content.map(item =>
        item.type ? UniversalDashboard.renderComponent(item) : item
      )}
    </Menu.Item>
  );
};

export default AntdMenuItem;
