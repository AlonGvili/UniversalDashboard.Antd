import React from "react";
import { Menu } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdMenuItemGroup = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Menu.ItemGroup {...attributes} >
      {content.map(item =>
        item.type ? UniversalDashboard.renderComponent(item) : <span>{item}</span>
      )}
    </Menu.ItemGroup>
  );
};

export default AntdMenuItemGroup;
