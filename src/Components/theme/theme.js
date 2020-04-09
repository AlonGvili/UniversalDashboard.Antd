import React from "react";
import DynamicAntdTheme from "dynamic-antd-theme";
import ReactIcon from '@ant-design/icons-react';

export const ThemeColors = {
  pColor: '',
  sColor: ''
}

const setTwoToneColor = (primaryColor) => {
  return ReactIcon.setTwoToneColors({
    primaryColor,
  });
}


const UDAntdThemeButton = () => {

  const changeColor = colorCode => {
    setTwoToneColor(colorCode)
    let colors = ReactIcon.getTwoToneColors();
    ThemeColors.pColor = colors.primaryColor;
    ThemeColors.sColor = colors.secondaryColor;
    console.log("getTwoToneColors", ReactIcon.getTwoToneColors());
    console.log("ThemeColors", ThemeColors);
    window.less.modifyVars({
      "@primary-color": colorCode
    });
  };

  return <DynamicAntdTheme themeChangeCallback={color => changeColor(color)} />;
};

export default UDAntdThemeButton;
