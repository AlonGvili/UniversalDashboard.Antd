<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Status
Parameter description

.PARAMETER Text
Parameter description

.PARAMETER OverflowCount
Parameter description

.PARAMETER Count
Parameter description

.PARAMETER Style
Parameter description

.PARAMETER ShowZero
Parameter description

.PARAMETER Dot
Parameter description

.PARAMETER PresetColor
Parameter description

.PARAMETER Id
Parameter description

.PARAMETER OffSet
Parameter description

.PARAMETER Content
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdBadge {
    [CmdletBinding()]
    [OutputType('Ant.Design.Badge')]
    param(
        [Parameter()]
        [ValidateSet('success', 'processing', 'default', 'error', 'warning')]
        [string]$Status = "default",
        [Parameter()]
        [string]$Text,  
        [Parameter()]
        [int]$OverflowCount = 9999,
        [Parameter()]
        [object]$Count = 0,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [switch]$ShowZero,
        [Parameter()]
        [switch]$Dot,
        [Parameter()]
        [ValidateSet('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime')]
        [string]$PresetColor,  
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [int[]]$OffSet,
        [Parameter()]
        [object]$Content
    )

    End {
            
        $UDAntdBadge = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-badge"
            id       = $Id
            content  = $Content
            offset   = $Offset
        }
    
        if ($PSBoundParameters.ContainsKey("Count") -and $PSBoundParameters.ContainsKey("Content")) {
            $UDAntdBadge.Add("count", $Count)
            $UDAntdBadge.Add("style", $Style)
            $UDAntdBadge.Add("showZero", $ShowZero.IsPresent)
            $UDAntdBadge.Add("overflowCount", $OverflowCount)
        }
        if ($PSBoundParameters.ContainsKey("Status")) {
            $UDAntdBadge.Remove("Content") 
            $UDAntdBadge.Add("text", $Text)
            $UDAntdBadge.Add("status", $Status)
        }
        if ($PSBoundParameters.ContainsKey("Text") -and $PSBoundParameters.ContainsKey("PresetColor")) {
            $UDAntdBadge.Remove("Content") 
            $UDAntdBadge.Add("text", $Text)
            $UDAntdBadge.Add("color", $PresetColor)
        }
        if ($PSBoundParameters.ContainsKey("Text") -and $PSBoundParameters.ContainsKey("Color")) {
            $UDAntdBadge.Remove("Content") 
            $UDAntdBadge.Add("text", $Text)
            $UDAntdBadge.Add("color", $Color)
        }
        if ($PSBoundParameters.ContainsKey("Content") -and $PSBoundParameters.ContainsKey("Dot")) {
            $UDAntdBadge.Add("dot", $Dot.IsPresent)
            $UDAntdBadge.Add("count", $Count)
        }
        if ($PSBoundParameters.ContainsKey("Content") -and $PSBoundParameters.ContainsKey("PresetColor")) {
            $UDAntdBadge.Add("color", $PresetColor)
        }
        if ($PSBoundParameters.ContainsKey("Count") -and (-not($PSBoundParameters.ContainsKey("Content")))) {
            $UDAntdBadge.Add("count", $Count)
            $UDAntdBadge.Add("style", $Style)
            $UDAntdBadge.Remove("Content")
        }

        $UDAntdBadge.PSTypeNames.Insert(0, 'Ant.Design.Badge')
        $UDAntdBadge
    }
}
