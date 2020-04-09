import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default ({ to, dynamic = false, ...rest }) => {
  const match = useRouteMatch();
  return <Link to={to}>{dynamic ? match.url : rest.name}</Link>;
};
