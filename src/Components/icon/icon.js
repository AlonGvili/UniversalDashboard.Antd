import React, { useEffect, useState } from "react";
import QuestionCircleOutline from "@ant-design/icons";
import AntdIcon from "@ant-design/icons-react";
import { getSecondaryColor } from "@ant-design/icons-react/lib/utils";
import { Icon } from "antd";

const useAntdIcon = (groupName, iconName) => {
  const [returnIcon, setReturnIcon] = useState(QuestionCircleOutline);
  useEffect(() => {
    if (null == iconName) {
      return;
    }
    import(`@ant-design/icons/lib/${groupName}/${iconName}.js`).then(
      ({ default: icon }) => {
        setReturnIcon(icon);
      }
    );
  }, [groupName, iconName]);

  return returnIcon;
};

const UDAntdIcon = ({ id, iconGroupName, icon: name, isTwoTone, ...props }) => {
  let ReturnIcon = useAntdIcon(iconGroupName, name);

  let g = () => Icon.getTwoToneColor();

  Icon.setTwoToneColor(localStorage.getItem("custom-antd-primary-color"));

  const onClick = event => {
    props.hasCallback
      ? UniversalDashboard.publish("element-event", {
          type: "clientEvent",
          eventId: id + "onClick",
          eventName: "onClick",
          eventData: JSON.stringify(props)
        })
      : null;
  };

  const fontSize = {
    xs: 12,
    sm: 14,
    lg: 16,
    "2x": 18,
    "3x": 24,
    "4x": 32,
    "5x": 48,
    "6x": 64
  };

  return (
    <Provider>
      <AntdIcon
        className="anticon"
        type={ReturnIcon}
        onClick={onClick}
        style={{
          fill: "var(--primary-color)",
          fontSize: fontSize[props.size]
        }}
        primaryColor={isTwoTone ? "var(--primary-color)" : null}
        secondaryColor={isTwoTone ? getSecondaryColor(g()) : null}
      />
    </Provider>
  );
};

export default UDAntdIcon;
