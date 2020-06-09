<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER TimelineId
Parameter description

.PARAMETER ItemId
Parameter description

.PARAMETER Broadcast
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function Remove-UDAntdTimelineItem {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$TimelineId,
        [Parameter(Mandatory)]
        [string]$ItemId,
        [Parameter()]
        [Switch]$Broadcast
    )

    End {
        $Data = @{
            timelineId = $TimelineId
            itemId     = $ItemId
        }
        if ($Broadcast) {
            $DashboardHub.SendWebSocketMessage("removeTimelineItem", $Data)
        }
        else {
            $DashboardHub.SendWebSocketMessage($ConnectionId, "removeTimelineItem", $Data)
        }    
    }
}