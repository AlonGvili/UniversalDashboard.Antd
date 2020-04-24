import { Button, Result, Space } from "antd"

import React from "react"
import { useHistory } from "react-router-dom"

export default () => {
	const history = useHistory()
	return (
		<Result
			// icon={icon && UniversalDashboard.renderComponent(icon)}
			status="404"
			title="Page Not Found"
			subTitle="The page you are looking for dont exsist."
			extra={
				<Space>
					<Button type="primary" onClick={() => history.push(window.baseUrl)}>
						Go Home
					</Button>
					<Button type="primary" onClick={() => history.goBack()}>
						Go Back
					</Button>
				</Space>
			}
		/>
	)
}
