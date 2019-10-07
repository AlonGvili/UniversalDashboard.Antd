import React, { useState, Fragment } from "react";
import { Radio } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdRadio = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const [checked, setChecked] = useState(attributes.defaultChecked);

  const onChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <Radio
      value={attributes.value}
      onChange={onChange}
      checked={checked}
      key={attributes.id}
    >
      <Fragment>
        {content.map(item =>
          item.type ? UniversalDashboard.renderComponent(item) : item
        )}
      </Fragment>
    </Radio>
  );
};

export default AntdRadio;
