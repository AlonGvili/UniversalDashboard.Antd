import React from "react";
import { Button } from "antd";
const AntdButtonGroup = props => {
  const { content, ...attributes } = props;

  return (
    <Button.Group {...attributes}>
      {UniversalDashboard.renderComponent(content)}
    </Button.Group>
  );
};

export default AntdButtonGroup;
