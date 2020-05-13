function New-UDAntdTable {
    [CmdletBinding()]
    [OutputType("Ant.Design.Table")]

    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [scriptblock]$Column,
        [Parameter()]
        [scriptblock]$DataSource,
        [Parameter()]
        [switch]$Bordered,
        [Parameter()]
        [switch]$ShowHeader,
        [Parameter()]
        [hashtable]$BodyStyle,
        [Parameter()]
        [hashtable]$HeaderStyle,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$IsEndpoint

    )

    End {

        if($null -ne $DataSource){
            if($IsEndpoint){
                $TableContent = $DataSource.Invoke() | ConvertTo-Json
                $TableEndpoint = New-UDEndpoint -Endpoint {
                    $DataSource.Invoke() | ConvertTo-Json
                } -Id $Id
            }
            else {
                $TableContent = $DataSource.Invoke()  | ConvertTo-Json
            }
        }

        $UDAntdTable = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-table"
            id       = $Id
            key      = (New-Guid).ToString()
            content = $TableContent
            columns = $Column.Invoke()
            bordered = $Bordered.IsPresent
            bodyStyle = $BodyStyle
            headerStyle = $HeaderStyle
            title = $Title
            showHeader = $ShowHeader.IsPresent
        }
        $UDAntdTable.PSTypeNames.Insert(0, 'Ant.Design.Table')
        $UDAntdTable
    }
}

function New-UDAntdTableColumn {
    [CmdletBinding()]
    [OutputType("Ant.Design.TableColumn")]

    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$Sortable,
        [Parameter()]
        [ValidateSet("left","right","center")]
        [string]$Align,
        [Parameter()]
        [int]$ColSpan,
        [Parameter()]
        [int]$Width,
        [Parameter()]
        [ValidateSet("left", "right")]
        [string]$Fixed,
        [Parameter()]
        [switch]$Visible
    )

    End {
        $UDAntdTableColumn = @{
            assetId  = $AssetId 
            isPlugin = $true 
            id       = $Id
            key =  (New-Guid).ToString()
            title = $Title
            sortable = $Sortable.IsPresent
            visible = $Visible.IsPresent
            fixed = $Fixed
            width = $Width
            colSpan = $ColSpan
            align = $Align
        }
        $UDAntdTableColumn.PSTypeNames.Insert(0, 'Ant.Design.TableColumn')
        $UDAntdTableColumn
    }
}