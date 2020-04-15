import React from "react"
import PageHeader from "antd/es/page-header"
import "antd/es/page-header/style/index.css"
export default ({ subTitle }) => {
	return (
		<PageHeader
			onBack={() => history.goBack()}
			title={(location.state && location.state.pageTitle) || "demo"}
			subTitle={subTitle}
		/>
	)
}
