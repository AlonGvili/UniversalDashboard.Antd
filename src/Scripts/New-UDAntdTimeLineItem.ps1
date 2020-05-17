<#
.SYNOPSIS
    Short description
.DESCRIPTION
    Long description
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Ant.Design.Timeline.Item
.NOTES
    The examples for this command are in New-UDAntdTimeLine command
#>
function New-UDAntdTimeLineItem {
    [CmdletBinding()]
    [OutputType("Ant.Design.Timeline.Item")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [object]$Dot,
        [Parameter()]
        [ValidateSet("left", "right")]
        [string]$Position,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [object]$Label

    )

    End {

        if ($null -ne $OnClick) {
            if ($OnClick -is [scriptblock]) {
                $OnClick = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "onClick")
            }
            elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        $TimelineItem = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-timeline-item"
            id        = $Id
            className = $ClassName
            content   = $Content.Invoke()
            color     = $Color
            dot       = $Dot
            label     = $Label
            position  = $Position
            style     = $Style
        }
        $TimelineItem.PSTypenames.Insert(0, "Ant.Design.Timeline.Item")
        $TimelineItem
    }
}
