import React, { useEffect, useState, useContext, useRef } from "react";
import DynamicAntdTheme, { getThemeColor } from "dynamic-antd-theme";

let ThemeContext = React.createContext({primColor: ''})

const UDAntdThemeButton = () => {
  const theme = useContext(ThemeContext)
  const [primaryColor, setPrimaryColor] = useState(
    localStorage.getItem("custom-antd-primary-color") || "#1890d5"
    );
    const onChange = color => setPrimaryColor(color) 
    useEffect(() => {
    theme.primColor = primaryColor
  }, [primaryColor])

  return <DynamicAntdTheme themeChangeCallback={onChange}/>;
};

export const Provider = ({children}) => (
         <ThemeContext.Provider
           value={{
             primColor: localStorage.getItem("custom-antd-primary-color")
           }}
         >
           {children}
         </ThemeContext.Provider>
       );
export { ThemeContext };
export default UDAntdThemeButton;