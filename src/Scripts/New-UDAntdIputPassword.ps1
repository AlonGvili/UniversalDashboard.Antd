function New-UDAntdInputPassword {
    [CmdletBinding()]
    [OutputType("Ant.Design.Input.Password")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [scriptblock]$OnPressEnter,
        [Parameter()]
        [string]$PlaceHolder,
        [Parameter()]
        [object]$Suffix,
        [Parameter()]
        [object]$Prefix,
        [Parameter()]
        [object]$AddonBefore,
        [Parameter()]
        [object]$AddonAfter,
        [Parameter()]
        [string]$Pattern
    )

    End {
        $AntdInputPassword = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-input-password"
            id          = $Id
            disabled    = $Disabled.IsPresent
            prefix      = $Prefix
            suffix      = $Suffix
            addonBefore = $AddonBefore
            addonAfter  = $AddonAfter
            placeholder = $PlaceHolder
        }

        if ($PSBoundParameters.ContainsKey("Pattern")) {
               $AntdInputPassword.Add("pattern",$Pattern)
        }
        $AntdInputPassword.PSTypeNames.Insert(0, "Ant.Design.Input.Password") | Out-Null
        $AntdInputPassword
    }
}
