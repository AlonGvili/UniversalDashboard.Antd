import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import { useTheme } from 'antd-theme'

export default function AntdGithubCalendar({ username, color, ...props }) {
    const [{ variables }] = useTheme()
    return (
        <GitHubCalendar { ...props } color={ color || variables['primary-color'] } username={ username }>
            <ReactTooltip delayShow={ 50 } html />
        </GitHubCalendar>
    )
}
