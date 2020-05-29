import React from 'react'
import { useTimeRange, useUpdateTimeRange } from '../api/timeRangeStoreStore'
import { useUpdateTheme, useSelectedTheme } from '../api/themeStore'
import Select from 'antd/es/select'
import 'antd/es/select/style'

export default () => {
  const selected = useTimeRange()
  const selectTimeRange = useUpdateTimeRange()
  const theme = useSelectedTheme()
  const selectTheme = useUpdateTheme()
  const Option = Select.Option

  const onTimeRangeChange = value => selectTimeRange(value)
   

  const value = (
    <div>
      <span style={{ marginRight: 4, color: theme.chart[colorMode].defaultColor }}>[</span>
      <span style={{ color: theme.chart[colorMode].title.fill }}>
        {' '}
        {selected}{' '}
      </span>
      <span style={{ marginLeft: 4, color: theme.chart[colorMode].defaultColor }}>]</span>
      <span style={{ marginLeft: 4, color: theme.chart[colorMode].title.fill }}>
        Time Range
      </span>
    </div>
  )

  return (
    <Select
      placeholder="Select time range"
      bordered={false}
      onChange={onTimeRangeChange}
      value={value}
      showArrow={false}
      style={{ marginRight: 24 }}
    >
      <Option value="5m">5m</Option>
      <Option value="15m">15m</Option>
      <Option value="30m">30m</Option>
      <Option value="1h">1h</Option>
      <Option value="3h">3h</Option>
      <Option value="5h">5h</Option>
    </Select>
  )
}
