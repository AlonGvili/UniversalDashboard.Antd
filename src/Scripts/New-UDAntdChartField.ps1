function New-UDAntdChartField {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [object]$Label,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [scriptblock]$Content
    )
    End {

        $EndpointChartField = New-UDEndpoint -Id $Id -Endpoint $Content 

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-chart-field"
            id              = $Id
            content           = $Content.Invoke()
            label           = $Label
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
    }
}