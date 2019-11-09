import React, { useState } from "react";
import { Input, AutoComplete, Empty } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";
import { getPath, getValue } from "../Utils/utils.js";

const AntdAutoComplete = props => {
  // const { Option } = AutoComplete

  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const [dataSource, setDataSource] = useState(JSON.parse(content));
  const [matches, setMatches] = useState([]);

  const renderOption = value => {
    console.log(
      "value[attributes.optionLabelProp]",
      value[attributes.optionLabelProp]
    );
    return (
      <AutoComplete.Option
        key={value}
        // text={value.Name}
        value={
          value[attributes.optionLabelProp] !== null
            ? value[attributes.optionLabelProp].toString()
            : "test"
        }
        style={{ marginBottom: 16 }}
      >
        {value[attributes.optionLabelProp]}
      </AutoComplete.Option>
    );
  };

// const filters = attributes.filters

  const onSearch = value => {
    const regex = new RegExp(value, "gi")
    if(value){
      attributes.filters.forEach(flt => {
      dataSource.filter(item => {
          console.log('item: ', item)
          console.log('filter: ', flt)
          console.log("item[flt]: ", item[flt]);
          const valueAsString = item[flt] !== null ? item[flt].toString() : null
          valueAsString !== null &&
          valueAsString !== "" &&
          // !matches.includes(item[attributes.optionLabelProp]) &&
          valueAsString.match(regex)
          setMatches(matches.concat(renderOption(item)))
          // return renderOption(item)
        });
        // console.log("results: ", results);
      });
    }
    else{
      setMatches([])
    }
  }
  // const onSearch = value => {
  //   let match = matchSorter(dataSource, value, {
  //     keys: getPath(...dataSource)
  //   });
  //   console.log("match: ", match);
  //   match.length > 0 ? setMatches(match) : setMatches([]);
  // };

  const onSelect = (value, option) => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "OnSelect",
      eventName: "onSelect",
      eventData: JSON.stringify(option)
    });
  };

  return (
    <AutoComplete
      size="large"
      style={{ width: "100%" }}
      dataSource={
        matches
      }
      optionLabelProp="value"
      showSearch={false}
      onSelect={onSelect}
      onSearch={onSearch}
      // optionFilterProp="children"
      notFoundContent={matches ? null : <Empty />}
      dropdownStyle={{ ...attributes.dropDownStyle }}
      dropdownMenuStyle={{ ...attributes.dropdownMenuStyle }}
      dropdownMatchSelectWidth
    >
      <Input style={{ ...attributes.inputStyle, width: "100%" }} />
    </AutoComplete>
  );
};

export default AntdAutoComplete;
