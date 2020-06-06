function New-UDAntdTogglePrimaryColor {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString()
    )
    End {
        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-toggle-primary-color"
        }
    }
}
