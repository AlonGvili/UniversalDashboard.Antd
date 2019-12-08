import React, { Fragment } from "react";
import ReactInterval from "react-interval";
import { Statistic } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const AntdStatistic = props => {
  return <Statistic {...props}/>
}

const AntdStatisticCountdown = props => {
  return <Statistic.Countdown {...props}/>
}

const UDAntdStatistic = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const { title, suffix, prefix, format, parameterSetName, valueStyle, precision, groupSeparator, decimalSeparator, autoRefresh, refreshInterval, style, className } = attributes

  const onFinish = value => {
    attributes.hasCallback ?
      UniversalDashboard.publish("element-event", {
        type: "clientEvent",
        eventId: attributes.id + "onFinish",
        eventName: "onFinish",
        eventData: Array.isArray(value) ? value.toString() : value
      }) : null
  };

 const statisticMainProps = {
   title: title && title.type && UniversalDashboard.renderComponent(title) || title,
   prefix: prefix && prefix.type && UniversalDashboard.renderComponent(prefix) || prefix,
   suffix: suffix && suffix.type && UniversalDashboard.renderComponent(suffix) || suffix,
  value: content[0]
 }

 const statisticStyles = {
   style: {...style},
   valueStyle: {...valueStyle}
 }

  return (
    <Fragment>
      {
        parameterSetName == 'Countdown'
        ?  <AntdStatisticCountdown className={`ud-antd-statistic ${className}`} {...statisticMainProps} onFinish={onFinish} format={format} {...statisticStyles}/>
          : <AntdStatistic className={`ud-antd-statistic ${className}`} {...statisticMainProps} {...statisticStyles} groupSeparator={groupSeparator} decimalSeparator={decimalSeparator} precision={precision}/>
      }
      <ReactInterval
        callback={reload}
        enabled={autoRefresh}
        timeout={refreshInterval}
      />
    </Fragment>
  );
};

export default UDAntdStatistic;
