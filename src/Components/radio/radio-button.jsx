import React, { useState, Fragment } from "react";
import { Radio } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

const AntdRadioButton = ({ id, ...props }) => {
    const [{ content, attributes }] = useDashboardEvent(id, props);
    const [checked, setChecked] = useState(attributes.defaultChecked);

    const onChange = event => {
        setChecked(event.target.checked);
    };

    return (
        <Radio.Button
            value={attributes.value}
            onChange={onChange}
            checked={checked}
            key={id}
        >
            {UniversalDashboard.renderComponent(content)}
        </Radio.Button>
    );
};

export default AntdRadioButton;
