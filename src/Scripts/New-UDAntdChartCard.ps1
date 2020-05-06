function New-UDAntdChartCard {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [object]$Action,
        [Parameter()]
        [object]$Total,
        [Parameter()]
        [int]$ContentHeight,
        [Parameter()]
        [object]$Footer,
        [Parameter()]
        [object]$Avatar,
        [Parameter()]
        [switch]$Bordered,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [object]$Content
    )
    End {

        $endpointChart = New-UDEndpoint -Id $Id -Endpoint $Content 
        # New-UDEndpoint -Id ("$($Id)-total") -Endpoint $Total | Out-Null

        @{
            assetId       = $AssetId 
            isPlugin      = $true 
            type          = "ud-antd-chart-card"
            id            = $Id
            title         = $Title
            action        = $Action
            contentHeight = $ContentHeight
            total         = $Total
            bordered       = $Bordered.IsPresent
            footer        = $Footer
            avatar        = $Avatar
            autoRefresh = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
    }
}