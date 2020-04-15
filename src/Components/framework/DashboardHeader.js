import React from "react";
import { Layout } from "antd";
import { useThemeUI, jsx } from "theme-ui";
import { Link } from "react-router-dom";
import { useDashboardState } from "../app-state";
const Header = Layout.Header;

export default function DashboardHeader({
  // pages,
  content = [],
  visible = true,
}) {
  const [{pages}, dispatch] = useDashboardState()
  const context = useThemeUI();
  const { theme, colorMode } = context;
  return (
    visible && (
      <Header
        style={{
          backgroundColor: theme.colors.primary,
          color: theme.colors.text,
        }}
      >
        {pages.map((page) => (
          <Link
            to={{
              pathname: page.dynamic ? page.url : `/${page.name}`,
              state: { pageTitle: page.title },
            }}
          >
            {page.dynamic ? ` ${page.url} ` : ` /${page.name} `}
          </Link>
        ))}
      </Header>
    )
  );
}

DashboardHeader.displayName = "DashboardHeader";
