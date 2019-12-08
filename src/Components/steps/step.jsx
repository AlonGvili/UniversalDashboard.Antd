import React from "react";
import { Steps } from 'antd'
import useDashboardEvent from "../Hooks/useDashboardEvent";

const { Step } = Steps

const UDAntdStep = props => {
    const [state, reload, setState] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;
    const { id, key, title, subTitle, description, ...restOfProps } = attributes



    return <Step
        {...restOfProps}
        id={id}
        key={key}
        title={title}
        subTitle={subTitle}
        description={description} />
}

UDAntdStep.displayName = "UDAntdStep"
export default UDAntdStep;

