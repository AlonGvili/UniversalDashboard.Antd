import React, { Suspense } from "react";
import { Layout, Spin, Space } from "antd";
import { useLocation, Link, useRouteMatch } from "react-router-dom";
import PageManager from "./framework/pageManager";
import { disableUdTheme } from "./resets/reset-style";

const { Content, Sider, Footer, Header } = Layout;

export default ({ dashboard }) => {
  disableUdTheme();
  const location = useLocation();
  const match = useRouteMatch();
  const { pages } = dashboard;

  console.log(pages);
  console.log("dashboard matches", match);
  return (
    <Suspense fallback={<Spin />}>
      <Layout>
        <Header>
          <Space size="large">
            {pages.map((page) => (
              <Link to={page.dynamic ? `${page.url}` : `/${page.name}`}>
                {page.name || location.pathname}
              </Link>
            ))}
          </Space>
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            <PageManager pages={pages} />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Suspense>
  );
};
