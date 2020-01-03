import React, { useState, Fragment } from "react";
import { InputProps as Input } from "antd/es/";
import AutoComplete from "antd/es/auto-complete";
import Empty from "antd/es/empty";
import { useDashboardEvent } from "../Hooks/index";
import matchSorter from 'match-sorter'
import ReactInterval from 'react-interval'

const UDAntdAutoComplete = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const { id, className, placeholder, inputStyle, customInput, dropDownStyle, dropdownMenuStyle, style, autoRefresh, refreshInterval, ...restOfProps } = attributes
  const [dataSource, setDataSource] = useState([]);

  const onSelect = (value, option) => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: id + "OnSelect",
      eventName: "onSelect",
      eventData: JSON.stringify({ value, option })
    });
  };

  // filter the options base on the input text and return new array of the results.
  const onChange = value => setDataSource(filterOptions(value))

  // basic filter function using matchSorter module, this need more work.
  const filterOptions = inputValue => {
    return inputValue
      ? matchSorter(content, inputValue, { keys: ['text', 'value'] })
      : content
  }

  const autoCompleteProps = {
    id: id,
    className: `ud-antd-autocomplete ${className}`,
    onSelect: onSelect,
    onChange: onChange,
    dataSource: dataSource,
    placeholder: placeholder,
    notFoundContent: <Empty description="No results found base on your input text." />
  }

  const autoCompleteStyles = {
    dropdownMenuStyle: { fontSize: 24, padding: 12, margin: 6, ...dropdownMenuStyle },
    dropdownStyle: { ...dropDownStyle },
    style: { ...style, width: "100%" },
    dropdownMatchSelectWidth: true,
  }

  const input = customInput ? (
    <Input
      {...customInput}
      addonBefore={
        customInput.addBefore &&
        UniversalDashboard.renderComponent(customInput.addBefore)
      }
      addonAfter={
        customInput.addonAfter &&
        UniversalDashboard.renderComponent(customInput.addonAfter)
      }
      suffix={
        customInput.suffix &&
        UniversalDashboard.renderComponent(customInput.suffix)
      }
      prefix={customInput.prefix && UniversalDashboard.renderComponent(
        customInput.prefix
      )}
      style={{
        backgroundColor: "#fff",
        ...customInput.style
      }}
    />
  ) : (
    <Input
      style={{
        width: "100%",
        minHeight: 64,
        fontSize: 24,
        backgroundColor: "#fff",
        color: "#333",
        borderColor: "#f6f6f6",
        ...inputStyle
      }}
    />
  );

  return <Fragment>
    <AutoComplete {...autoCompleteProps} {...autoCompleteStyles} children={input} />
    <ReactInterval callback={reload} timeout={refreshInterval} enabled={autoRefresh} />
  </Fragment>
};

export default UDAntdAutoComplete
