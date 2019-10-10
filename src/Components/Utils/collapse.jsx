import React from 'react'
import TweenOne from 'rc-tween-one'
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";

const AntdCollapsed = props => {
    const [state, reload] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;

    let TweenOneGroup = TweenOne.TweenOneGroup;
    return <TweenOneGroup appear key={attributes.id} leave={{ duration: 500, minHeight: attributes.minHeight}} >
        {content ? UniversalDashboard.renderComponent(content) : props.children}
    </TweenOneGroup>
}

export default AntdCollapsed