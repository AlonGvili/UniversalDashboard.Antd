import React from 'react'
import { useTheme } from 'antd-theme';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';
import { Select, Space } from 'antd';

export default function ThemeColorChanger() {
  const [{ name, variables, themes }, setTheme] = useTheme();
  return (
  <>
      <Select
        style={{ width: 100 }}
        value={name}
        onChange={
          (theme) => setTheme({ name: theme, variables })
        }
      >
        {
          themes.map(
            ({ name }) => (
              <Select.Option key={name} value={name}>
                {name}
              </Select.Option>
            )
          )
        }
      </Select>
      <div style={{ margin: '20px 20px 20px', textAlign: 'center' }}>
        <ColorPicker
          animation="slide-up"
          color={variables['primary-color']}
          onChange={(colors) => {
            // Will update all css attributes affected by primary-color
            setTheme({ name, variables: { 'primary-color': colors.color } });
            console.log("theme name", name)
          }}
        />
      </div>
   </>
  );
}