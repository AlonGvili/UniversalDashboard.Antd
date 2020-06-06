
function New-UDAntdRow {
    [CmdletBinding()]
    [OutputType("Ant.Design.Row")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [ValidateSet("top", "middle", "bottom")]
        [string]$Align,
        [Parameter()]
        [int[]]$Gutter = @(0),
        [Parameter()]
        [ValidateSet("start", "end", "center", "space-around", "space-between")]
        [string]$Justify
    )

    End {
        $AntdRow = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-row"
            id        = $Id
            gutter    = $Gutter
            align     = $Align
            justify   = $Justify
            content   = $Content.Invoke()
        }
        $AntdRow.PSTypeNames.Insert(0, "Ant.Design.Row")
        $AntdRow
    }
}
