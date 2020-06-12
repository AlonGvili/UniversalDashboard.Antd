function Clear-UDAntdTimeline {
    param(
        [Parameter(Mandatory)]
        [string]$TimelineId,
        [Parameter()]
        [Switch]$Broadcast
    )

    # $NewContent = & $Content

    $Data = @{
        timelineId = $TimelineId
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("clearTimeline", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "clearTimeline", $Data)
    }    
}