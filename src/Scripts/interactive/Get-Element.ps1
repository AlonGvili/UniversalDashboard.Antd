function Get-UDElement 
{
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
		[string]$Id
    )

    $requestId = ''

    $requestId = [Guid]::NewGuid().ToString()

    $Data = @{
        requestId = $requestId 
        componentId = $Id
    }


    $DashboardHub.SendWebSocketMessage("requestState", $ConnectionId, $Data)
    $retry = 0
    while($retry -lt 10) {
        if (-not $stateRequestService.TryGet($requestId, [out]$value)) {
            $stateRequestService.EventAvailable.WaitOne(100)
            $retry++;
            continue;
        }

        $Value
        break;
    }
    
}
