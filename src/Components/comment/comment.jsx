import React from "react";
import { Comment, Avatar } from "antd";
import moment from 'moment'
import useDashboardEvent from "../Hooks/useDashboardEvent";

const UDAntdComment = props => {
    const [state, reload] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;
    const { author, id, className, style, avatar, actions, message} = attributes

    const commentProps = {
        author: author && author.type && UniversalDashboard.renderComponent(author) || author,
        avatar: avatar && avatar.type && UniversalDashboard.renderComponent(avatar) || <Avatar size="large" icon="user" />,
        datetime: moment().fromNow(),
        content: message && message.type ? UniversalDashboard.renderComponent(message) : message && !message.type ? message : null,
        actions: actions && actions.map(action => {
            return action.type ? UniversalDashboard.renderComponent(action) : action
        }),
        style: {...style}
    }

    return <Comment id={id} key={id} className={`ud-antd-comment ${className}`} children={UniversalDashboard.renderComponent(content)} {...commentProps}/>
};

export default UDAntdComment;
