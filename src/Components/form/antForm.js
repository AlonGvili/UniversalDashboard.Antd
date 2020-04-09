import React from "react";
import { Form, Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import 'antd/lib/form/style/index.css'

export default ({ id, content, layout }) => {
  const onFinish = values => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: id + "onSubmit",
      eventName: "onSubmit",
      eventData: JSON.stringify(values)
    });
    console.log('values', values)
  };

  return (
    <div style={{ maxWidth: 300 }}>
      <Form id={id} layout={layout} onFinish={onFinish}>
        {/* {UniversalDashboard.renderComponent(content)} */}
        <Form.Item name="test">
          <Input placeholder="universal dashboard" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name="demo">
          <Input placeholder="universal dashboard" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Send
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
