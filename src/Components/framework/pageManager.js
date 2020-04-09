import React from "react";
import Page from "./Page";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";

export default ({ pages = [] }) => {
  const getHomePage = () => pages.find((page) => page.defaultHomePage);

  const Pages = () => {
    const home = getHomePage();
    let dashboardPages = pages.map((page) => (
      <Route
        exact={!page.dynamic}
        path={page.dynamic ? page.url : `/${page.name}`}
      >
        <Page key={page.id} {...page} />
      </Route>
    ));
    dashboardPages.push(
      <Route exact path="/">
        <Redirect to={home.dynamic ? home.url : `/${home.name}`} />
      </Route>
    );
    return dashboardPages;
  };

  return (
    <Switch>
      <Pages />
    </Switch>
  );
};
