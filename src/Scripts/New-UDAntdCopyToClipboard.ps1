<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdCopyToClipboard {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [switch]$Ghost,
        [Parameter()]
        [ValidateSet("button", "submit", "reset")]
        [string]$HtmlType,
        [Parameter()]
        [string]$Icon,
        [Parameter()]
        [switch]$Loading,
        [Parameter()]
        [ValidateSet("circle", "round")]
        [string]$Shape,
        [Parameter()]
        [ValidateSet("small", "large")]
        [string]$Size,
        [Parameter()]
        [ValidateSet("primary", "ghost", "dashed", "danger", "link")]
        [string]$ButtonType,
        [Parameter()]
        [switch]$FullWidth,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [string]$TextToCopy
    )

    End {

        # if ($null -ne $OnClick) {
        #     if ($OnClick -is [scriptblock]) {
        #         $OnClick = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "onClick")
        #     }
        #     elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
        #         throw "OnClick must be a script block or UDEndpoint"
        #     }
        # }

        @{
            assetId    = $AssetId 
            isPlugin   = $true 
            type       = "ud-antd-copy-button"
            id         = $Id
            className  = $ClassName
            disabled   = $Disabled.IsPresent
            ghost      = $Ghost.IsPresent
            htmlType   = $HtmlType
            icon       = $Icon
            shape      = $Shape
            size       = $Size
            buttonType = $ButtonType
            block      = $FullWidth.IsPresent
            label      = $Label
            textToCopy = $TextToCopy
            style      = $Style
        }

    }
}