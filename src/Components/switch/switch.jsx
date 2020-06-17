import React, { useState } from "react";
import { Switch } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default function AntdSwitch(props) {
  return (
    <Switch {...props}/>
  );
};

AntdSwitch.displayName = "AntdSwitch"
