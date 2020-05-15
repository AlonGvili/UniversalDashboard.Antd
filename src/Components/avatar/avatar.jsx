import React from "react";
import { Avatar } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";


const AntdAvatar = ({id,...props}) => {
    const [{ content, attributes }] = useDashboardEvent(id, props);

    const contentProps = {
        children: content
    }

    const imageProps = {
        src: attributes.src,
        srcSet: attributes.srcSet,
        alt: attributes.alt
    }

    const iconProps = {
        children: UniversalDashboard.renderComponent(content)
    }

    let propsToUse
    switch(attributes.parameterSet){
        case 'Icon':
            propsToUse = {...iconProps}
            break
        case 'Image':
            propsToUse = {...imageProps}
            break
        case 'Content':
            propsToUse = {...contentProps}
            break
        default:
            console.log('No ParameterSet Was Selected!, Please Select One Of The Following: Content,Image,Icon')
            break
    }

    return (
        <Avatar {...attributes} {...propsToUse} />
    );
};

export default AntdAvatar;
