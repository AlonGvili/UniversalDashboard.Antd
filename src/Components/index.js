import { lazy } from "react";

const AntdRow = lazy(() =>
  import(/* webpackChunkName: "AntdRow" */ "./Grid/row.jsx")
);
const AntdColumn = lazy(() =>
  import(/* webpackChunkName: "AntdColumn" */ "./Grid/column.jsx")
);
const AntdButton = lazy(() =>
  import(/* webpackChunkName: "AntdButton" */ "./button/button.jsx")
);
const AntdButtonGroup = lazy(() =>
  import(
    /* webpackChunkName: "AntdButtonGroup" */ "./button-group/button-group.jsx"
  )
);
const AntdSwitch = lazy(() =>
  import(/* webpackChunkName: "AntdSwitch" */ "./switch/switch.jsx")
);
const AntdTimeLine = lazy(() =>
  import(/* webpackChunkName: "AntdTimeLine" */ "./timeline/timeline.jsx")
);
const AntdTimeLineItem = lazy(() =>
  import(
    /* webpackChunkName: "AntdTimeLineItem" */ "./timeline/timelineItem.jsx"
  )
);
const AntdDrawer = lazy(() =>
  import(/* webpackChunkName: "AntdDrawer" */ "./drawer/drawer.jsx")
);
const AntdCard = lazy(() =>
  import(/* webpackChunkName: "AntdCard" */ "./card/card.jsx")
);
const AntdDescriptionList = lazy(() =>
  import(
    /* webpackChunkName: "AntdDescriptionList" */ "./description/description.jsx"
  )
);
const AntdDescriptionListItem = lazy(() =>
  import(
    /* webpackChunkName: "AntdDescriptionListItem" */ "./description-item/description-item.jsx"
  )
);
const AntdBadge = lazy(() =>
  import(/* webpackChunkName: "AntdBadge" */ "./badge/badge.jsx")
);
const AntdDropDown = lazy(() =>
  import(/* webpackChunkName: "AntdDropDown" */ "./dropdown/dropdown.jsx")
);
const AntdMenu = lazy(() =>
  import(/* webpackChunkName: "AntdMenu" */ "./menu/menu.jsx")
);
const AntdMenuItem = lazy(() =>
  import(/* webpackChunkName: "AntdMenuItem" */ "./menu-item/menu-item.jsx")
);
const AntdSubMenu = lazy(() =>
  import(
    /* webpackChunkName: "AntdSubMenu" */ "./menu-sub-menu/menu-sub-menu.jsx"
  )
);
const AntdMenuItemGroup = lazy(() =>
  import(
    /* webpackChunkName: "AntdMenuItemGroup" */ "./menu-item-group/menu-item-group.jsx"
  )
);
const AntdMenuDivider = lazy(() =>
  import(
    /* webpackChunkName: "AntdMenuDivider" */ "./menu-divider/menu-divider.jsx"
  )
);
const AntdPopover = lazy(() =>
  import(/* webpackChunkName: "AntdPopover" */ "./popover/popover.jsx")
);
const AntdLayout = lazy(() =>
  import(/* webpackChunkName: "AntdLayout" */ "./Layout/Layout.jsx")
);
const AntdHeader = lazy(() =>
  import(/* webpackChunkName: "AntdHeader" */ "./Layout/Header.jsx")
);
const AntdContent = lazy(() =>
  import(/* webpackChunkName: "AntdContent" */ "./Layout/Content.jsx")
);
const AntdAutoComplete = lazy(() =>
  import(
    /* webpackChunkName: "AntdAutoComplete" */ "./autocomplete/autocomplete.jsx"
  )
);
const AntdList = lazy(() =>
  import(/* webpackChunkName: "AntdList" */ "./list/list.jsx")
);
const AntdListItem = lazy(() =>
  import(/* webpackChunkName: "AntdListItem" */ "./listItem/listItem.jsx")
);
const AntdStatistic = lazy(() =>
  import(/* webpackChunkName: "AntdStatistic" */ "./statistic/statistic.jsx")
);
const AntdCarousel = lazy(() =>
  import(/* webpackChunkName: "AntdCarousel" */ "./carousel/carousel.jsx")
);
const AntdInput = lazy(() =>
  import(/* webpackChunkName: "AntdInput" */ "./input/input.jsx")
);
const AntdInputTextArea = lazy(() =>
  import(/* webpackChunkName: "AntdInputTextArea" */ "./input/textArea")
);
const AntdInputPassword = lazy(() =>
  import(/* webpackChunkName: "AntdInputPassword" */ "./input/password")
);
const UDAntdIcon = lazy(() =>
  import(/* webpackChunkName: "AntdIcon" */ "./icon/icon")
);
const AntdRadio = lazy(() =>
  import(/* webpackChunkName: "AntdRadio" */ "./radio/radio")
);
const AntdRadioGroup = lazy(() =>
  import(/* webpackChunkName: "AntdRadioGroup" */ "./radio/radio-group")
);

UniversalDashboard.register("ud-antd-row", AntdRow);
UniversalDashboard.register("ud-antd-col", AntdColumn);
UniversalDashboard.register("ud-antd-button", AntdButton);
UniversalDashboard.register("ud-antd-button-group", AntdButtonGroup);
UniversalDashboard.register("ud-antd-switch", AntdSwitch);
UniversalDashboard.register("ud-antd-timeline", AntdTimeLine);
UniversalDashboard.register("ud-antd-timeline-item", AntdTimeLineItem);
UniversalDashboard.register("ud-antd-drawer", AntdDrawer);
UniversalDashboard.register("ud-antd-card", AntdCard);
UniversalDashboard.register("ud-antd-descriptionlist", AntdDescriptionList);
UniversalDashboard.register("ud-antd-descriptionlist-item",AntdDescriptionListItem);
UniversalDashboard.register("ud-antd-badge", AntdBadge);
UniversalDashboard.register("ud-antd-dropdown", AntdDropDown);
UniversalDashboard.register("ud-antd-menu", AntdMenu);
UniversalDashboard.register("ud-antd-menu-item", AntdMenuItem);
UniversalDashboard.register("ud-antd-sub-menu", AntdSubMenu);
UniversalDashboard.register("ud-antd-menu-item-group", AntdMenuItemGroup);
UniversalDashboard.register("ud-antd-menu-divider", AntdMenuDivider);
UniversalDashboard.register("ud-antd-popover", AntdPopover);
UniversalDashboard.register("ud-antd-layout", AntdLayout);
UniversalDashboard.register("ud-antd-header", AntdHeader);
UniversalDashboard.register("ud-antd-content", AntdContent);
UniversalDashboard.register("ud-antd-autocomplete", AntdAutoComplete);
UniversalDashboard.register("ud-antd-list", AntdList);
UniversalDashboard.register("ud-antd-list-item", AntdListItem);
UniversalDashboard.register("ud-antd-statistic", AntdStatistic);
UniversalDashboard.register("ud-antd-carousel", AntdCarousel);
UniversalDashboard.register("ud-antd-input", AntdInput);
UniversalDashboard.register("ud-antd-input-textarea", AntdInputTextArea);
UniversalDashboard.register("ud-antd-input-password", AntdInputPassword);
UniversalDashboard.register("ud-antd-icon", UDAntdIcon);
UniversalDashboard.register("ud-antd-radio", AntdRadio);
UniversalDashboard.register("ud-antd-radio-group", AntdRadioGroup);
