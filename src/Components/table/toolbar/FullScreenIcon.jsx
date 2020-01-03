import React, { useEffect, useState } from 'react';
import { Icon, Tooltip } from 'antd';

const FullScreenIcon = (onIcon, offIcon, onClick, onChange, elementId) => {
    const [on, setOn] = useState(true);
    useEffect(() => {
        setOn(!on)
    }, [on]);
    return on ? (
        <Tooltip
            title="exit fullscreen"
            getPopupContainer={() =>
                ((document.getElementById('ud-antd-table') || document.body))
            }
        >
            <Icon type="fullscreen-exit" />
        </Tooltip>
    ) : (
            <Tooltip
                title="open in fullscreen"
                getPopupContainer={() =>
                    ((document.getElementById('ud-antd-table') || document.body))
                }
            >
                <Icon type="fullscreen" />
            </Tooltip>
        );
};

export default FullScreenIcon;