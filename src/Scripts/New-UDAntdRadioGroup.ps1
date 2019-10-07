
function New-UDAntdRadioGroup {
    param(
        [Parameter ()]
        [scriptblock]$Content,
        [Parameter ()]
        [object]$OnChange,
        [Parameter ()]
        [string]$Value,
        [Parameter ()]
        [string]$Name,
        [Parameter ()]
        [string]$DefaultValue,
        [Parameter ()]
        [ValidateSet("large", "default", "small")]
        [string]$Size,
        [Parameter ()]
        [ValidateSet("outline", "solid")]
        [string]$ButtonStyle,
        [Parameter()]
        [switch]$Checked,
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
        if ($null -ne $onChange) {
            if ($onChange -is [scriptblock]) {
                $onChange = New-UDEndpoint -Endpoint $onChange -Id ($Id + "onChange")
            }
            elseif ($onChange -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        @{
            assetId      = $AssetId 
            isPlugin     = $true 
            type         = "ud-antd-radio-group"
            id           = $Id
            className    = $ClassName
            disabled     = $Disabled.IsPresent
            content      = $Content.Invoke()
            value        = $Value
            style        = $Style
            size         = $Size
            name         = $Name
            buttonStyle  = $ButtonStyle
            defaultValue = $DefaultValue
        }

    }
}