import React from "react"
import { Input } from "antd"
import useDashboardEvent from "../api/Hooks/useDashboardEvent"

export default props => {
	const [{ attributes }] = useDashboardEvent(props.id, props)
	return <Input.TextArea rows={4} autoSize={true} spellCheck={true} />
}
