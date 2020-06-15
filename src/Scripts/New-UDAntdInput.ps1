function New-UDAntdInput {
    [CmdletBinding()]
    [OutputType('Ant.Design.Input')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [switch]$AllowClear,
        [Parameter()]
        [ValidateSet("default", "small", "large")]
        [string]$size = "default",
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
        $AntdInput = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-input"
            disabled    = $Disabled.IsPresent
            allowClear  = $AllowClear.IsPresent
            size        = $Size
            prefix      = $Prefix
            suffix      = $Suffix
            addonBefore = $AddonBefore
            addonAfter  = $AddonAfter
            placeholder = $PlaceHolder
            style       = $Style
        }
        $AntdInput.PSTypeNames.Insert(0, 'Ant.Design.Input')
        $AntdInput
    }
}
