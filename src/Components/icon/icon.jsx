import React, { useState, useEffect, Fragment } from "react";
import AntIcon from '@ant-design/icons-react'

const UDAntdIcon = props => {
  const { icon, ...others } = props;
  const [myIcon, setMyIcon] = useState();

  import("@ant-design\\icons\\lib\\index.es.js").then(module => {
    setMyIcon(module[icon]);
  });

  const fontSize = {
    "xs": "0.75em",
    "sm": "0.875em",
    "lg": "1.33em",
    "2x": "2em",
    "3x": "3em",
    "4x": "4em",
    "5x": "5em",
    "6x": "6em",
    "7x": "7em",
    "8x": "8em",
    "9x": "9em",
    "10x": "10em"
  };
  
  return <AntIcon type={myIcon} style={{fontSize: fontSize[others.size], fill: others.color, ...others.style}}/>
};

export default UDAntdIcon;
