import React,{useState} from "react";
import { Menu } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdMenu = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const [current, setCurrent] = useState(attributes.defaultSelectedKeys || null)

  const onSelect = event => {
    setCurrent(event.key);
  };

  return (
    <Menu
      {...attributes}
      id={attributes.id}
      defaultOpenKeys={[attributes.defaultOpenKeys]}
      selectedKeys={[current]}
      onSelect={onSelect}
    >
      {content.map(item => {
        return item.type ? UniversalDashboard.renderComponent(item) : item;
      })}
    </Menu>
  );
};

export default AntdMenu;
