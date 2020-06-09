<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Color
Parameter description

.PARAMETER Content
Parameter description

.PARAMETER Dot
Parameter description

.PARAMETER Position
Parameter description

.PARAMETER Style
Parameter description

.PARAMETER Label
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdTimeLineItem {
    [CmdletBinding()]
    [OutputType("Ant.Design.Timeline.Item")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Color = "blue",
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
        $TimelineItem = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-timeline-item"
            id       = $Id
            content  = $Content.Invoke()
            color    = $Color
            dot      = $Dot
            label    = $Label
            position = $Position
            style    = $Style
        }
        $TimelineItem.PSTypenames.Insert(0, "Ant.Design.Timeline.Item")
        $TimelineItem
    }
}
