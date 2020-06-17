import React from "react"
import { Input } from "antd"

export default function AntdTextArea(props) {
	const [value, setValue] = React.useState("demo text")
	return <Input.TextArea id={ props.id }  value={ value } onChange={ ({target}) => setValue(target.value) }  autoSize={false} />
}
