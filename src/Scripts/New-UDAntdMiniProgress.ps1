function New-UDAntdChartMiniProgress {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [int]$Percent,
        [Parameter()]
        [int]$StrokeWidth,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [int]$Target,
        [Parameter()]
        [string]$TargetLabel
    )
    End {
        @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-chart-mini-progress"
            id          = $Id
            percent     = $Percent
            strokeWidth = $StrokeWidth
            color       = $Color
            target      = $Target
            targetLabel = $TargetLabel
        }
    }
}