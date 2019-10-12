import AntdMenu from "./menu/menu.jsx"
import AntdMenuItem from "./menu-item/menu-item.jsx"
import AntdSubMenu from "./menu-sub-menu/menu-sub-menu.jsx"
import AntdMenuItemGroup from "./menu-item-group/menu-item-group.jsx"
import AntdMenuDivider from './menu-divider/menu-divider.jsx'
import AntdRow from "./Grid/row.jsx"
import AntdColumn from "./Grid/column.jsx"
import AntdButton from "./button/button.jsx"
import AntdButtonGroup from "./button-group/button-group.jsx"
import AntdSwitch from "./switch/switch.jsx"
import AntdTimeLine from "./timeline/timeline.jsx"
import AntdTimeLineItem from "./timeline/timelineItem.jsx"
import AntdDrawer from "./drawer/drawer.jsx"
import AntdCard from "./card/card.jsx"
import AntdDescriptionList from "./description/description.jsx"
import AntdDescriptionListItem from  "./description-item/description-item.jsx"
import AntdBadge from "./badge/badge.jsx"
import AntdDropDown from "./dropdown/dropdown.jsx"
import AntdPopover from "./popover/popover.jsx"
import AntdLayout from "./Layout/Layout.jsx"
import AntdHeader from "./Layout/Header.jsx"
import AntdContent from "./Layout/Content.jsx"
import AntdAutoComplete from  "./autocomplete/autocomplete.jsx"
import AntdList from "./list/list.jsx"
import AntdListItem from "./listItem/listItem.jsx"
import AntdStatistic from "./statistic/statistic.jsx"
import AntdCarousel from "./carousel/carousel.jsx"
import AntdInput from "./input/input.jsx"
import AntdInputTextArea from "./input/textArea"
import AntdInputPassword from "./input/password"
import UDAntdIcon from "./icon/icon"
import AntdRadio from "./radio/radio"
import AntdRadioButton from "./radio/radio-button"
import AntdRadioGroup from "./radio/radio-group"
// const AntdCollapsed = lazy(() =>
//   import(/* webpackChunkName: "AntdCollapsed" */ "./Utils/collapse")
// ); - Still in development

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
UniversalDashboard.register("ud-antd-descriptionlist-item", AntdDescriptionListItem);
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
UniversalDashboard.register("ud-antd-radio-button", AntdRadioButton);
UniversalDashboard.register("ud-antd-radio-group", AntdRadioGroup);
// UniversalDashboard.register("ud-antd-collapsed", AntdCollapsed); - Still in development
