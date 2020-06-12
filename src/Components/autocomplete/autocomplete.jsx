import React from "react"
import { Input, Empty, AutoComplete, Alert } from "antd"
import matchSorter from 'match-sorter'
import useDashboardEvent from "../api/Hooks/useDashboardEvent"
import useAutoComplete from "./useAutoComplete"
import { useDebounce, useEventEmitter } from '@umijs/hooks'

export default function AntdAutoComplete({ id, ...props }) {
  const [dataSource, setDataSource] = React.useState([])
  const [{ attributes }] = useDashboardEvent(id, props)
  const { autoRefresh, refreshInterval, filterKeys, customInput, suffixIcon, ...restOfProps } = attributes
  const { data, error, status, isFetching, refetch } = useAutoComplete(id, autoRefresh, refreshInterval)
  const debouncedData = useDebounce(dataSource, 500)

  // callback to run on item select.
  const onSelect = (value) => {
    let selectedOption = filterKeys.map(fk => data.find(i => i[fk] === value))[0]
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: id + "OnSelect",
      eventName: "onSelect",
      eventData: JSON.stringify(selectedOption)
    })
  }

  // filter the options base on the input text and return new array of the results.
  const onChange = value => {
    let filtered = filterOptions(value)
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: id + "OnChange",
      eventName: "onChange",
      eventData: JSON.stringify(filtered)
    })
    let options = filtered.map(
      (item) => ({
        value: item.name,
        text: item.name
      })
    )
    setDataSource(options)
  }

  // basic filter function using matchSorter module, this need more work.
  const filterOptions = value => {
    let results = value && matchSorter(data, value, { keys: filterKeys })
    if (!results) return data
    else return results
  }

  // testing for errors in the react-query part from useAutoComplete function.
  if (status === "error") return <Alert message={ error.message } type="error" />

  return (
    <AutoComplete
      { ...restOfProps }
      suffixIcon={ suffixIcon && UniversalDashboard.renderComponent(suffixIcon) }
      loading={ isFetching }
      onChange={ onChange }
      onSelect={ onSelect }
      dataSource={ debouncedData }
    >
      <Input />
    </AutoComplete>
  )
}

AntdAutoComplete.displayName = "AntdAutoComplete"
