function New-UDAntdChartTrend {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [ValidateSet("up", "down")]
        [string]$Flag,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [switch]$Colorful,
        [Parameter()]
        [switch]$ReverseColor,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [object]$Content
    )
    End {

        # $EndpointChartTrend = New-UDEndpoint -Id $Id -Endpoint $Content 

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-chart-trend"
            id              = $Id
            content         = $Content
            reverseColor    = $ReverseColor.IsPresent
            colorful        = $Colorful.IsPresent
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
    }
}