import React, { useRef, useState } from "react";
import { Input } from "antd";
import 'antd/lib/input/style/index.css'

const UDAntdInput = ({prefix,suffix,addonAfter,addonBefore, ...props}) => {

  const prefix_suffix = {
    prefix: prefix && UniversalDashboard.renderComponent(prefix),
    suffix: suffix && UniversalDashboard.renderComponent(suffix)
  };

  const addons = {
    addonBefore: addonBefore && UniversalDashboard.renderComponent(addonBefore),
    addonAfter: addonAfter && UniversalDashboard.renderComponent(addonAfter)
  };

  return (
    <Input
      {...props}
      {...addons}
      {...prefix_suffix}
      type="text"
    />
  );
};

export default UDAntdInput;
