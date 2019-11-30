import React, { useEffect, useState, Suspense } from "react";
import { Slider, Skeleton } from 'antd'
import useDashboardEvent from "../Hooks/useDashboardEvent";

const UDAntdSlider = props => {
    const [state, reload] = useDashboardEvent(props.id, props);
    const { attributes } = state;

    const { className, assetId, isPlugin, type, beforeIcon, afterIcon, handleStyle, dotStyle, railStyle, trackStyle, range, step, marks, ...restOfProps } = attributes

    const onChange = value => {
        console.log('Slider Value: ', value)
        attributes.hasCallback ?
            UniversalDashboard.publish("element-event", {
                type: "clientEvent",
                eventId: attributes.id + "onChange",
                eventName: "onChange",
                eventData: Array.isArray(value) ? value.toString() : value
            }) : null
    };

    const sliderStyles = {
        handleStyle: handleStyle ? { ...handleStyle } : {
            backgroundColor: '#fff',
            borderRadius: '50%',
            border: 'solid 2px #91d5ff'
        },
        dotStyle: dotStyle ? { ...dotStyle } : {
            position: 'absolute',
            width: 8,
            height: 8,
            top: -2,
            backgroundColor: '#fff',
            border: '2px solid #e8e8e8',
            borderRadius: '50%',
            cursor: 'pointer'
        },
        railStyle: railStyle ? { ...railStyle } : {
            position: 'absolute',
            width: '100%',
            height: 4,
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            transition: 'background-color .3s'
        },
        trackStyle: trackStyle ? { ...trackStyle } : {
            position: 'absolute',
            height: 4,
            backgroundColor: '#91d5ff',
            borderRadius: 2,
            transition: 'background-color .3s'
        },
    }

    console.log('Marks: ', marks)

    const setSliderMarks = () => {
    marks ? Object.entries(marks).forEach(([key, value]) => {
            Object.defineProperty(marks,[key],{value: value.type ? UniversalDashboard.renderComponent(value) : value})
        }) : {}
    return marks || {}
    }
    const customSlider = beforeIcon || afterIcon
            ? <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                width: '100%'
            }}>
                {UniversalDashboard.renderComponent(beforeIcon)}
                <Slider className={`ud-antd-slider ${className}`} onChange={onChange} marks={setSliderMarks()} style={{width: 'inherit',marginLeft: 16, marginRight: 16}} range={range} step={step} {...sliderStyles} />
                {UniversalDashboard.renderComponent(afterIcon)}
            </div>
            : <Slider className={`ud-antd-slider ${className}`} onChange={onChange} marks={setSliderMarks()} range={range} step={step} {...sliderStyles} />

    return <Suspense fallback={<Skeleton loading avatar={false} title={false} paragraph={{ rows: 1 }} />}>
        {customSlider}
    </Suspense>
}

export default UDAntdSlider;
