import React,{useState} from "react";
import { Menu } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdMenu = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const [current, setCurrent] = useState(null)

  const onClick = event => {
    setCurrent(event.key);
  };

  return (
    <Menu
      {...attributes}
      id={attributes.id}
      selectedKeys={[current]}
      onClick={onClick}
    >
      {content.map(item => {
        return item.type ? UniversalDashboard.renderComponent(item) : item;
      })}
    </Menu>
  );
};

export default AntdMenu;
