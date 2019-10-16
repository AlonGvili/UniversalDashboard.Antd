function New-UDAntdInput {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [switch]$AllowClear,
        [Parameter()]
        [ValidateSet("default","small","large")]
        [string]$size,
        [Parameter()]
        [object]$Suffix,
        [Parameter()]
        [object]$Prefix,
        [Parameter()]
        [object]$AddonBefore,
        [Parameter()]
        [object]$AddonAfter,
        [Parameter()]
        [scriptblock]$onChange,
        [Parameter()]
        [scriptblock]$OnPressEnter,
        [Parameter()]
        [string]$PlaceHolder,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($null -ne $OnPressEnter) {
            if ($OnPressEnter -is [scriptblock]) {
                $OnPressEnterEndpoint = New-UDEndpoint -Endpoint $OnPressEnter -Id $Id  
            }
            elseif ($OnPressEnter -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnPressEnter must be a script block or UDEndpoint"
            }
        }

        if ($null -ne $onChange) {
            if ($onChange -is [scriptblock]) {
                $onChangeEndpoint = New-UDEndpoint -Endpoint $onChange -Id ($Id + "onChange")
            }
            elseif ($onChange -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-input"
            id = $Id
            className = $ClassName
            disabled = $Disabled.IsPresent
            allowClear = $AllowClear.IsPresent
            size = $Size
            hasCallback = $null -ne $OnPressEnter
            hasOnChangeCallback = $null -ne $onChange
            prefix = $Prefix
            suffix = $Suffix
            addonBefore = $AddonBefore
            addonAfter = $AddonAfter
            placeholder = $PlaceHolder
            style = $Style
        }

    }
}
