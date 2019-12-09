function New-UDAntdFooter {
    [CmdletBinding()]
    [OutputType('UDAntd.Footer')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "justify-content value of columns element.")]
        [ValidateSet("space-around", "space-between")]
        [string]$ColumnLayout = "space-around",
        [Parameter(HelpMessage = "max count of columns for each row.")]
        [int]$MaxColumnsPerRow,
        [Parameter(HelpMessage = "background color of footer.")]
        [string]$BackgroundColor,
        [Parameter(HelpMessage = "extra bottom area beneath footer columns.")]
        [object]$Bottom,
        [Parameter(HelpMessage = "Footers container Columns, it should be FooterColumn using New-UDAntdFooterColumn.")]
        [scriptblock]$Columns,
        [Parameter(HelpMessage = "Is the Columns scriptblock is register as ud endpoint")]
        [switch]$IsEndpoint,
        [Parameter(HelpMessage = "Creates a schedule for an endpoint")]
        [UniversalDashboard.Models.EndpointSchedule]$Schedule,
        [Parameter(HelpMessage = "Set css style on the main container.")]
        [hashtable]$Style
    )

    End {

        if ($null -ne $Columns) {
            if ($IsEndpoint) {
                if ($Columns -is [scriptblock]) {
                    $FooterColumnsEndpoint = New-UDEndpoint -Endpoint $Columns -Id $Id 
                    $FooterColumns = $Columns.Invoke()
                }
                elseif ($Columns -is [scriptblock] -and $PSBoundParameters.ContainsKey('Schedule')) {
                    $FooterColumnsEndpoint = New-UDEndpoint -Endpoint $Columns -Id $Id -Schedule $Schedule
                    $FooterColumns = $Columns.Invoke()
                }
                elseif ($Columns -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Columns must be a script block or UDEndpoint"
                }   
            }
            else {
                $FooterColumns = $Columns.Invoke()
            }
        }

        $UDAntdFooter = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-footer"
            id       = $Id
            key      = (New-Guid).ToString()
            style    = $Style
            content  = $FooterColumns
            columnLayout = $ColumnLayout
            maxColumnsPerRow = $MaxColumnsPerRow
            backgroundColor  = $BackgroundColor
            bottom = $Bottom
        }
        $UDAntdFooter.PSTypeNames.Insert(0, 'UDAntd.Footer')
        $UDAntdFooter
    }
}

function New-UDAntdFooterColumn {
    [CmdletBinding()]
    [OutputType('UDAntd.FooterColumn')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "background color of footer.")]
        [string]$Title,
        [Parameter(HelpMessage = "extra bottom area beneath footer columns.")]
        [object]$Icon,
        [Parameter(HelpMessage = "Footers container Columns, it should be FooterColumnItem using New-UDAntdFooterColumnItem.")]
        [scriptblock]$Items,
        [Parameter(HelpMessage = "Is the Columns scriptblock is register as ud endpoint")]
        [switch]$IsEndpoint,
        [Parameter(HelpMessage = "Creates a schedule for an endpoint")]
        [UniversalDashboard.Models.EndpointSchedule]$Schedule,
        [Parameter(HelpMessage = "Set css style on the main container.")]
        [hashtable]$Style
    )

    End {

        if ($null -ne $Items) {
            if ($IsEndpoint) {
                if ($Items -is [scriptblock]) {
                    $FooterColumnItemsEndpoint = New-UDEndpoint -Endpoint $Items -Id $Id 
                    $FooterColumnItems = $Items.Invoke()
                }
                elseif ($Items -is [scriptblock] -and $PSBoundParameters.ContainsKey('Schedule')) {
                    $FooterColumnItemsEndpoint = New-UDEndpoint -Endpoint $Items -Id $Id -Schedule $Schedule
                    $FooterColumnItems = $Items.Invoke()
                }
                elseif ($Items -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Items must be a script block or UDEndpoint"
                }   
            }
            else {
                $FooterColumnItems = $Items.Invoke()
            }
        }
        $UDAntdFooterColumn = @{
            assetId  = $AssetId 
            isPlugin = $true 
            id       = $Id
            key      = (New-Guid).ToString()
            style    = $Style
            icon = $Icon
            title = $Title
            content  = $FooterColumnItems
        }
        $UDAntdFooterColumn.PSTypeNames.Insert(0, 'UDAntd.FooterColumn')
        $UDAntdFooterColumn
    }
}

function New-UDAntdFooterColumnItem {
    [CmdletBinding()]
    [OutputType('UDAntd.FooterColumnItem')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "title of column.")]
        [string]$Title,
        [Parameter(HelpMessage = "description of column, come after title.")]
        [string]$Description,
        [Parameter(HelpMessage = "link url of item title.")]
        [string]$Url,
        [Parameter(HelpMessage = "link target would be _blank if openExternal is ture.")]
        [switch]$OpenExternal,
        [Parameter(HelpMessage = "icon that before column title.")]
        [object]$Icon,
        [Parameter(HelpMessage = "style properties of footer.")]
        [hashtable]$Style
    )

    End {
        $UDAntdFooterColumnItem = @{
            assetId  = $AssetId 
            isPlugin = $true 
            id       = $Id
            key      = (New-Guid).ToString()
            style    = $Style
            icon = $Icon
            title = $Title
            description = $Description
            openExternal = $OpenExternal.IsPresent
            url = $Url
        }
        $UDAntdFooterColumnItem.PSTypeNames.Insert(0, 'UDAntd.FooterColumnItem')
        $UDAntdFooterColumnItem
    }
}