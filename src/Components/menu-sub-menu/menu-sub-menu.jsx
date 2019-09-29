import React from "react";
import { Menu } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdSubMenu = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  const onTitleClick = event => {
    console.log("event: ", event);
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onTitleClick",
      eventName: "onTileClick",
      eventData: event.key
    });
  };

  return (
    <Menu.SubMenu
      {...attributes}
      title={
        <span>
          {attributes.title.map(subTitle =>
            subTitle.type === "icon"
              ? UniversalDashboard.renderComponent(subTitle)
              : subTitle
          )}
        </span>
      }
      onTitleClick={onTitleClick}
    >
      {content.map(item =>
        item.type ? UniversalDashboard.renderComponent(item) : item
      )}
    </Menu.SubMenu>
  );
};

export default AntdSubMenu;
