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
        [Parameter()]
        [string[]]$DefaultOpenKeys,
        [Parameter()]
        [string]$DefaultSelectedKeys,
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
            defaultOpenKeys      = $DefaultOpenKeys
            defaultSelectedKeys  = $DefaultSelectedKeys
            # inlineCollapsed = $Collapsed.IsPresent
            # key = $Key
            content = $Content.Invoke()
            style = $Style
        }
        $AntdMenu.PSTypeNames.Insert(0, "universaldashboard.antd.menu") | Out-Null
        $AntdMenu
    }
}
