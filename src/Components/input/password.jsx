import React from "react";
import { Input } from "antd/es"
import "antd/es/input/style/index.css"
import useDashboardEvent from "../Hooks/useDashboardEvent";

export default props => {
  const [{attributes}] = useDashboardEvent(props.id, props);
  return <Input.Password {...attributes} />;
};

