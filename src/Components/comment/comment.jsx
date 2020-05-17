import React from "react";
import { Comment, Button } from "antd";
import useDashboardEvent from "../api/Hooks/useDashboardEvent";
import {RetweetOutlined, DeleteOutlined} from "@ant-design/icons"
const commentContext = React.createContext()

export function useComment() {
    const dataRef = React.useRef()
    const [replys, setReplys] = React.useState([])

    const addReply = (newReply) => {
        setReplys(old => old.concat(newReply))
    }

    const removeReply = id => {
        newReplysArray = replys.filter(reply => reply.id !== id)
        return setReplys([...newReplysArray])
    }

    const api = {
        commentContext,
        dataRef,
        replys,
        addReply,
        removeReply
    }

    const UDAntdComment = useCommentComponent(api)

    return {
        ...api,
        UDAntdComment,
    }
}

function useCommentComponent(api) {
    const UDAntdComment = React.useMemo(
        () => ({ id, ...props }) => {
            const { replys, commentContext, addReply, removeReply } = UDAntdComment.api
            const [{content, attributes}] = useDashboardEvent(id, props)
            
            const ReplyButton = (
                <Button icon={<RetweetOutlined />} onClick={() => addReply(Math.random())}/>
            )
            return (
                <commentContext.Provider value={UDAntdComment.api}>
                    <Comment
                        id={id}
                        datetime={attributes.datetime}
                        actions={attributes.actions && [...UniversalDashboard.renderComponent(attributes.actions), ReplyButton]}
                        avatar={attributes.avatar && UniversalDashboard.renderComponent(attributes.avatar)}
                        author={attributes.author && UniversalDashboard.renderComponent(attributes.author)}
                        content={attributes.message && UniversalDashboard.renderComponent(attributes.message)}
                        style={attributes.style}
                    >
                        {UniversalDashboard.renderComponent(replys)}
                    </Comment>
                </commentContext.Provider>
            )
        },
        []
    )

    UDAntdComment.api = api

    return UDAntdComment
}

export default props => {
    const { UDAntdComment } = useComment()
    return <UDAntdComment {...props} />
}
// export default function AntdComment({ id, ...props }) {
//     const [{ content, attributes }] = useDashboardEvent(id, props);

//     console.log("comment content", content)

//     return <Comment
//         id={id}
//         datetime={attributes.datetime}
//         actions={attributes.actions && UniversalDashboard.renderComponent(attributes.actions)}
//         avatar={attributes.avatar && UniversalDashboard.renderComponent(attributes.avatar)}
//         author={attributes.author && UniversalDashboard.renderComponent(attributes.author)}
//         content={attributes.message && UniversalDashboard.renderComponent(attributes.message)}
//         style={attributes.style}
//     >
//         {UniversalDashboard.renderComponent(content)}
//     </Comment>
// };

// AntdComment.displayName = "AntdComment"
