/* eslint-disable react/display-name */
import React, { Suspense, lazy } from "react"
import { ReactQueryConfigProvider } from "react-query"

const AntdMenu = lazy(
	() => import(/* webpackChunkName: 'AntdMenu' */ "./menu/menu")
)
const AntdMenuItem = lazy(
	() => import(/* webpackChunkName: 'AntdMenuItem' */ "./menu-item/menu-item")
)
const AntdSubMenu = lazy(
	() => import(/* webpackChunkName: 'AntdSubMenu' */ "./menu-sub-menu/menu-sub-menu")
)
const AntdMenuItemGroup = lazy(
	() => import(/* webpackChunkName: 'AntdMenuItemGroup' */ "./menu-item-group/menu-item-group")
)
const AntdMenuDivider = lazy(
	() => import(/* webpackChunkName: 'AntdMenuDivider' */ "./menu-divider/menu-divider")
)
const AntdRow = lazy(
	() => import(/* webpackChunkName: 'AntdRow' */ "./Grid/row")
)
const AntdColumn = lazy(
	() => import(/* webpackChunkName: 'AntdColumn' */ "./Grid/column")
)
const AntdButton = lazy(
	() => import(/* webpackChunkName: 'AntdButton' */ "./button/button")
)
const AntdButtonGroup = lazy(
	() => import(/* webpackChunkName: 'AntdButtonGroup' */ "./button-group/button-group")
)
const AntdSwitch = lazy(
	() => import(/* webpackChunkName: 'AntdSwitch' */ "./switch/switch")
)
const AntdTimeLine = lazy(
	() => import(/* webpackChunkName: 'AntdTimeLine' */ "./timeline/timeline")
)
const AntdDrawer = lazy(
	() => import(/* webpackChunkName: 'AntdDrawer' */ "./drawer/drawer")
)
const AntdCard = lazy(
	() => import(/* webpackChunkName: 'AntdCard' */ "./card/card")
)
const AntdDescriptionList = lazy(
	() => import(/* webpackChunkName: 'AntdDescriptionList' */ "./description/description")
)
const AntdDescListItem = lazy(
	() => import(/* webpackChunkName: 'AntdDescriptionListItem' */ "./description-item/description-item")
)
const AntdBadge = lazy(
	() => import(/* webpackChunkName: 'AntdBadge' */ "./badge/antdBadge")
)
const AntdDropDown = lazy(
	() => import(/* webpackChunkName: 'AntdDropDown' */ "./dropdown/dropdown")
)
const AntdPopover = lazy(
	() => import(/* webpackChunkName: 'AntdPopover' */ "./popover/popover")
)
const AntdLayout = lazy(
	() => import(/* webpackChunkName: 'AntdLayout' */ "./Layout/Layout")
)
const AntdHeader = lazy(
	() => import(/* webpackChunkName: 'AntdHeader' */ "./Layout/Header")
)
const AntdContent = lazy(
	() => import(/* webpackChunkName: 'AntdContent' */ "./Layout/Content")
)
const AntdAutoComplete = lazy(
	() => import(/* webpackChunkName: 'AntdAutoComplete' */ "./autocomplete/autocomplete")
)
const AntdList = lazy(
	() => import(/* webpackChunkName: 'AntdHeader' */ "./list/list")
)
const AntdListItem = lazy(
	() => import(/* webpackChunkName: 'AntdHeader' */ "./listItem/listItem")
)
const AntdStatistic = lazy(
	() => import(/* webpackChunkName: 'AntdStatistic' */ "./statistic/statistic")
)
const AntdCarousel = lazy(
	() => import(/* webpackChunkName: 'AntdCarousel' */ "./carousel/carousel")
)
const AntdInput = lazy(
	() => import(/* webpackChunkName: 'AntdInput' */ "./input/input")
)
const AntdInputTextArea = lazy(
	() => import(/* webpackChunkName: 'AntdInputTextArea' */ "./input/textArea")
)
const AntdInputPassword = lazy(
	() => import(/* webpackChunkName: 'AntdInputPassword' */ "./input/password")
)
const AntdIcon = lazy(
	() => import(/* webpackChunkName: 'AntdIcon' */ "./icon/icon")
)
const AntdRadio = lazy(
	() => import(/* webpackChunkName: 'AntdRadio' */ "./radio/radio")
)
const AntdRadioButton = lazy(
	() => import(/* webpackChunkName: 'AntdRadioButton' */ "./radio/radio-button")
)
const AntdRadioGroup = lazy(
	() => import(/* webpackChunkName: 'AntdRadioGroup' */ "./radio/radio-group")
)
const AntdCopyToClipboard = lazy(
	() => import(/* webpackChunkName: 'AntdCopyToClipboard' */ "./copy-to-clipboard/copy-to-clipboard")
)
const AntdAvatar = lazy(
	() => import(/* webpackChunkName: 'AntdAvatar' */ "./avatar/avatar")
)
const AntdSlider = lazy(
	() => import(/* webpackChunkName: 'AntdSlider' */ "./slider/slider")
)
const AntdNotification = lazy(
	() => import(/* webpackChunkName: 'AntdNotification' */ "./notification/notification")
)
const AntdMessage = lazy(
	() => import(/* webpackChunkName: 'AntdMessage' */ "./message/message")
)
const AntdSider = lazy(
	() => import(/* webpackChunkName: 'AntdSider' */ "./Layout/Sider")
)
const AntdSideBar = lazy(
	() => import(/* webpackChunkName: 'AntdSider' */ "./framework/core/navigation/SideBar")
)
const AntdComment = lazy(
	() => import(/* webpackChunkName: 'AntdComment' */ "./comment/comment")
)
const AntdSteps = lazy(
	() => import(/* webpackChunkName: 'AntdSteps' */ "./steps/steps")
)
const AntdStep = lazy(
	() => import(/* webpackChunkName: 'AntdStep' */ "./steps/step")
)
const AntdFooter = lazy(
	() => import(/* webpackChunkName: 'AntdFooter' */ "./footer/footer")
)
const AntdTable = lazy(
	() => import(/* webpackChunkName: 'AntdTable' */ "./table/table")
)
const AntdForm = lazy(
	() => import( /* webpackChunkName: 'AntdForm' */ "./form/antForm")
)
const AntdFormItem = lazy(
	() => import( /* webpackChunkName: 'AntdFormItem' */ "./form/antFormItem")
)
const AntdResultPage = lazy(
	() => import(/* webpackChunkName: 'AntdResultPage' */ "./framework/pages/components/ResultPage")
)
const AntdPageHeader = lazy(
	() => import(/* webpackChunkName: 'AntdPageHeader' */ "./framework/pages/components/PageHeader")
)
const AntdTag = lazy(
	() => import(/* webpackChunkName: 'AntdTag' */ "./tags/tags")
)
const AntdCheckableTag = lazy(
	() => import(/* webpackChunkName: 'AntdCheckableTag' */ "./tags/checkableTag")
)
const AntdNavigationItem = lazy(
	() => import(/* webpackChunkName: 'AntdNavigationItem' */ "./framework/core/navigation/navigationItem")
)
const HeaderAccountSettings = lazy(
	() => import(/* webpackChunkName: 'HeaderAccountSettings' */ "./framework/core/members/headerMemberAccount")
)
const AntdAppBar = lazy(
	() => import(/* webpackChunkName: 'AntdAppBar' */ "./appbar/appbar")
)
const AntdChartCard = lazy(
	() => import(/* webpackChunkName: 'AntdChartCard' */ "./card/chartCard")
)
const AntdChartField = lazy(
	() => import(/* webpackChunkName: 'AntdChartField' */ "./charts/field")
)
const AntdChartTrend = lazy(
	() => import(/* webpackChunkName: 'AntdChartTrend' */ "./charts/trand")
)
const AntdDarkModeToggle = lazy(
	() => import(/* webpackChunkName: 'AntdDarkModeToggle' */ "./framework/core/darkmode/DarkModeToggle")
)
const AntdCountdown = lazy(
	() => import(/* webpackChunkName: 'AntdCountdown' */ "./statistic/countdown")
)
const AntdProgress = lazy(
	() => import(/* webpackChunkName: 'AntdProgress' */ "./progress/progress")
)
const AntdPopConfirm = lazy(
	() => import(/* webpackChunkName: 'AntdPopConfirm' */ "./popconfirm/popconfirm")
)
const AntdAvatarList = lazy(
	() => import(/* webpackChunkName: 'AntdAvatarList' */ "./avatar/avatarList")
)
const AntdCalendar = lazy(
	() => import(/* webpackChunkName: 'AntdCalendar' */ "./charts/calendar")
)
const AntdSpace = lazy(
	() => import(/* webpackChunkName: 'AntdSpace' */ "./space/space")
)
const AntdDivider = lazy(
	() => import(/* webpackChunkName: 'AntdDivider' */ "./divider/divider")
)
const ToggleColorMode = lazy(
	() => import(/* webpackChunkName: 'ToggleColorMode' */ "./framework/core/theme/toggleColorMode")
)
const TogglePrimaryColor = lazy(
	() => import(/* webpackChunkName: 'TogglePrimaryColor' */ "./framework/core/theme/togglePrimaryColor")
)

export default function registerComponents() {[
			{ type: "ud-antd-row", component: AntdRow },
			{ type: "ud-antd-col", component: AntdColumn },
			{ type: "ud-antd-button", component: AntdButton },
			{ type: "ud-antd-button-group", component: AntdButtonGroup },
			{ type: "ud-antd-switch", component: AntdSwitch },
			{ type: "ud-antd-timeline", component: AntdTimeLine },
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
			{ type: "ud-antd-sidebar", component: AntdSideBar },
			{ type: "ud-antd-comment", component: AntdComment },
			{ type: "ud-antd-steps", component: AntdSteps },
			{ type: "ud-antd-step", component: AntdStep },
			{ type: "ud-antd-footer", component: AntdFooter },
			{ type: "ud-antd-table", component: AntdTable },
			{ type: "ud-antd-form", component: AntdForm },
			{ type: "ud-antd-form-item", component: AntdFormItem },
			{ type: "ud-antd-result", component: AntdResultPage },
			{ type: "ud-antd-page-header", component: AntdPageHeader },
			{ type: "ud-antd-tag", component: AntdTag },
			{ type: "ud-antd-tag-checkable", component: AntdCheckableTag },
			{ type: "ud-antd-navigation-item", component: AntdNavigationItem },
			{ type: "ud-antd-header-account-settings", component: HeaderAccountSettings },
			{ type: "ud-antd-appbar", component: AntdAppBar },
			{ type: "ud-antd-darkmode-toggle", component: AntdDarkModeToggle },
			{ type: "ud-antd-chart-card", component: AntdChartCard },
			{ type: "ud-antd-chart-field", component: AntdChartField },
			{ type: "ud-antd-chart-trend", component: AntdChartTrend },
			{ type: "ud-antd-countdown", component: AntdCountdown },
			{ type: "ud-antd-progress", component: AntdProgress },
			{ type: "ud-antd-popconfirm", component: AntdPopConfirm },
			{ type: "ud-antd-avatar-list", component: AntdAvatarList },
			{ type: "ud-antd-charts-calendar", component: AntdCalendar },
			{ type: "ud-antd-space", component: AntdSpace },
			{ type: "ud-antd-divider", component: AntdDivider },
			{ type: "ud-antd-toggle-color-mode", component: ToggleColorMode },
			{ type: "ud-antd-toggle-primary-color", component: TogglePrimaryColor },
		].forEach(
			({ type, component }) => UniversalDashboard.register(type, component)
		)
}

registerComponents()
import AntDesign from "./api/dashboard"


UniversalDashboard.renderDashboard = ({ dashboard: { appbar, sidebar, footer, theme } }) => {
	return (
		<ReactQueryConfigProvider 
			config={{
				refetchOnWindowFocus: false, 
				refetchIntervalInBackground:true,
				useErrorBoundary: true,
				suspense: true
			}}>
			<Suspense fallback={null}>
				<AntDesign appbar={appbar} sidebar={sidebar} footer={footer} theme={theme}/>
			</Suspense>
		</ReactQueryConfigProvider>
	)
}
