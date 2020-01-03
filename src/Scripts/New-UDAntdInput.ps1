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
        [string]$PlaceHolder,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-input"
            id = $Id
            className = $ClassName
            disabled = $Disabled.IsPresent
            allowClear = $AllowClear.IsPresent
            size = $Size
            prefix = $Prefix
            suffix = $Suffix
            addonBefore = $AddonBefore
            addonAfter = $AddonAfter
            placeholder = $PlaceHolder
            style = $Style
        }

    }
}
