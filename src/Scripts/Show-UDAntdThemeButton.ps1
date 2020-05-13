
function Show-UDAntdThemeButton {
    [CmdletBinding()]
    [OutputType('Ant.Design.ThemeButton')]
    param()
    End {
        $UDAntdThemeButton = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-theme-button"
        }
        $UDAntdThemeButton.PSTypeNames.Insert(0, 'Ant.Design.ThemeButton')
        $UDAntdThemeButton
    }
}
