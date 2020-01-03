import React, { useState, useEffect } from "react";
import { Steps, Button, Icon } from 'antd'
import useDashboardEvent from "../Hooks/useDashboardEvent";

const CustomStep = props => {
    const onClick = () => {
        UniversalDashboard.publish("element-event", {
        type: "stepInfo",
        step: props
        })
    }
    return <Steps.Step  {...props} title={props.status === "error" && props.errorMessage || props.title} icon={
        props.status === "process" && <Icon type="loading" style={{ color: '#fff', backgroundColor: '#1890ff', padding: 8, borderRadius: '50%', fontSize: 16 }} />
    } subTitle={`are you active: ${ props.active && 'Yea' || 'Nope'}`} onClick={onClick} />
}

export default function UDAntdSteps(props) {
    const [state, reload] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;
    const [currentStep, setCurrentStep] = useState(0)
    const [hasError, setHasError] = useState(false)
    const [stepContent, setStepContent] = useState(content[currentStep].content)
    const { id, variant, hasCallback, icons, ...restOfProps } = attributes

    useEffect(() => {
        setStepContent(content[currentStep].content)
    }, [currentStep])

    const next = () => {
        setCurrentStep(currentStep + 1)
    }

    const setError = () => {
        setHasError(err => !err)
    }

    const previous = () => {
        setCurrentStep(currentStep - 1)
    }

    return <div style={{ width: '100%' }}>
        <Steps
            {...restOfProps}
            id={id}
            status={hasError && "error" || "process"}
            current={currentStep}
            type={variant}
        >
            {
                content.map((step, index) => {
                    return <CustomStep {...step} />
                })
            }
        </Steps>
        <div className="steps-content" style={{
            marginTop: 16,
            border: '1px dashed #e9e9e9',
            borderRadius: 6,
            backgroundColor: '#fafafa',
            minHeight: 200,
            textAlign: 'center',
            paddingTop: 80
        }}>{UniversalDashboard.renderComponent(stepContent)}</div>
        <div className="steps-actions" style={{ marginTop: 24 }}>
            <Button type="primary" onClick={() => next()} children="Next" disabled={currentStep === content.length - 1} style={{marginRight: 8}}/>
            <Button type="primary" onClick={() => setError()} children="SetError" disabled={currentStep !== 1} style={{marginRight: 8}}/>
            <Button type="primary" onClick={() => previous()} children="Previous" disabled={currentStep <= 0} hidden={currentStep <= 0} style={{marginRight: 8}}/>
        </div>
    </div>
}

UDAntdSteps.displayName = "UDAntdSteps"
