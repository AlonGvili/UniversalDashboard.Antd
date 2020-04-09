import React, { lazy } from "react";

const AntdMenu = lazy(() =>
  import(/* webpackChunkName: 'AntdMenu' */ "./menu/menu")
);
const AntdMenuItem = lazy(() =>
  import(/* webpackChunkName: 'AntdMenuItem' */ "./menu-item/menu-item")
);
const AntdSubMenu = lazy(() =>
  import(/* webpackChunkName: 'AntdSubMenu' */ "./menu-sub-menu/menu-sub-menu")
);
const AntdMenuItemGroup = lazy(() =>
  import(
    /* webpackChunkName: 'AntdMenuItemGroup' */ "./menu-item-group/menu-item-group"
  )
);
const AntdMenuDivider = lazy(() =>
  import(
    /* webpackChunkName: 'AntdMenuDivider' */ "./menu-divider/menu-divider"
  )
);
const AntdRow = lazy(() =>
  import(/* webpackChunkName: 'AntdRow' */ "./Grid/row")
);
const AntdColumn = lazy(() =>
  import(/* webpackChunkName: 'AntdColumn' */ "./Grid/column")
);
const AntdButton = lazy(() =>
  import(/* webpackChunkName: 'AntdButton' */ "./button/button")
);
const AntdButtonGroup = lazy(() =>
  import(
    /* webpackChunkName: 'AntdButtonGroup' */ "./button-group/button-group"
  )
);
const AntdSwitch = lazy(() =>
  import(/* webpackChunkName: 'AntdSwitch' */ "./switch/switch")
);
const AntdTimeLine = lazy(() =>
  import(/* webpackChunkName: 'AntdTimeLine' */ "./timeline/timeline")
);
const AntdTimeLineItem = lazy(() =>
  import(/* webpackChunkName: 'AntdTimeLineItem' */ "./timeline/timelineItem")
);
const AntdDrawer = lazy(() =>
  import(/* webpackChunkName: 'AntdDrawer' */ "./drawer/drawer")
);
const AntdCard = lazy(() =>
  import(/* webpackChunkName: 'AntdCard' */ "./card/card")
);
const AntdDescriptionList = lazy(() =>
  import(
    /* webpackChunkName: 'AntdDescriptionList' */ "./description/description"
  )
);
const AntdDescListItem = lazy(() =>
  import(
    /* webpackChunkName: 'AntdDescriptionListItem' */ "./description-item/description-item"
  )
);
const AntdBadge = lazy(() =>
  import(/* webpackChunkName: 'AntdBadge' */ "./badge/antdBadge")
);
const AntdDropDown = lazy(() =>
  import(/* webpackChunkName: 'AntdDropDown' */ "./dropdown/dropdown")
);
const AntdPopover = lazy(() =>
  import(/* webpackChunkName: 'AntdPopover' */ "./popover/popover")
);
const AntdLayout = lazy(() =>
  import(/* webpackChunkName: 'AntdLayout' */ "./Layout/Layout")
);
const AntdHeader = lazy(() =>
  import(/* webpackChunkName: 'AntdHeader' */ "./Layout/Header")
);
const AntdContent = lazy(() =>
  import(/* webpackChunkName: 'AntdContent' */ "./Layout/Content")
);
const AntdAutoComplete = lazy(() =>
  import(
    /* webpackChunkName: 'AntdAutoComplete' */ "./autocomplete/autocomplete"
  )
);
const AntdList = lazy(() =>
  import(/* webpackChunkName: 'AntdHeader' */ "./list/list")
);
const AntdListItem = lazy(() =>
  import(/* webpackChunkName: 'AntdHeader' */ "./listItem/listItem")
);
const AntdStatistic = lazy(() =>
  import(/* webpackChunkName: 'AntdStatistic' */ "./statistic/statistic")
);
const AntdCarousel = lazy(() =>
  import(/* webpackChunkName: 'AntdCarousel' */ "./carousel/carousel")
);
const AntdInput = lazy(() =>
  import(/* webpackChunkName: 'AntdInput' */ "./input/input")
);
const AntdInputTextArea = lazy(() =>
  import(/* webpackChunkName: 'AntdInputTextArea' */ "./input/textArea")
);
const AntdInputPassword = lazy(() =>
  import(/* webpackChunkName: 'AntdInputPassword' */ "./input/password")
);
const AntdIcon = lazy(() =>
  import(/* webpackChunkName: 'AntdIcon' */ "./icon/antdIcon")
);
const AntdRadio = lazy(() =>
  import(/* webpackChunkName: 'AntdRadio' */ "./radio/radio")
);
const AntdRadioButton = lazy(() =>
  import(/* webpackChunkName: 'AntdRadioButton' */ "./radio/radio-button")
);
const AntdRadioGroup = lazy(() =>
  import(/* webpackChunkName: 'AntdRadioGroup' */ "./radio/radio-group")
);
const AntdCopyToClipboard = lazy(() =>
  import(
    /* webpackChunkName: 'AntdCopyToClipboard' */ "./copy-to-clipboard/copy-to-clipboard"
  )
);
const AntdAvatar = lazy(() =>
  import(/* webpackChunkName: 'AntdAvatar' */ "./avatar/avatar")
);
const AntdSlider = lazy(() =>
  import(/* webpackChunkName: 'AntdSlider' */ "./slider/slider")
);
const AntdNotification = lazy(() =>
  import(
    /* webpackChunkName: 'AntdNotification' */ "./notification/notification"
  )
);
const AntdMessage = lazy(() =>
  import(/* webpackChunkName: 'AntdMessage' */ "./message/message")
);
const AntdSider = lazy(() =>
  import(/* webpackChunkName: 'AntdSider' */ "./Layout/Sider")
);
const AntdComment = lazy(() =>
  import(/* webpackChunkName: 'AntdComment' */ "./comment/comment")
);
const AntdSteps = lazy(() =>
  import(/* webpackChunkName: 'AntdSteps' */ "./steps/steps")
);
const AntdStep = lazy(() =>
  import(/* webpackChunkName: 'AntdStep' */ "./steps/step")
);
const AntdFooter = lazy(() =>
  import(/* webpackChunkName: 'AntdFooter' */ "./footer/footer")
);
const AntdTable = lazy(() =>
  import(/* webpackChunkName: 'AntdTable' */ "./table/table")
);
const AntdForm = lazy(() =>
  import(/* webpackChunkName: 'AntdForm' */ "./form/antForm")
);
const AntdFormItem = lazy(() =>
  import(/* webpackChunkName: 'AntdFormItem' */ "./form/antFormItem")
);
const AntdThemeButton = lazy(() =>
  import(/* webpackChunkName: 'AntdThemeButton' */ "./theme/theme")
);

import AntDesign from "./dashboard";

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
UniversalDashboard.register("ud-antd-descriptionlist-item", AntdDescListItem);
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
UniversalDashboard.register("ud-antd-icon", AntdIcon);
UniversalDashboard.register("ud-antd-radio", AntdRadio);
UniversalDashboard.register("ud-antd-radio-button", AntdRadioButton);
UniversalDashboard.register("ud-antd-radio-group", AntdRadioGroup);
UniversalDashboard.register("ud-antd-copy-button", AntdCopyToClipboard);
UniversalDashboard.register("ud-antd-avatar", AntdAvatar);
UniversalDashboard.register("ud-antd-slider", AntdSlider);
UniversalDashboard.register("ud-antd-notification", AntdNotification);
UniversalDashboard.register("ud-antd-message", AntdMessage);
UniversalDashboard.register("ud-antd-sider", AntdSider);
UniversalDashboard.register("ud-antd-comment", AntdComment);
UniversalDashboard.register("ud-antd-steps", AntdSteps);
UniversalDashboard.register("ud-antd-step", AntdStep);
UniversalDashboard.register("ud-antd-footer", AntdFooter);
UniversalDashboard.register("ud-antd-table", AntdTable);
UniversalDashboard.register("ud-antd-form", AntdForm);
UniversalDashboard.register("ud-antd-form-item", AntdFormItem);
UniversalDashboard.register("ud-antd-theme-button", AntdThemeButton);

UniversalDashboard.renderDashboard = ({ dashboard }) => (
  <AntDesign dashboard={dashboard} />
);
