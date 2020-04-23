
function New-UDAntdRadioButton {
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
            assetId        = $AssetId 
            isPlugin       = $true 
            type           = "ud-antd-radio-button"
            id             = $Id
            defaultChecked = $DefaultChecked.IsPresent
            disabled       = $Disabled.IsPresent
            content        = $Content.Invoke()
            value          = $Value
        }
    }
}