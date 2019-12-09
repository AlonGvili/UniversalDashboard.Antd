import React from 'react'
import Footer from 'rc-footer'
import 'rc-footer/assets/index.css'
import useDashboardEvent from "../Hooks/useDashboardEvent.jsx";

export default function UDAntdFooter({id, ...props}){
    const [state] = useDashboardEvent(id, props)
    const {content ,attributes} = state

    const footerColumns = content.map(column => {
        return {
            icon: column.icon && UniversalDashboard.renderComponent(column.icon),
            items: column.content.map(item => {
                return {
                    icon: item.icon && UniversalDashboard.renderComponent(item.icon),
                    ...item,
                }
            }),
            ...column
        }
    })
    return <Footer {...attributes} bottom={attributes.bottom && UniversalDashboard.renderComponent(attributes.bottom)} columns={footerColumns}/>
}

UDAntdFooter.displayName = "UDAntdFooter"