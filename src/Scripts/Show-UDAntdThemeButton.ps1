
function Show-UDAntdThemeButton {
    [CmdletBinding()]
    [OutputType('UDAntd.ThemeButton')]
    param()
    End {
        $UDAntdThemeButton = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-theme-button"
        }
        $UDAntdThemeButton.PSTypeNames.Insert(0, 'UDAntd.ThemeButton')
        $UDAntdThemeButton
    }
}
