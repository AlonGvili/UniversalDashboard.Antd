
function New-UDAntdRadio {
    param(
        [Parameter ()]
        [scriptblock]$Content,
        [Parameter ()]
        [string]$Value,
        [Parameter()]
        [switch]$DefaultChecked,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName

    )

    End {
        @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-radio"
            id        = $Id
            disabled  = $Disabled.IsPresent
            content   = $Content.Invoke()
            value     = $Value
        }

    }
}