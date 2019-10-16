import React, { useState } from "react";
import AntIcon from '@ant-design/icons-react'
import useDashboardEvent from "../Hooks/useDashboardEvent";

const UDAntdIcon = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const [myIcon, setMyIcon] = useState();

  import("@ant-design\\icons\\lib\\index.es.js").then(module => {
    setMyIcon(module[attributes.icon]);
  });

  const onClick = event => {
    attributes.hasCallback ?
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onClick",
      eventName: "onClick",
      eventData: ''
    }) : null
  };

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

  return <AntIcon {...attributes} type={myIcon} style={{ fontSize: fontSize[attributes.size], fill: attributes.isTwoTone ? null : attributes.color, ...attributes.style}} onClick={onClick}/>
};

export default UDAntdIcon;
