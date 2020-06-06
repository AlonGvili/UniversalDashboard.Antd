import React from 'react'
import { useTheme } from 'antd-theme';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';

export default function TogglePrimaryColor() {
  const [{ name, variables }, setTheme] = useTheme();
  return (
        <ColorPicker
          animation="slide-up"
          color={variables['primary-color']}
          onChange={(colors) => {
            // Will update all css attributes affected by primary-color
            setTheme({ name, variables: { 'primary-color': colors.color } });
          }}
        />
  );
}