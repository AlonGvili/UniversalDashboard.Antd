import React from "react";
import { Input } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default function AntdInputPassword({ prefix, suffix, addonAfter, addonBefore, ...props }) {
  const prefix_suffix = {
    prefix: prefix && UniversalDashboard.renderComponent(prefix),
    suffix: suffix && UniversalDashboard.renderComponent(suffix)
  }

  const addons = {
    addonBefore: addonBefore && UniversalDashboard.renderComponent(addonBefore),
    addonAfter: addonAfter && UniversalDashboard.renderComponent(addonAfter)
  }

  return <Input.Password { ...props } { ...addons } { ...prefix_suffix }/>;
}

