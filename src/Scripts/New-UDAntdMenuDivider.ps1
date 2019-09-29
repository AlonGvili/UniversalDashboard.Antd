function New-UDAntdMenuDivider {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [hashtable]$Style
    )

    End {
        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-menu-divider"
            id = $Id
            className = $ClassName
            style = $Style            # icon = $Icon
        }
    }
}
