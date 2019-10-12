function New-UDAntdSubMenu {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Key = $Id,
        [Parameter()]
        [scriptblock]$Title,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [scriptblock]$OnTitleClick,
        [Parameter()]
        [int[]]$PopupOffset,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        if ($null -ne $OnTitleClick) {
            if ($OnTitleClick -is [scriptblock]) {
                $OnTitleClickEvent = New-UDEndpoint -Endpoint $OnTitleClick -Id ($Id + "onTitleClick")
            }
            elseif ($OnTitleClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnTitleClick must be a script block or UDEndpoint"
            }
        }

        $AntdSubMenu = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-sub-menu"
            id = $Id
            className = $ClassName
            title = $Title.Invoke()
            key = $Key
            disabled = $Disabled.IsPresent
            content = $Content.Invoke()
            popupOffset = $PopupOffset
            style = $Style
        }
        $AntdSubMenu.PSTypeNames.Insert(0, "universaldashboard.antd.submenu") | Out-Null
        $AntdSubMenu
    }
}
