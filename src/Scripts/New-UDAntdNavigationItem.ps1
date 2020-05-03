function New-UDAntdNavigationItem {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).guid.toString(),
        [Parameter()]
        [string]$Key = (New-Guid).guid.toString(),
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [string]$To,
        [Parameter()]
        [string]$Title
    )

    End {
        @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-navigation-item"
            id       = $Id
            key      = $Key
            icon     = $Icon
            title    = $Title
            to       = $To
        }
    }
}