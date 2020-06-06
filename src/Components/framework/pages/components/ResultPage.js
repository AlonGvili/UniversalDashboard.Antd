import { Button, Result, Space } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

export default ({ icon, status, title, subTitle, extra }) => {
  const history = useHistory();
  return (
    <Result
      icon={icon && UniversalDashboard.renderComponent(icon)}
      status={status}
      title={title}
      subTitle={subTitle}
      extra={
        (extra && UniversalDashboard.renderComponent(extra)) || (
          <Space>
            <Button type="primary" onClick={() => history.push(window.baseUrl)}>
              Go Home
            </Button>
            <Button type="primary" onClick={() => history.goBack()}>
              Go Back
            </Button>
          </Space>
        )
      }
    />
  );
};
