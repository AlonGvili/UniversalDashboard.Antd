import React, { useState, useEffect } from "react";
import { Steps, Button, Icon } from 'antd'
import useDashboardEvent from "../Hooks/useDashboardEvent";

export default function UDAntdSteps(props) {
    const [state, reload] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;
    const [currentStep, setCurrentStep] = useState(0)
    const [stepContent, setStepContent] = useState(content[currentStep].content)
    const { id, variant, hasCallback, icons, ...restOfProps } = attributes

    useEffect(() => {
        setStepContent(content[currentStep].content)
    }, [currentStep])

    const getSteps = () => {
        let steps = content.map((step, index) => {
            return <Steps.Step {...step} status={index === currentStep && "process"} icon={index === currentStep && <Icon type="loading" style={{color: '#fff', backgroundColor: '#1890ff', padding: 8, borderRadius: '50%', fontSize: 16}}/>} subTitle={index === currentStep && 'process...'}/>
        })
        return steps
    }

    const next = () => {
        setCurrentStep(currentStep => currentStep + 1)
    }

    const previous = () => {
        setCurrentStep(currentStep => currentStep - 1)
    }



    return <div style={{width: '100%'}}>
        <Steps
            {...restOfProps}
            id={id}
            current={currentStep}
            type={variant}
        >
            {getSteps()}
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
            <Button type="primary" onClick={() => next()} children="Next" disabled={currentStep === content.length - 1} />
            <Button type="primary" onClick={() => previous()} children="Previous" disabled={currentStep <= 0} hidden={currentStep <= 0}/>
        </div>
    </div>
}

UDAntdSteps.displayName = "UDAntdSteps"
