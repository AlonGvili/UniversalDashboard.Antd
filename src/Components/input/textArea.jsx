import React from "react"
import { Input } from "antd"
import useDashboardEvent from "../Hooks/useDashboardEvent"

export default props => {
	const [{ attributes }] = useDashboardEvent(props.id, props)
	return <Input.TextArea {...attributes} spellCheck={true} />
}
