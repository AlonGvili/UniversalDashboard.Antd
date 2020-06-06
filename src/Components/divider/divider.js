import React from "react";
import { Divider } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default function AntdDivider({ id, ...props }) {
  const [{ attributes }] = useDashboardEvent(id, props)
  const {variant: type, type: udType, text, ...restOfProps} = attributes
  return (
    <Divider {...restOfProps} type={type} children={text}/>
  );
};

AntdDivider.displayName = "AntdDivider"
