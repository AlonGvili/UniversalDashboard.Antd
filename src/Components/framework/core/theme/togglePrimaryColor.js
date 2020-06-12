import React from 'react'
import { useTheme } from 'antd-theme'
import { presetDarkPalettes, presetPalettes } from '@ant-design/colors'
import Circle from 'react-color/lib/Circle'
import { Popover } from 'antd'

export default function TogglePrimaryColor() {
  const [{ name, variables }, setTheme] = useTheme()

  const getPrimaryColors = () => {
    let colors
    if (name === "dark") {
      colors = Object.keys(presetDarkPalettes).map(color => presetDarkPalettes[color].primary)
    } else {
      colors = Object.keys(presetPalettes).map(color => presetPalettes[color].primary)
    }
    return colors
  }

  return (
    <Popover content={
      <Circle
        colors={ getPrimaryColors() }
        onChange={ (color) => {
          setTheme({ name, variables: { 'primary-color': color.hex, 'progress-default-color': color.hex } })
        } }
      /> }
      trigger="click"
      arrowContent={ null }
    >
      <div style={ {
        background: `${variables['primary-color']} none repeat scroll 0% 0%`,
        width: 22,
        height: 22,
        borderRadius: 4,
        cursor: "pointer",
      } } />
    </Popover >
  )
}