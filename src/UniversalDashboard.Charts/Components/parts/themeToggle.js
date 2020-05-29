import React from 'react'
import UDTooltip from './tooltip'
import { FormatPainterOutlined, FormatPainterFilled } from '@ant-design/icons'
import Button from 'antd/es/button'
import 'antd/es/button/style'
import { useUpdateTheme } from '../api/themeStore'

export default () => {
  const selectTheme = useUpdateTheme()
  const theme = useSelectedTheme()

  return (
    <UDTooltip
      title="Change monitor theme"
      style={{ marginRight: 24 }}
      arrowPointAtCenter
    >
      <Button
        icon={
          theme.title === 'light' ? (
            <FormatPainterOutlined
              style={{ color: theme.defaultColor }}
            />
          ) : (
            <FormatPainterFilled style={{ color: theme.defaultColor }} />
          )
        }
        onClick={() => selectTheme()}
        type="link"
        size="small"
      />
    </UDTooltip>
  )
}
