import React from "react";
import { Form } from "antd/es";
import 'antd/lib/form/style/index.css'

const AntdForm = props => {
  const { getFieldDecorator } = props.form;

  const onSubmit = event => {
    event.preventDefault();
    props.form.validateFields((err, values) => {
      !err
        ? console.log("Form values:", values)
        : console.log("Form error:", err);
    });
  };


  const rulesProps = (rule, value, callback) =>
    console.log(rule, value, callback());


  const formItems = props.content.map(item => (
      <Form.Item htmlFor={item.name} style={{ ...item.style }} {...item}>
        {getFieldDecorator(item.name, {
          rules: item.rules !== null &&  [{ ...item.rules }, rulesProps] || []
        })(UniversalDashboard.renderComponent(item.content))}
      </Form.Item>
    )
  )


  return (
    <Form onSubmit={onSubmit} style={{ width: 400 }}>
      {formItems}
    </Form>
  );
};

const UDAntdForm = Form.create({
  name: "basic_form"
})(AntdForm)

export default UDAntdForm;
