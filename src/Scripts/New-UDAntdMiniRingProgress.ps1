function New-UDAntdMiniRingProgress {
    [CmdletBinding()]
    [OutputType("Ant.Design.Chart#MiniRingProgress")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [int]$Percent = 0,
        [Parameter()]
        [int]$Width = 100,
        [Parameter()]
        [string[]]$Color = @("#30BF78", "#E8EDF3"),
        [Parameter()]
        [int]$Height = 100
    )
    End {
        $MiniRingProgress = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-chart-mini-ring-progress"
            id       = $Id
            percent  = $Percent / 100.0
            width    = $Width
            color    = $Color
            height   = $Height
        }
        $MiniRingProgress.PSTypeNames.Insert(0, "Ant.Design.Chart#MiniRingProgress")
        $MiniRingProgress
    }
}