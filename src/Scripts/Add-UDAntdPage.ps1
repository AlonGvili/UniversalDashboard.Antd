class AntdPage {
    [string]$Name
    [Alias("Endpoint")]
    [scriptblock]$Content
    [string]$Url
    [bool]$DefaultHomePage
    [string]$Title
    [bool]$Blank
    [string]$Id = [Guid]::NewGuid().ToString()
    [ScriptBlock]$OnLoading
    [object]$Icon
}

function Add-UDAntdPage {
    param(
        [Parameter()]
        [AntdPage]$Page,
        [Parameter()]
        [Switch]$Broadcast
    )

    New-UDEndpoint -Endpoint $Page.Content -Id $Id | Out-Null 

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("addPage", $Page)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "addPage", $Page)
    }    
}