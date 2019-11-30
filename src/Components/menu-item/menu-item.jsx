import React from "react";
import { Menu } from "antd";
import useDashboardEvent from '../Hooks/useDashboardEvent'
import '../../styles/index.less'

const AntdMenuItem = props => {

    const [state, reload] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;

  const onClick = event => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onClick",
      eventName: "onClick",
      eventData: event.item.toString()
    });
  };

  return (
    <Menu.Item {...attributes} inlineIndent={48} onClick={onClick} >
      {content.map(item =>
        item.type ? UniversalDashboard.renderComponent(item) : item
      )}
    </Menu.Item>
  );
};

export default AntdMenuItem;
