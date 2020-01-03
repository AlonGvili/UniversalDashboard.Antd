import React, { useState, useReducer, useEffect, useRef } from "react";
import { Table, Icon, Modal } from 'antd'
import useDashboardEvent from "../Hooks/useDashboardEvent";

// Table actions.
const RELOAD_TABLE = 'RELOAD_TABLE'
const FULLSCREEN_TABLE = 'FULLSCREEN_TABLE'

// Data export actions.
const EXPORT_DATA_CSV = 'EXPORT_DATA_CSV'
const EXPORT_DATA_JSON = 'EXPORT_DATA_JSON'
const EXPORT_DATA_XML = 'EXPORT_DATA_XML'
const EXPORT_DATA_IMG = 'EXPORT_DATA_IMG'

// Column actions.
const SHOW_COLUMN = 'SHOW_COLUMN'
const HIDE_COLUMN = 'HIDE_COLUMN'
const EDIT_COLUMN = 'EDIT_COLUMN'
const SORT_COLUMN = 'SORT_COLUMN'
const FILTER_COLUMN = 'FILTER_COLUMN'

// Row actions.
const EDIT_ROW = 'EDIT_ROW'
const REMOVE_ROW = 'REMOVE_ROW'
const MOVE_ROW = 'MOVE_ROW'
const SELECT_ROW = 'SELECT_ROW'
const DISABLE_ROW = 'DISABLE_ROW'

// Cell actions.
const EDIT_CELL = 'EDIT_CELL'
const DISABLE_CELL = 'DISABLE_CELL'

// Components actions.
const SHOW_TOOLBAR = 'SHOW_TOOLBAR'
const HIDE_TOOLBAR = 'HIDE_TOOLBAR'
const SHOW_PAGINATION = 'SHOW_PAGINATION'
const HIDE_PAGINATION = 'HIDE_PAGINATION'

const generateTableData = data => {
    const dataSet = Array.isArray(data) ? data.map(item => { return { ...item } }) : JSON.parse(data).map(item => { return { ...item } })
    console.log('dataSet: ', dataSet)
    return dataSet
}
const generateTableColumns = props => {
    const { columns, sortInfo, ...restOfProps } = props
    columns.map(column => ({
        title: column.title,
        dataIndex: column.title,
        key: column.key,
        width: column.width,
        fixed: column.fixed,
        render: (text) => {
            return text && text.type && UniversalDashboard.renderComponent(text) || text
        },
        sorter: column.sortable ? (a, b) => {
            let lowerA = a[column.title] && a[column.title].toLowerCase()
            let lowerB = b[column.title] && b[column.title].toLowerCase()
            if (lowerA > lowerB) {
                return 1;
            }
            if (lowerA < lowerB) {
                return -1;
            }
            return 0
        } : false,
        sortOrder: sortInfo.columnKey === column.title && sortInfo.order,
    })
    )
}

const { Column, ColumnGroup } = Table

const UDAntdTable = props => {
    const testRef = useRef(props)
    const [state, reload] = useDashboardEvent(props.id, props)
    const { content, attributes } = state
    const [dataSource, setDataSource] = useState(generateTableData(content))
    const [columns, setColumns] = useState([])
    const [sortInfo, setSortInfo] = useState({ order: 'ascend', columnKey: 'Name' })
    const [isLoading, setIsLoading] = useState(false)
    const [inFullScreen, setFullScreen] = useState(false)

    const onChange = (pagination, filters, sorter, extra) => {
        setSortInfo({ order: sorter.order, columnKey: sorter.field })
        setDataSource([...extra.currentDataSource])
    }

    const onReload = () => {
        setIsLoading(true)
        reload()
        setDataSource(generateTableData(content))
        console.log('testRef.current', testRef.current)
        testRef.current.dataSource = generateTableData(content)
        setIsLoading(false)
    }

    function info() {
        !inFullScreen && Modal.info({
            content: (
                <div>
                    <UDAntdTable {...testRef.current} inFullScreen={inFullScreen} />
                </div>
            ),
            icon: null,
            width: "90vw",
            centered: true,
            maskClosable: true,
            focusTriggerAfterClose: true,
            afterClose: () => setFullScreen(false)
        })
    }

    const TableHeader = headerProps => {
        const { headerStyle } = headerProps
        return {
            header: {
                cell: (props) => {
                    console.log('tableHeader => header => cell ', props)
                    return <th {...props} style={{ ...headerStyle }} />
                },
                row: (props) => {
                    console.log('tableHeader => header => row ', props)
                    return <tr {...props} />
                }
            }
        }
    }

    return <Table
        id={attributes.id}
        dataSource={dataSource}
        components={<TableHeader {...props} headerStyle={attributes.headerStyle} />}
        columns={columns}
        bodyStyle={attributes.bodyStyle}
        pagination={{ showQuickJumper: true, defaultPageSize: 10 }}
        bordered={attributes.bordered}
        onChange={onChange}
        loading={isLoading}
        title={() => {
            return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ flex: '1 0' }}>{attributes.title}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', flex: '0 1 5%', alignItems: 'center' }}>
                    <Icon type="file-excel" />
                    <Icon type="file-pdf" />
                    <Icon type="reload" onClick={onReload} />
                    {!inFullScreen && <Icon type="fullscreen" onClick={info} />}
                </div>
            </div>
        }}
    />
}

UDAntdTable.displayName = "UDAntdTable"
export default UDAntdTable

