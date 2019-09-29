import React from "react";
import { Col } from "antd";

const AntdColumn = props => {
  const { content, style } = props;

  return (
    <Col {...props} style={{ ...style }}>
      {UniversalDashboard.renderComponent(content)}
    </Col>
  );
};

export default AntdColumn;
