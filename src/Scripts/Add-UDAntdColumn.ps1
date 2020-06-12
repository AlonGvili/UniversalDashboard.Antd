function Add-UDAntdColumn {
    param(
        [Parameter(Mandatory)]
        [string]$RowId,
        [Parameter(Mandatory)]
        [object]$Column,
        [Parameter()]
        [Switch]$Broadcast
    )

    # $NewContent = & $Content

    $Data = @{
        rowId  = $RowId
        column = $Column
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("addColumn", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "addColumn", $Data)
    }    
}