<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER ClassName
Parameter description

.PARAMETER AutoFocus
Parameter description

.PARAMETER Checked
Parameter description

.PARAMETER DefaultChecked
Parameter description

.PARAMETER Disabled
Parameter description

.PARAMETER Loading
Parameter description

.PARAMETER Size
Parameter description

.PARAMETER OnChange
Parameter description

.PARAMETER Style
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdSwitch {
    [CmdletBinding()]
    [OutputType('Ant.Design.Switch')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$AutoFocus,
        [Parameter()]
        [switch]$Checked,
        [Parameter()]
        [switch]$DefaultChecked,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [switch]$Loading,
        [Parameter()]
        [ValidateSet("default", "small", "large")]
        [string]$Size,
        [Parameter()]
        [scriptblock]$OnChange,
        [Parameter()]
        [hashtable]$Style
    )

    End {
        
        if ( $Null -ne $onChange ) {
            New-UDEndpoint -Endpoint $onChange -Id ($Id + "onChange") | Out-Null
        }

        $AntdSwitch = @{
            assetId        = $AssetId 
            isPlugin       = $true 
            type           = "ud-antd-switch"
            id             = $Id
            autoFocus      = $AutoFocus.IsPresent
            checked        = $Checked.IsPresent
            defaultChecked = $DefaultChecked.IsPresent
            disabled       = $Disabled.IsPresent
            loading        = $Loading.IsPresent
            size           = $Size
            style          = $Style
        }
        $AntdSwitch.PSTypeNames.Insert(0, 'Ant.Design.Switch')
        $AntdSwitch
    }
}
