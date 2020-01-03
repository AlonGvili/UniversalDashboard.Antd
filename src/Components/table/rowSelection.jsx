// rowSelection object indicates the need for row selection
export const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record, ...props) => (
        console.log(`record: ${record}`, `props: ${props}`)
        // disabled: record.name === 'Disabled User', // Column configuration not to be checked
        // name: record.name,
    ),
}


