import React from 'react'
import Footer from 'rc-footer'
import useDashboardEvent from "../api/Hooks/useDashboardEvent";

export default function AntdFooter({ id, ...props }) {
    const [{ content, attributes }] = useDashboardEvent(id, props)

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
    return (
        <Footer
            {...attributes}
            columns={footerColumns}
            bottom={attributes.bottom && UniversalDashboard.renderComponent(attributes.bottom)}
        />
    )
}

AntdFooter.displayName = "AntdFooter"