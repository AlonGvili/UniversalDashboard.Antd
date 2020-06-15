function Add-UDAntdTimelineItem {
    param(
        [Parameter(Mandatory)]
        [string]$TimelineId,
        [Parameter(Mandatory)]
        [object[]]$Items,
        [Parameter()]
        [Switch]$Broadcast
    )

    # $NewContent = & $Content

    $Data = @{
        timelineId = $TimelineId
        items      = $Items
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("addTimelineItem", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "addTimelineItem", $Data)
    }    
}