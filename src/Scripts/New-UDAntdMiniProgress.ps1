function New-UDAntdChartMiniProgress {
    [CmdletBinding()]
    [OutputType('Ant.Design.Charts#MiniProgressBar')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [scriptblock]$Value,
        [Parameter()]
        [int]$StrokeWidth,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [int]$Target,
        [Parameter()]
        [string]$TargetLabel,
        [Parameter()]
        [scriptblock]$OnChange,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )
    End {
        
        $ProgressEndpoint = New-UDEndpoint -Endpoint $Value -Id $Id 
        $ProgressOnChangeEndpoint = New-UDEndpoint -Endpoint $OnChange -Id ( $Id + "onChange" )

        $AntdMiniProgressBar = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-chart-mini-progress-bar"
            id              = $Id
            strokeWidth     = $StrokeWidth
            color           = $Color
            target          = $Target
            targetLabel     = $TargetLabel
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
        $AntdMiniProgressBar.PSTypeNames.Insert(0, 'Ant.Design.Charts#MiniProgressBar')
        $AntdMiniProgressBar
    }
}