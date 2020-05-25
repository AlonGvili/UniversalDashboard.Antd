
function New-UDAntdRow {
    [CmdletBinding()]
    [OutputType("Ant.Design.Row")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [hashtable]$Style,
        [Parameter(mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [ValidateSet("top", "middle", "bottom")]
        [string]$Align,
        [Parameter()]
        [int[]]$Gutter,
        [Parameter()]
        [ValidateSet("start", "end", "center", "space-around", "space-between")]
        [string]$Justify,
        [Parameter()]
        [switch]$Flex,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )

    End {

        if ($null -ne $Content) {
            $RowEndpoint = New-UDEndpoint -Id $id -Endpoint $Content 
        }

        $AntdRow = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-row"
            id              = $Id
            className       = $ClassName
            style           = $Style
            gutter          = $Gutter
            align           = $Align
            justify         = $Justify
            flex            = $Flex.IsPresent
            span            = $Span
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
        $AntdRow.PSTypeNames.Insert(0, "Ant.Design.Row")
        $AntdRow
    }
}
