import React, { useContext } from "react"
import PageHeader from "antd/es/page-header"
import "antd/es/page-header/style/index.css"
import { DashboardContext } from "../../../api/appReducer"
import { useHistory } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

export default ({ subTitle, title, tags, avatar, ghost, footer, extra, id }) => {
	const history = useHistory()
	const location = useLocation()
	const {
		state: { selectedPageTitle },
	} = useContext(DashboardContext)

	const onGoBack = () => {
		(location.state && history.push(location.state.returnPathname))
	}
	return (
		<PageHeader
			id={id}
			onBack={() => window.history.back()}
			title={selectedPageTitle || title}
			ghost={ghost}
			subTitle={subTitle}
			tags={tags && UniversalDashboard.renderComponent(tags)}
			avatar={avatar && UniversalDashboard.renderComponent(avatar)}
			footer={footer && UniversalDashboard.renderComponent(footer)}
			extra={extra && UniversalDashboard.renderComponent(extra)}
			style={{ marginBottom: 24}}
		/>
	)
}
