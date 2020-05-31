import React from "react";
import { Input, Empty, AutoComplete } from "antd";
import matchSorter from 'match-sorter'
import useDashboardEvent from "../api/Hooks/useDashboardEvent";
import useAutoComplete from "./useAutoComplete";

export default function AntdAutoComplete({ id, ...props }) {
  const [dataSource, setDataSource] = React.useState([])
  const [{ attributes }] = useDashboardEvent(id, props)
  const { autoRefresh, refreshInterval, filterKeys, placeholder, size, ...restOfProps } = attributes
  const { data, error, status } = useAutoComplete(id, autoRefresh, refreshInterval)

  const onSelect = (value, option) => {
    console.log("selected", { value: value, option:{ ...option, children: data[option.key] } })
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: id + "OnSelect",
      eventName: "onSelect",
      eventData: JSON.stringify({ value, option: data[option.key] })
    });
  };

  // filter the options base on the input text and return new array of the results.
  const onChange = value => {
    let filtered = filterOptions(value).map((item,index) => <AutoComplete.Option title={item.name} value={item.name} children={item.name} key={index}/>)
    setDataSource(filtered)
  }
  // basic filter function using matchSorter module, this need more work.
  const filterOptions = value => {
    return value && matchSorter(data, value, { keys: filterKeys }) || data
  }

  if (status === "error") return <Alert message={error.message} type="error" />

  return (
    <AutoComplete onChange={onChange} onSelect={onSelect} dataSource={dataSource} dropdownMatchSelectWidth={true}>
      <Input.Search placeholder={placeholder} size={size} enterButton/>
    </AutoComplete>
  )
}

AntdAutoComplete.displayName = "AntdAutoComplete"
