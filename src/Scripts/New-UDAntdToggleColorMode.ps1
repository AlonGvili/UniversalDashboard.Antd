function New-UDAntdToggleColorMode {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString()
    )

    End {

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-toggle-color-mode"
        }

    }
}
