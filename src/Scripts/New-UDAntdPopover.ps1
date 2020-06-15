function New-UDAntdPopover {
    [CmdletBinding()]
    [OutputType("Ant.Design.Popover")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [ValidateSet("top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom")]
        [string]$Placement = "top",
        [Parameter()]
        [object]$Content,
        [Parameter()]
        [object]$Trigger
    )

    End {
        $AntdPopover = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-popover"
            id        = $Id
            title     = $Title
            placement = $Placement
            key       = $Id
            content   = $Content
            trigger   = $Trigger
        }
        $AntdPopover.PSTypeNames.Insert(0, "Ant.Design.Popover") | Out-Null
        $AntdPopover
    }
}
