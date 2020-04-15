import React from "react";
import { Layout } from "antd";
import { useThemeUI } from "theme-ui";

const Footer = Layout.Footer;

export default function DashboardFooter({ content = [], visible = true }) {
  const context = useThemeUI();
  const { theme, colorMode } = context;

  return (
    visible && (
      <Footer sx={{ bg: "primary", color: "text" }}>
        {UniversalDashboard.renderComponent(content)}
      </Footer>
    )
  );
}

DashboardFooter.displayName = "DashboardFooter";
