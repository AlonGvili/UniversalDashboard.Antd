import React, { useState } from "react";
import { Layout } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent";

const UDAntdSider = props => {
    const [state, reload] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;
    const [isCollapsed, setIsCollapsed] = useState(true)

    const onCollapse = collapsed => setIsCollapsed(!isCollapsed)

    return (
        <Layout.Sider {...attributes} onCollapse={onCollapse} collapsed={isCollapsed} collapsible >
            {UniversalDashboard.renderComponent(content)}
        </Layout.Sider>
    );
};
export default UDAntdSider;
