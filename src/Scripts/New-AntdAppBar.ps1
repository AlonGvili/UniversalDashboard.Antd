function New-UDAntdAppBar {
    [CmdletBinding()]
    [OutputType('UDAntd.AppBar')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$Visible

    )
    End {
        $UDAntdAppBar = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-appbar"
            id       = $Id
            content = $Content.Invoke()
            visible = $Visible.IsPresent
        }
        $UDAntdAppBar.PSTypeNames.Insert(0, 'UDAntd.AppBar')
        $UDAntdAppBar
        
    }
        
}


