import React, { useState, Fragment, useEffect } from "react";
import { Drawer } from "antd";
import ReactInterval from "react-interval";
import useDashboardEvent from '../Hooks/useDashboardEvent'

const AntdDrawer = props => {
  const [state, reload, setState] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;


  const onClose = event => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "onClose",
      eventName: "onClose",
      eventData: ""
    });
    setState({...state,attributes: {...attributes, visible: false}})
  };


  return (
    <Fragment>
      <Drawer
        {...attributes}
        onClose={onClose}
        children={UniversalDashboard.renderComponent(content)}
      />
      <ReactInterval
        callback={reload}
        timeout={props.refreshInterval}
        enabled={props.autoRefresh}
      />
    </Fragment>
  );
};

export default AntdDrawer;
