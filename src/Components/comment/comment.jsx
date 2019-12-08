import React,{useState, useEffect, useContext} from "react";
import { Comment, Avatar, Button } from "antd";
import moment from 'moment'
import useDashboardEvent from "../Hooks/useDashboardEvent";

const UDAntdComment = props => {
    const [state, reload, setState] = useDashboardEvent(props.id, props);
    const { content, attributes } = state;
    const { author, id, key, className, style, avatar, actions, message, datetime} = attributes

    useEffect(() => {
        const pubSubToken = UniversalDashboard.subscribe('dashboardContext-context', (ctx) => {
            const alon = useContext(ctx)
            console.log('context: ', alon)
        })
        return () => UniversalDashboard.unsubscribe(pubSubToken);
    })

    const removeComment = id => {
        let demo = document.getElementById(id)
        let parent = demo.parentElement
        parent.removeChild(demo)
    }

    const commentProps = {
        author: author && author.type && UniversalDashboard.renderComponent(author) || author,
        avatar: avatar && avatar.type && UniversalDashboard.renderComponent(avatar) || <Avatar size="large" icon="user" />,
        datetime: datetime || moment().fromNow(),
        content: message && message.map(item => item.type ? UniversalDashboard.renderComponent(item) : item && !item.type ? item : null),
        style: {...style}
    }

    const commentActions = () => {
        let buttons = actions ? actions.map(item => item.type ? UniversalDashboard.renderComponent(item) : item) : []
        buttons.push(<Button type="link" icon="delete" block onClick={() => removeComment(id)} />)
        return buttons
    }
    return <Comment id={id} key={key} className={`ud-antd-comment ${className}`} children={UniversalDashboard.renderComponent(content)} {...commentProps} actions={commentActions()} />
};

export default UDAntdComment;
