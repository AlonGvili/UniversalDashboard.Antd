import React, { useEffect,useState, Suspense } from "react";
import AntIcon from '@ant-design/icons-react'
import {QuestionCircleOutline} from '@ant-design/icons'
import useDashboardEvent from "../Hooks/useDashboardEvent";

const UDAntdIcon = ({id,...props}) => {
  const [state, reload] = useDashboardEvent(id, props);
  const { content, attributes } = state;
  const [myIcon, setIcon] = useState(null)

  useEffect(() => {
    const getIcon = () => {
      import(`@ant-design/icons/lib/${attributes.iconGroupName}/${attributes.icon}.js`).then(({ default: icon }) => {
        setIcon(icon)
      })
    }
    myIcon == null ? getIcon() : null
  })

  const onClick = event => {
    attributes.hasCallback ?
      UniversalDashboard.publish("element-event", {
        type: "clientEvent",
        eventId: attributes.id + "onClick",
        eventName: "onClick",
        eventData: JSON.stringify(attributes)
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

  return <Suspense fallback={null}>
      <AntIcon {...attributes} className="anticon" type={myIcon || QuestionCircleOutline} style={{ fontSize: fontSize[attributes.size], fill: attributes.isTwoTone ? null : attributes.color, ...attributes.style }} onClick={onClick} />
  </Suspense>
}

export default UDAntdIcon;
