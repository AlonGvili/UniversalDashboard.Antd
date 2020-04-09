import { Button, Result, Space } from "antd";

import React from "react";
import { useHistory, Route } from "react-router-dom";

export default () => {
  const history = useHistory();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Space>
          <Button type="primary" onClick={() => history.push(window.baseUrl)}>
            Go Home
          </Button>
          <Button type="primary" onClick={() => history.goBack()}>
            Go Back
          </Button>
        </Space>
      }
    />
  );
};
