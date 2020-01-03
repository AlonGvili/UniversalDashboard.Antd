import React, { Fragment, useState } from "react";
import { Card } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";
import ReactInterval from "react-interval";

const renderTabContent = (tabKey, tabs) => {
  const tabContent = tabs.find(item => item.key === tabKey);
  return (
    <Fragment>
      {Array.isArray(tabContent.content)
        ? tabContent.content.map(item => {
            return item.type ? UniversalDashboard.renderComponent(item) : item;
          })
        : tabContent.content.type
        ? UniversalDashboard.renderComponent(tabContent.content)
        : tabContent.content}
    </Fragment>
  );
};

const renderTabHeader = tab => {
  return (
    <Fragment>
      {Array.isArray(tab)
        ? tab.map(item => {
            return item.type ? UniversalDashboard.renderComponent(item) : item;
          })
        : tab.type
        ? UniversalDashboard.renderComponent(tab)
        : tab}
    </Fragment>
  );
};

const renderTabList = tabs => {
  return tabs
    ? tabs.map(tab => {
        return {
          key: tab.key,
          tab: renderTabHeader(tab.tab),
          disabled: tab.disabled
        };
      })
    : null;
};

const renderCardContent = props => {
  const {
    parameterSet,
    metaAvatar,
    metaDescription,
    metaTitle,
    gridCards
  } = props.attributes;

  let cardContent;

  switch (parameterSet) {
    case "Default":
      cardContent = Array.isArray(props.content)
        ? props.content.map(item =>
            item.type
              ? UniversalDashboard.renderComponent(item)
              : item
          )
        : props.content.type
        ? UniversalDashboard.renderComponent(props.content)
        : props.content;
      break;
    case "Meta":
      cardContent = (
        <Card.Meta
          avatar={
            metaAvatar ? UniversalDashboard.renderComponent(metaAvatar) : null
          }
          title={metaTitle ? metaTitle : null}
          description={metaDescription ? metaDescription : null}
        />
      );
      break;
    case "Grid":
      cardContent = gridCards.map(item => (
        <Card.Grid
          key={item.key}
          className="ud-antd-cardgrid-item"
          style={{ ...item.style }}
          hoverable={item.hoverable}
        >
          {Array.isArray(item.content)
            ? item.content.map(gridItem =>
                gridItem.type
                  ? UniversalDashboard.renderComponent(gridItem)
                  : gridItem
              )
            : item.content.type
            ? UniversalDashboard.renderComponent(item.content)
            : item.content}
        </Card.Grid>
      ));
      break;
  }
  return cardContent;
};

const AntdCard = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const {
    cover,
    extra,
    actions,
    title,
    tabs,
    defaultActiveKey,
    tabBarExtraContent,
    refreshInterval,
    autoRefresh,
    parameterSet,
    loading,
    ...otherProps
  } = attributes;

  const [activeTab, setActiveTab] = useState({
    key: defaultActiveKey
  });

  const onTabChange = key => {
    setActiveTab({ key });
  };

  const cardProps = {
    cover: cover ? UniversalDashboard.renderComponent(cover) : null,
    extra: extra ? UniversalDashboard.renderComponent(extra) : null,
    actions: actions ? UniversalDashboard.renderComponent(actions) : null,
    title: title && title.type ? UniversalDashboard.renderComponent(title) : title,
    loading: loading
  };

  const tabsProps = {
    tabList: renderTabList(tabs),
    onTabChange: onTabChange,
    activeTabKey: activeTab.key,
    tabBarExtraContent: tabBarExtraContent
      ? UniversalDashboard.renderComponent(tabBarExtraContent)
      : null
  };

  return (
    <Fragment>
      <Card {...otherProps} {...cardProps} {...tabsProps}>
        {parameterSet === "Tabs"
          ? renderTabContent(activeTab.key, tabs)
          : renderCardContent(state)}
      </Card>
      <ReactInterval
        callback={reload}
        timeout={refreshInterval}
        enabled={autoRefresh}
      />
    </Fragment>
  );
};

export default AntdCard;
