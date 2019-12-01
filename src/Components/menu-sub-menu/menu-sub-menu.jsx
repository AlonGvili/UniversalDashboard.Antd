import React from "react";
import { Menu } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdSubMenu = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Menu.SubMenu
      {...attributes}
      title={
        <span>
          {attributes.title.map(subTitle =>
            subTitle.type
              ? UniversalDashboard.renderComponent(subTitle)
              : <span>{subTitle}</span>
          )}
        </span>
      }
    >
      {content.map(item =>
        item.type ? UniversalDashboard.renderComponent(item) : <span>{item}</span>
      )}
    </Menu.SubMenu>
  );
};

export default AntdSubMenu;
