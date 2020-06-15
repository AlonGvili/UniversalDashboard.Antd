import React from 'react'
import * as AntdIcons from '@ant-design/icons/es/icons'
import { Skeleton, Alert } from 'antd'
import { useTheme } from 'antd-theme'

export default function AntdIcon({ id, name, size, hasCallback, primaryColor, isTwoTone }) {
    const [{ variables }] = useTheme();
    const onClick = React.useCallback(
        (event, id) => {
            UniversalDashboard.publish("element-event", {
                type: "clientEvent",
                eventId: id + "onClick",
                eventName: "onClick",
                eventData: "",
            })
        }, [])

    const fontSize = ({
        xs: 12,
        sm: 14,
        lg: 16,
        "2x": 18,
        "3x": 24,
        "4x": 32,
        "5x": 48,
        "6x": 64,
        "7x": 96,
        "8x": 128,
        "9x": 192,
        "10x": 256,
    })

    let Icon = React.useMemo(() => AntdIcons[name], [name])
    
    return (
        <Alert.ErrorBoundary>
            <React.Suspense fallback={<Skeleton.Avatar shape="circle" size="small" active />} >
                {AntdIcons[name] && <Icon
                    className={`anticon`}
                    onClick={(event) => hasCallback && onClick(event, id)}
                    style={{ fontSize: fontSize[size], color: primaryColor }}
                    twoToneColor={isTwoTone && variables['primary-color']}
                /> || null}
            </React.Suspense>
        </Alert.ErrorBoundary>
    )
}