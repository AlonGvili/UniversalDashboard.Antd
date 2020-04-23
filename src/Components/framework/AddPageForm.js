import React, { useContext, useState } from "react"
import { Form, Button, Input, Switch, InputNumber, Modal } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { DashboardContext, guid } from "../appReducer"

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
	const [form] = Form.useForm()
	return (
		<Modal
			visible={visible}
			title="Create a new Page"
			okText="Create"
			cancelText="Cancel"
			onCancel={() => {
				form.resetFields()
				onCancel()
			}}
			onOk={() => {
				form.validateFields()
					.then(values => {
						form.resetFields()
						console.log("values from ok", values)
						onCreate(values)
					})
					.catch(info => {
						console.log("Validate Failed:", info)
					})
			}}
		>
			<Form form={form} layout="vertical" name="form_in_modal" initialValues={{ id: guid() }}>
				<Form.Item name="id" label="PageId">
					<Input readOnly/>
				</Form.Item>
				<Form.Item name="name" label="PageName">
					<Input />
				</Form.Item>
				<Form.Item name="autoRefresh" label="AutoRefresh">
					<Switch />
				</Form.Item>
				<Form.Item name="refreshInterval" label="RefreshInterval">
					<InputNumber formatter={value => `${value * 1000}`} />
				</Form.Item>
				<Form.Item name="content" label="PageContent">
					<Input.TextArea placeholder="your powershell code goes in here." />
				</Form.Item>
			</Form>
		</Modal>
	)
}

const AddPageForm = () => {
	const [visible, setVisible] = useState(false)
	const { addPage } = useContext(DashboardContext)
	const onCreate = values => {
		UniversalDashboard.publish("element-event", {
			type: "clientEvent",
			eventId: "pageValues",
			eventName: values.id,
			eventData: JSON.stringify(values),
		})
		console.log(values)
		addPage(values)
		setVisible(false)
	}
	return (
		<div>
			<Button
				type="dashed"
				onClick={() => {
					setVisible(true)
				}}
				size="large"
				style={{ height: 68, backgroundColor: 'transparent' }}
			>
				<PlusOutlined /> Add Page
			</Button>
			<CollectionCreateForm
				visible={visible}
				onCreate={onCreate}
				onCancel={() => {
					setVisible(false)
				}}
			/>
		</div>
	)
}

export default AddPageForm
