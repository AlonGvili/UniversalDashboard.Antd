import React from "react"
import {PageHeader} from "antd"
// import "antd/es/page-header/style/index.css"

export default ({ subTitle, title, tags, avatar, ghost, footer, extra, id }) => {
	return (
		<PageHeader
			id={id}
			onBack={() => window.history.back()}
			title={ title}
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
