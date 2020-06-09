import React from 'react'
import { useTheme } from 'antd-theme'
import { presetPrimaryColors, presetDarkPalettes, presetPalettes } from '@ant-design/colors'
import Block from 'react-color/lib/Block'

export default function TogglePrimaryColor() {
  const [{ name, variables }, setTheme] = useTheme()

  const getPrimaryColors = () => {
    let colors
    if (name === "dark") {
      colors = Object.keys(presetDarkPalettes).map(color => presetDarkPalettes[color].primary)
    } else {
      colors = Object.keys(presetPalettes).map(color => presetPalettes[color].primary)
    }
    console.log("colors", colors)
    return colors
  }

  return (
    <Block
      colors={ getPrimaryColors() }
      onChange={ (color) => {
        // Will update all css attributes affected by primary-color
        setTheme({ name, variables: { 'primary-color': color.hex, 'progress-default-color': color.hex } })
      } }
      triangle="hide"
    // width="100%"
    />
  )
}