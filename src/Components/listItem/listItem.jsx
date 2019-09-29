import React, { useEffect, useState, useContext, Fragment } from "react";
import { List } from "antd";
import QueueAnim from "rc-queue-anim";

const AntdListItem = props => {
  const Item = List.Item;
  const Meta = Item.Meta;

  const Extra = () => {
    return UniversalDashboard.renderComponent(props.extra);
    // return itemExtra
  };

  const Actions = () => {
    return UniversalDashboard.renderComponent(props.actions);
    // return itemActions
  };

  const Content = () => {
    return (
      <Fragment>
        <Meta title={props.title} description={props.description} />
        {UniversalDashboard.renderComponent(props.content)}
      </Fragment>
    );
  };

  const itemProps = {
    ...props,
    key: props.id,
    extra: <Extra />,
    actions: <Actions />,
    children: <Content />
  };

  return (
    <QueueAnim duration={800} type={["left", "right"]} leaveReverse>
      <List.Item {...itemProps} onClick={() => props.onClick(props.id)} />
    </QueueAnim>
  );
};

export default AntdListItem;
