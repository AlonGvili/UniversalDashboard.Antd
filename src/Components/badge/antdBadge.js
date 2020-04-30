import React from "react";
import { Badge } from "antd";
import AntdErrorBoundary from "../framework/core/errorBoundries";

export default ({ content, color }) => {
  return (
		<AntdErrorBoundary>
			<div>
				<Badge color={color}>{UniversalDashboard.renderComponent(content)}</Badge>
			</div>
		</AntdErrorBoundary>
  )
};
