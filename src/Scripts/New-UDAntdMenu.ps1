function New-UDAntdMenu {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet("horizontal","vertical","inline")]
        [string]$Mode,
        [Parameter()]
        [ValidateSet("hover","click")]
        [string]$TriggerSubMenuAction,
        # [Parameter()]
        # [switch]$Collapsed,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        $AntdMenu = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-menu"
            id = $Id
            className = $ClassName
            mode = $Mode
            triggerSubMenuAction = $TriggerSubMenuAction
            # inlineCollapsed = $Collapsed.IsPresent
            # key = $Key
            content = $Content.Invoke()
            style = $Style
        }
        $AntdMenu.PSTypeNames.Insert(0, "universaldashboard.antd.menu") | Out-Null
        $AntdMenu
    }
}
