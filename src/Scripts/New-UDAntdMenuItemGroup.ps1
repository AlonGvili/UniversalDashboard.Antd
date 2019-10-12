function New-UDAntdMenuItemGroup {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$Key,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [Hashtable]$Style
    )

    End {
        if($null -eq $Key){
            $Key = $Id
        }
        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-menu-item-group"
            id = $Id
            className = $ClassName
            title = $Title
            key = $key
            style = $Style
            content = $Content.Invoke()
        }

    }
}
