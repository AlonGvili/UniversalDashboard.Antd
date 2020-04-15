import React, { useEffect, useState, useCallback } from "react";
import queryString from "query-string";
import { useParams } from "react-router-dom";

export default function useFetchPageContent(id, name, dynamic) {
  const [content, setContent] = useState([]);

  const params = useParams();
  const query = `?${queryString.stringify(params)}`;

  const getDynamicPage = (pageId, queryParams) =>
    UniversalDashboard.get(
      `/api/internal/component/element/${pageId}${queryParams}`,
      (data) => setContent(data)
    );

  const getStaticPage = (pageName) =>
    UniversalDashboard.get(`/api/internal/dashboard/page/${pageName}`, (data) =>
      setContent(data.components)
    );

  const fetchData = useCallback(() => {
    return dynamic ? getDynamicPage(id, query) : getStaticPage(name);
  }, [id, query, name]);

  const subscribeToEvent = useCallback(
    (msg, event) => {
      if (event.type === "syncElement") fetchData();
    },
    [event]
  );

  useEffect(() => {
    let isCurrent = true;
    const pubSubToken = UniversalDashboard.subscribe(id, subscribeToEvent);
    if (isCurrent) fetchData();
    return () => {
      isCurrent = false;
      UniversalDashboard.unsubscribe(pubSubToken);
    };
  }, [id, subscribeToEvent]);

  return [content, fetchData];
}
