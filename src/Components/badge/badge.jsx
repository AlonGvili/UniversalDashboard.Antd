import React, { Fragment } from "react";
import { Badge } from "antd";
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";

const UDAntdBadge = props => {
  const [state, reload] = useDashboardEvent(props.id, props);
  const { content, attributes } = state;
  const { dot, id, className, text, overflowCount, color, showZero, style, status, count, parameterSetName, offset } = attributes

  const AntdBadge = props => {
    return <Badge {...props}/>
  }

  const AntdBadgeDot = props => {
    return <Badge {...props}/>
  }

  const antdBadgeContent = () => {
    return content && content.type
      ? UniversalDashboard.renderComponent(content)
      : <Fragment>{content}</Fragment>
  }

  const countProps = {
    count: count && count.type
          ? UniversalDashboard.renderComponent(count)
          : count,
    showZero: showZero,
    overflowCount: overflowCount || 99,
    style: {...style}
  };

  const dotProps = {
    color: color || 'red',
    text: text || '',
    status: status || '',
    dot: dot,
    offset: offset || null
  }

  return parameterSetName === 'Dot' ? <AntdBadgeDot id={id} className={`ud-antd-badge ${className}`} {...dotProps} children={antdBadgeContent} /> : <AntdBadge id={id} className={`ud-antd-badge ${className}`} {...countProps} children={antdBadgeContent} />
};

export default UDAntdBadge;
