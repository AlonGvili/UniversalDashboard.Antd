import React, { useState, useEffect } from "react";
import ReactInterval from "react-interval";
import queryString from "query-string";
import { useParams } from "react-router-dom";

export default ({ id, dynamic, name, autoRefresh, refreshInterval }) => {
  const [content, setContent] = useState([]);

  const params = useParams();
  const query = queryString.stringify(params);

  const fetchData = () =>
    dynamic
      ? UniversalDashboard.get(
          `/api/internal/component/element/${id}?${query}`,
          (data) => setContent(data)
        )
      : UniversalDashboard.get(`/api/internal/dashboard/page/${name}`, (data) =>
          setContent(data.components)
        );

  useEffect(() => {
    let isCurrent = true;
    if (isCurrent) fetchData();
    return () => (isCurrent = false);
  }, [id]);

  return (
    <React.Fragment>
      {UniversalDashboard.renderComponent(content)}
      <ReactInterval
        callback={fetchData}
        enabled={autoRefresh}
        timeout={refreshInterval}
      />
    </React.Fragment>
  );
};
