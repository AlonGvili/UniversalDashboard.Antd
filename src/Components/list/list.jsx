import React from "react";
import { List, Alert } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";
import useList from "./useList";

export default function AntdList({ id, ...props }) {
  const [{ attributes }] = useDashboardEvent(id, props);
  const { autoRefresh, refreshInterval, header, ...restOfProps } = attributes;
  const { data, status, error } = useList(id, autoRefresh, refreshInterval)

  if (status === "error") return <Alert message="Error in AntdProgress component" description={error.message} type="error" />

  return (
    <List
      {...restOfProps}
      header={UniversalDashboard.renderComponent(header)}
      dataSource={data}
      renderItem={item => {
        const { title, description, avatar, extra, actions, ...itemProps } = item
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
  );
};

