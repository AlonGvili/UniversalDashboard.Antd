import React from "react";
import { Row } from "antd";

const AntdRow = props => {
  const { content, gutter, align, justify, flex, style } = props;

  return (
    <Row
      gutter={gutter}
      align={align}
      justify={justify}
      flex={flex}
      style={{ ...style }}
    >
      {UniversalDashboard.renderComponent(content)}
    </Row>
  );
};

export default AntdRow;
