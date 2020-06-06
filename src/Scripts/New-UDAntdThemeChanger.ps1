function New-UDAntdThemeChanger {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString()
    )

    End {

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-theme-color-changer"
        }

    }
}
