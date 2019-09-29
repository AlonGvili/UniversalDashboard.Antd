function New-UDAntdPopover {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [scriptblock]$Title,
        [Parameter()]
        [ValidateSet("top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom")]
        [string]$Placement,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [scriptblock]$Children,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        if($null -ne $Title){
            $PopoverTitle = $Title.Invoke()
        }else {
            $PopoverTitle = $null
        }

        $AntdPopover = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-popover"
            id = $Id
            className = $ClassName
            title = $PopoverTitle
            placement = $Placement
            key = $Id
            content = $Content.Invoke()
            children = $Children.Invoke()
            style = $Style
        }
        $AntdPopover.PSTypeNames.Insert(0, "universaldashboard.antd.popover") | Out-Null
        $AntdPopover
    }
}
