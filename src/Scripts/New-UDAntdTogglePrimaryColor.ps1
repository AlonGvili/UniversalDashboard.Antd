function New-UDAntdTogglePrimaryColor {
    param(
        [Parameter()]
        [string]$PrimaryColor
    )
    End {
        @{
            assetId      = $AssetId 
            isPlugin     = $true 
            type         = "ud-antd-toggle-primary-color"
            primaryColor = $PrimaryColor
        }
    }
}
