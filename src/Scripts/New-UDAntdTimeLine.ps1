<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Reverse
Parameter description

.PARAMETER Pending
Parameter description

.PARAMETER AutoRefresh
Parameter description

.PARAMETER RefreshInterval
Parameter description

.PARAMETER Mode
Parameter description

.PARAMETER Style
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdTimeLine {
    [CmdletBinding()]
    [OutputType("Ant.Design.Timeline")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [switch]$Reverse,
        [Parameter()]
        [object]$Pending,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [ValidateSet("left", "alternate", "right")]
        [string]$Mode = "left",
        [Parameter()]
        [hashtable]$Style
    )
    End {
        $AntdTimeline = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-timeline"
            id       = $Id
            mode     = $Mode
            reverse  = $Reverse.IsPresent
            style    = $Style
        }
        
        if ($PSBoundParameters.ContainsKey("Pending")) {
            $AntdTimeline.Add("pending", $Pending)
        }

        if ($PSBoundParameters.ContainsKey("AutoRefresh")) {
            $AntdTimeline.Add("autoRefresh", $AutoRefresh.IsPresent)
            $AntdTimeline.Add("refreshInterval", $RefreshInterval)
        }

        $AntdTimeline.PSTypeNames.Insert(0, "Ant.Design.Timeline")
        $AntdTimeline
    }
}
