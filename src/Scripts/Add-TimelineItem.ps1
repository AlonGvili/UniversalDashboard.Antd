function Add-UDAntdTimelineItem {
    param(
        [Parameter(Mandatory)]
        [string]$TimelineId,
        [Parameter(Mandatory)]
        [object]$Item,
        [Parameter()]
        [Switch]$Broadcast
    )

    # $NewContent = & $Content

    $Data = @{
        timelineId = $TimelineId
        item       = $Item
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("addTimelineItem", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "addTimelineItem", $Data)
    }    
}