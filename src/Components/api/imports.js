import React, { lazy } from "react"

const AntdMenu = lazy(() => import(/* webpackChunkName: 'AntdMenu' */ "../menu/menu"))
const AntdMenuItem = lazy(() => import(/* webpackChunkName: 'AntdMenuItem' */ "../menu-item/menu-item"))
const AntdSubMenu = lazy(() => import(/* webpackChunkName: 'AntdSubMenu' */ "../menu-sub-menu/menu-sub-menu"))
const AntdMenuItemGroup = lazy(() =>
	import(/* webpackChunkName: 'AntdMenuItemGroup' */ "../menu-item-group/menu-item-group")
)
const AntdMenuDivider = lazy(() => import(/* webpackChunkName: 'AntdMenuDivider' */ "../menu-divider/menu-divider"))
const AntdRow = lazy(() => import(/* webpackChunkName: 'AntdRow' */ "../Grid/row"))
const AntdColumn = lazy(() => import(/* webpackChunkName: 'AntdColumn' */ "../Grid/column"))
const AntdButton = lazy(() => import(/* webpackChunkName: 'AntdButton' */ "../button/button"))
const AntdButtonGroup = lazy(() => import(/* webpackChunkName: 'AntdButtonGroup' */ "../button-group/button-group"))
const AntdSwitch = lazy(() => import(/* webpackChunkName: 'AntdSwitch' */ "../switch/switch"))
const AntdTimeLine = lazy(() => import(/* webpackChunkName: 'AntdTimeLine' */ "../timeline/timeline"))
const AntdTimeLineItem = lazy(() => import(/* webpackChunkName: 'AntdTimeLineItem' */ "../timeline/timelineItem"))
const AntdDrawer = lazy(() => import(/* webpackChunkName: 'AntdDrawer' */ "../drawer/drawer"))
const AntdCard = lazy(() => import(/* webpackChunkName: 'AntdCard' */ "../card/card"))
const AntdDescriptionList = lazy(() =>
	import(/* webpackChunkName: 'AntdDescriptionList' */ "../description/description")
)
const AntdDescListItem = lazy(() =>
	import(/* webpackChunkName: 'AntdDescriptionListItem' */ "../description-item/description-item")
)
const AntdBadge = lazy(() => import(/* webpackChunkName: 'AntdBadge' */ "../badge/antdBadge"))
const AntdDropDown = lazy(() => import(/* webpackChunkName: 'AntdDropDown' */ "../dropdown/dropdown"))
const AntdPopover = lazy(() => import(/* webpackChunkName: 'AntdPopover' */ "../popover/popover"))
const AntdLayout = lazy(() => import(/* webpackChunkName: 'AntdLayout' */ "../Layout/Layout"))
const AntdHeader = lazy(() => import(/* webpackChunkName: 'AntdHeader' */ "../Layout/Header"))
const AntdContent = lazy(() => import(/* webpackChunkName: 'AntdContent' */ "../Layout/Content"))
const AntdAutoComplete = lazy(() => import(/* webpackChunkName: 'AntdAutoComplete' */ "../autocomplete/autocomplete"))
const AntdList = lazy(() => import(/* webpackChunkName: 'AntdHeader' */ "../list/list"))
const AntdListItem = lazy(() => import(/* webpackChunkName: 'AntdHeader' */ "../listItem/listItem"))
const AntdStatistic = lazy(() => import(/* webpackChunkName: 'AntdStatistic' */ "../statistic/statistic"))
const AntdCarousel = lazy(() => import(/* webpackChunkName: 'AntdCarousel' */ "../carousel/carousel"))
const AntdInput = lazy(() => import(/* webpackChunkName: 'AntdInput' */ "../input/input"))
const AntdInputTextArea = lazy(() => import(/* webpackChunkName: 'AntdInputTextArea' */ "../input/textArea"))
const AntdInputPassword = lazy(() => import(/* webpackChunkName: 'AntdInputPassword' */ "../input/password"))
const AntdIcon = lazy(() => import(/* webpackChunkName: 'AntdIcon' */ "../icon/antdIcon"))
const AntdRadio = lazy(() => import(/* webpackChunkName: 'AntdRadio' */ "../radio/radio"))
const AntdRadioButton = lazy(() => import(/* webpackChunkName: 'AntdRadioButton' */ "../radio/radio-button"))
const AntdRadioGroup = lazy(() => import(/* webpackChunkName: 'AntdRadioGroup' */ "../radio/radio-group"))
const AntdCopyToClipboard = lazy(() =>
	import(/* webpackChunkName: 'AntdCopyToClipboard' */ "../copy-to-clipboard/copy-to-clipboard")
)
const AntdAvatar = lazy(() => import(/* webpackChunkName: 'AntdAvatar' */ "../avatar/avatar"))
const AntdSlider = lazy(() => import(/* webpackChunkName: 'AntdSlider' */ "../slider/slider"))
const AntdNotification = lazy(() => import(/* webpackChunkName: 'AntdNotification' */ "../notification/notification"))
const AntdMessage = lazy(() => import(/* webpackChunkName: 'AntdMessage' */ "../message/message"))
const AntdSider = lazy(() => import(/* webpackChunkName: 'AntdSider' */ "../Layout/Sider"))
const AntdComment = lazy(() => import(/* webpackChunkName: 'AntdComment' */ "../comment/comment"))
const AntdSteps = lazy(() => import(/* webpackChunkName: 'AntdSteps' */ "../steps/steps"))
const AntdStep = lazy(() => import(/* webpackChunkName: 'AntdStep' */ "../steps/step"))
const AntdFooter = lazy(() => import(/* webpackChunkName: 'AntdFooter' */ "../footer/footer"))
const AntdTable = lazy(() => import(/* webpackChunkName: 'AntdTable' */ "../table/table"))
const AntdForm = lazy(() => import(/* webpackChunkName: 'AntdForm' */ "../form/antForm"))
const AntdFormItem = lazy(() => import(/* webpackChunkName: 'AntdFormItem' */ "../form/antFormItem"))
const AntdThemeButton = lazy(() => import(/* webpackChunkName: 'AntdThemeButton' */ "../theme/theme"))
const AntdResultPage = lazy(() => import(/* webpackChunkName: 'AntdResultPage' */ "../framework/pages/ResultPage"))
const AntdPageHeader = lazy(() => import(/* webpackChunkName: 'AntdPageHeader' */ "../framework/pages/components/PageHeader"))
const AntdTag = lazy(() => import(/* webpackChunkName: 'AntdTag' */ "../tags/tags"))
const AntdCheckableTag = lazy(() => import(/* webpackChunkName: 'AntdCheckableTag' */ "../tags/checkableTag"))


export default function registerComponents() {
	[
		{ type: "ud-antd-row", component: AntdRow },
		{ type: "ud-antd-col", component: AntdColumn },
		{ type: "ud-antd-button", component: AntdButton },
		{ type: "ud-antd-button-group", component: AntdButtonGroup },
		{ type: "ud-antd-switch", component: AntdSwitch },
		{ type: "ud-antd-timeline", component: AntdTimeLine },
		{ type: "ud-antd-timeline-item", component: AntdTimeLineItem },
		{ type: "ud-antd-drawer", component: AntdDrawer },
		{ type: "ud-antd-card", component: AntdCard },
		{ type: "ud-antd-descriptionlist", component: AntdDescriptionList },
		{ type: "ud-antd-descriptionlist-item", component: AntdDescListItem },
		{ type: "ud-antd-badge", component: AntdBadge },
		{ type: "ud-antd-dropdown", component: AntdDropDown },
		{ type: "ud-antd-menu", component: AntdMenu },
		{ type: "ud-antd-menu-item", component: AntdMenuItem },
		{ type: "ud-antd-sub-menu", component: AntdSubMenu },
		{ type: "ud-antd-menu-item-group", component: AntdMenuItemGroup },
		{ type: "ud-antd-menu-divider", component: AntdMenuDivider },
		{ type: "ud-antd-popover", component: AntdPopover },
		{ type: "ud-antd-layout", component: AntdLayout },
		{ type: "ud-antd-header", component: AntdHeader },
		{ type: "ud-antd-content", component: AntdContent },
		{ type: "ud-antd-autocomplete", component: AntdAutoComplete },
		{ type: "ud-antd-list", component: AntdList },
		{ type: "ud-antd-list-item", component: AntdListItem },
		{ type: "ud-antd-statistic", component: AntdStatistic },
		{ type: "ud-antd-carousel", component: AntdCarousel },
		{ type: "ud-antd-input", component: AntdInput },
		{ type: "ud-antd-input-textarea", component: AntdInputTextArea },
		{ type: "ud-antd-input-password", component: AntdInputPassword },
		{ type: "ud-antd-icon", component: AntdIcon },
		{ type: "ud-antd-radio", component: AntdRadio },
		{ type: "ud-antd-radio-button", component: AntdRadioButton },
		{ type: "ud-antd-radio-group", component: AntdRadioGroup },
		{ type: "ud-antd-copy-button", component: AntdCopyToClipboard },
		{ type: "ud-antd-avatar", component: AntdAvatar },
		{ type: "ud-antd-slider", component: AntdSlider },
		{ type: "ud-antd-notification", component: AntdNotification },
		{ type: "ud-antd-message", component: AntdMessage },
		{ type: "ud-antd-sider", component: AntdSider },
		{ type: "ud-antd-comment", component: AntdComment },
		{ type: "ud-antd-steps", component: AntdSteps },
		{ type: "ud-antd-step", component: AntdStep },
		{ type: "ud-antd-footer", component: AntdFooter },
		{ type: "ud-antd-table", component: AntdTable },
		{ type: "ud-antd-form", component: AntdForm },
		{ type: "ud-antd-form-item", component: AntdFormItem },
		{ type: "ud-antd-theme-button", component: AntdThemeButton },
		{ type: "ud-antd-result", component: AntdResultPage },
		{ type: "ud-antd-page-header", component: AntdPageHeader },
		{ type: "ud-antd-tag", component: AntdTag },
		{ type: "ud-antd-tag-checkable", component: AntdCheckableTag },
	].forEach(({type, component}) => UniversalDashboard.register(type, component))
	return null
}
