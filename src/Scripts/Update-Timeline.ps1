function Update-UDAntdTimeline {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$TimelineId,
        [Parameter(Mandatory)]
        [hashtable]$Properties,
        [Parameter()]
        [Switch]$Broadcast
    )

    End {
        $Data = @{
            timelineId = $TimelineId
            props     = $Properties
        }
        if ($Broadcast) {
            $DashboardHub.SendWebSocketMessage("updateTimeline", $Data)
        }
        else {
            $DashboardHub.SendWebSocketMessage($ConnectionId, "updateTimeline", $Data)
        }    
    }
}