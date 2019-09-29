import React, { Fragment } from "react";
import { List } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";
import ReactInterval from "react-interval";

const AntdList = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;

  return (
    <Fragment>
      <List
        {...attributes}
        header={UniversalDashboard.renderComponent(attributes.header)}
        dataSource={content}
        renderItem={item => {
          const {
            title,
            description,
            avatar,
            extra,
            actions,
            ...itemProps
          } = item;
          return (
            <List.Item
              {...itemProps}
              actions={UniversalDashboard.renderComponent(actions)}
              extra={UniversalDashboard.renderComponent(extra)}
            >
              <List.Item.Meta
                avatar={UniversalDashboard.renderComponent(avatar)}
                title={title}
                description={description}
              />
              {UniversalDashboard.renderComponent(item.content)}
            </List.Item>
          );
        }}
      />
      <ReactInterval
        callback={reload}
        enabled={attributes.autoRefresh}
        timeout={attributes.refreshInterval}
      />
    </Fragment>
  );
};

export default AntdList;
