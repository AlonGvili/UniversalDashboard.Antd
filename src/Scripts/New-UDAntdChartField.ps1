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

        if($null -ne $Content){
            New-UDEndpoint -Id $Id -Endpoint $Content | out-null
            $EndpointChartField = $Content.Invoke() 
        }

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-chart-field"
            id              = $Id
            content           = $EndpointChartField 
            label           = $Label
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
    }
}