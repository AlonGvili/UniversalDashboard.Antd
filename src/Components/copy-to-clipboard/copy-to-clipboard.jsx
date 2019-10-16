import React from "react";
import { Button } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";
import { useClipboard } from 'use-clipboard-copy'

const AntdCopyToClipboard = props => {
    const [state, reload] = useDashboardEvent(props.id, props);
    const clipboard = useClipboard()
    const { content, attributes } = state;
    const { textToCopy, ...otherProps } = attributes
    return (
        <Button
            {...otherProps}
            htmlType="button"
            type={attributes.buttonType}
            onClick={() => clipboard.copy(textToCopy)}
            children={attributes.label}
        />
    );
}

export default AntdCopyToClipboard;
