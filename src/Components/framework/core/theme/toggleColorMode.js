import React from 'react'
import { useTheme } from 'antd-theme';
import { Select } from 'antd';

export default function ToggleColorMode() {
  const [{ name, variables, themes }, setTheme] = useTheme();
  return (
      <Select
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
  );
}
