function New-UDAntdToggleColorMode {
    param(
        [Parameter()]
        [ValidateSet("default", "dark", "compact")]
        [string]$ColorMode
    )

    End {

        @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-toggle-color-mode"
            colorMode = $ColorMode
        }

    }
}
