import React from "react";
import { Input } from "antd"
// import "antd/es/input/style/index.css"
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default props => {
  const [{attributes}] = useDashboardEvent(props.id, props);
  return <Input.Password {...attributes} />;
};

