import React, { useState } from "react";
import { Input, AutoComplete, Empty } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";
import { getPath, getValue } from "../Utils/utils.js";

const AntdAutoComplete = props => {
  // const { Option } = AutoComplete

  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const [dataSource, setDataSource] = useState(JSON.parse(content));
  const [matches, setMatches] = useState(dataSource);

  const renderOption = value => {
    return (
      <AutoComplete.Option
        key={value.Name}
        text={value.Name}
        value={value.Name}
        style={{ marginBottom: 16 }}
      >
        {value.Name}
      </AutoComplete.Option>
    );
  };

  const onSearch = value => {
    let match = matchSorter(dataSource, value, {
      keys: getPath(...dataSource)
    });
    console.log("match: ", match);
    match.length > 0 ? setMatches(match) : setMatches([]);
  };

  const onSelect = (value, option) => {
    UniversalDashboard.publish("element-event", {
      type: "clientEvent",
      eventId: attributes.id + "OnSelect",
      eventName: "onSelect",
      eventData: JSON.stringify(option)
    });
    console.log("autocomplete onSelect value: ", value);
    console.log("autocomplete onSelect option: ", option);
  };

  return (
    <AutoComplete
      size="large"
      style={{ width: "100%" }}
      dataSource={matches.map(renderOption)}
      optionLabelProp="value"
      // filterOption={true}
      showSearch={false}
      onSelect={onSelect}
      onSearch={onSearch}
      optionFilterProp="children"
      notFoundContent={matches ? null : <Empty />}
      dropdownStyle={{ width: "100%" }}
      dropdownMenuStyle={{ padding: 16 }}
      dropdownMatchSelectWidth
    >
      <Input style={{ width: "100%", height: 64, backgroundColor: "#fff" }} />
    </AutoComplete>
  );
};

export default AntdAutoComplete;
