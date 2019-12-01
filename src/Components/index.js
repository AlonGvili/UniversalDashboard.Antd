import { lazy } from 'react'
import '../styles/index.less'

const UDAntdMenu = lazy(() => import( /* webpackChunkName: 'UDAntdMenu' */ "./menu/menu.jsx"))
const UDAntdMenuItem = lazy(() => import( /* webpackChunkName: 'UDAntdMenuItem' */ "./menu-item/menu-item.jsx"))
const UDAntdSubMenu = lazy(() => import( /* webpackChunkName: 'UDAntdSubMenu' */ "./menu-sub-menu/menu-sub-menu.jsx"))
const UDAntdMenuItemGroup = lazy(() => import( /* webpackChunkName: 'UDAntdMenuItemGroup' */ "./menu-item-group/menu-item-group.jsx"))
const UDAntdMenuDivider = lazy(() => import( /* webpackChunkName: 'UDAntdMenuDivider' */ './menu-divider/menu-divider.jsx'))
const UDAntdRow = lazy(() => import( /* webpackChunkName: 'UDAntdRow' */ './Grid/row'))
const UDAntdColumn = lazy(() => import( /* webpackChunkName: 'UDAntdColumn' */ './Grid/column.jsx'))
const UDAntdButton = lazy(() => import( /* webpackChunkName: 'UDAntdButton' */ './button/button.jsx'))
const UDAntdButtonGroup = lazy(() => import( /* webpackChunkName: 'UDAntdButtonGroup' */ "./button-group/button-group.jsx"))
const UDAntdSwitch = lazy(() => import( /* webpackChunkName: 'UDAntdSwitch' */  "./switch/switch.jsx"))
const UDAntdTimeLine = lazy(() => import( /* webpackChunkName: 'UDAntdTimeLine' */ "./timeline/timeline.jsx"))
const UDAntdTimeLineItem = lazy(() => import( /* webpackChunkName: 'UDAntdTimeLineItem' */ "./timeline/timelineItem.jsx"))
const UDAntdDrawer = lazy(() => import( /* webpackChunkName: 'UDAntdDrawer' */ "./drawer/drawer.jsx"))
const UDAntdCard = lazy(() => import( /* webpackChunkName: 'UDAntdCard' */ './card/card'))
const UDAntdDescriptionList = lazy(() => import( /* webpackChunkName: 'UDAntdDescriptionList' */ "./description/description.jsx"))
const UDAntdDescriptionListItem = lazy(() => import( /* webpackChunkName: 'UDAntdDescriptionListItem' */ "./description-item/description-item.jsx"))
const UDAntdBadge = lazy(() => import( /* webpackChunkName: 'UDAntdBadge' */ "./badge/badge.jsx"))
const UDAntdDropDown = lazy(() => import( /* webpackChunkName: 'UDAntdDropDown' */ "./dropdown/dropdown.jsx"))
const UDAntdPopover = lazy(() => import( /* webpackChunkName: 'UDAntdPopover' */ "./popover/popover.jsx"))
const UDAntdLayout = lazy(() => import( /* webpackChunkName: 'UDAntdLayout' */ "./Layout/Layout.jsx"))
const UDAntdHeader = lazy(() => import( /* webpackChunkName: 'UDAntdHeader' */ './Layout/Header.jsx'))
const UDAntdContent = lazy(() => import( /* webpackChunkName: 'UDAntdContent' */ './Layout/Content.jsx'))
const UDAntdAutoComplete = lazy(() => import( /* webpackChunkName: 'UDAntdAutoComplete' */ "./autocomplete/autocomplete.jsx"))
const UDAntdList = lazy(() => import( /* webpackChunkName: 'UDAntdHeader' */ "./list/list.jsx"))
const UDAntdListItem = lazy(() => import( /* webpackChunkName: 'UDAntdHeader' */ "./listItem/listItem.jsx"))
const UDAntdStatistic = lazy(() => import( /* webpackChunkName: 'UDAntdStatistic' */  "./statistic/statistic.jsx"))
const UDAntdCarousel = lazy(() => import( /* webpackChunkName: 'UDAntdCarousel' */  "./carousel/carousel.jsx"))
const UDAntdInput = lazy(() => import( /* webpackChunkName: 'UDAntdInput' */ "./input/input.jsx"))
const UDAntdInputTextArea = lazy(() => import( /* webpackChunkName: 'UDAntdInputTextArea' */ "./input/textArea"))
const UDAntdInputPassword = lazy(() => import( /* webpackChunkName: 'UDAntdInputPassword' */ "./input/password"))
const UDAntdIcon = lazy(() => import( /* webpackChunkName: 'UDAntdIcon' */ './icon/icon'))
const UDAntdRadio = lazy(() => import( /* webpackChunkName: 'UDAntdRadio' */ './radio/radio'))
const UDAntdRadioButton = lazy(() => import( /* webpackChunkName: 'UDAntdRadioButton' */ './radio/radio-button'))
const UDAntdRadioGroup = lazy(() => import( /* webpackChunkName: 'UDAntdRadioGroup' */ './radio/radio-group'))
const UDAntdCopyToClipboard = lazy(() => import( /* webpackChunkName: 'UDAntdCopyToClipboard' */ './copy-to-clipboard/copy-to-clipboard'))
const UDAntdAvatar = lazy(() => import( /* webpackChunkName: 'UDAntdAvatar' */ './avatar/avatar'))
const UDAntdSlider = lazy(() => import( /* webpackChunkName: 'UDAntdSlider' */ './slider/slider'))
const UDAntdNotification = lazy(() => import( /* webpackChunkName: 'UUDAntdNotification' */ './notification/notification'))
const UDAntdSider = lazy(() => import( /* webpackChunkName: 'UUDAntdSider' */ './Layout/Sider'))

UniversalDashboard.register("ud-antd-row", UDAntdRow);
UniversalDashboard.register("ud-antd-col", UDAntdColumn);
UniversalDashboard.register("ud-antd-button", UDAntdButton);
UniversalDashboard.register("ud-antd-button-group", UDAntdButtonGroup);
UniversalDashboard.register("ud-antd-switch", UDAntdSwitch);
UniversalDashboard.register("ud-antd-timeline", UDAntdTimeLine);
UniversalDashboard.register("ud-antd-timeline-item", UDAntdTimeLineItem);
UniversalDashboard.register("ud-antd-drawer", UDAntdDrawer);
UniversalDashboard.register("ud-antd-card", UDAntdCard);
UniversalDashboard.register("ud-antd-descriptionlist", UDAntdDescriptionList);
UniversalDashboard.register("ud-antd-descriptionlist-item", UDAntdDescriptionListItem);
UniversalDashboard.register("ud-antd-badge", UDAntdBadge);
UniversalDashboard.register("ud-antd-dropdown", UDAntdDropDown);
UniversalDashboard.register("ud-antd-menu", UDAntdMenu);
UniversalDashboard.register("ud-antd-menu-item", UDAntdMenuItem);
UniversalDashboard.register("ud-antd-sub-menu", UDAntdSubMenu);
UniversalDashboard.register("ud-antd-menu-item-group", UDAntdMenuItemGroup);
UniversalDashboard.register("ud-antd-menu-divider", UDAntdMenuDivider);
UniversalDashboard.register("ud-antd-popover", UDAntdPopover);
UniversalDashboard.register("ud-antd-layout", UDAntdLayout);
UniversalDashboard.register("ud-antd-header", UDAntdHeader);
UniversalDashboard.register("ud-antd-content", UDAntdContent);
UniversalDashboard.register("ud-antd-autocomplete", UDAntdAutoComplete);
UniversalDashboard.register("ud-antd-list", UDAntdList);
UniversalDashboard.register("ud-antd-list-item", UDAntdListItem);
UniversalDashboard.register("ud-antd-statistic", UDAntdStatistic);
UniversalDashboard.register("ud-antd-carousel", UDAntdCarousel);
UniversalDashboard.register("ud-antd-input", UDAntdInput);
UniversalDashboard.register("ud-antd-input-textarea", UDAntdInputTextArea);
UniversalDashboard.register("ud-antd-input-password", UDAntdInputPassword);
UniversalDashboard.register("ud-antd-icon", UDAntdIcon);
UniversalDashboard.register("ud-antd-radio", UDAntdRadio);
UniversalDashboard.register("ud-antd-radio-button", UDAntdRadioButton);
UniversalDashboard.register("ud-antd-radio-group", UDAntdRadioGroup);
UniversalDashboard.register("ud-antd-copy-button", UDAntdCopyToClipboard);
UniversalDashboard.register("ud-antd-avatar", UDAntdAvatar);
UniversalDashboard.register("ud-antd-slider", UDAntdSlider);
UniversalDashboard.register("ud-antd-notification", UDAntdNotification);
UniversalDashboard.register("ud-antd-sider", UDAntdSider);
