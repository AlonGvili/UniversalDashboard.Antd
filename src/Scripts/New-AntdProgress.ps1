<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Type
Parameter description

.PARAMETER Percent
Parameter description

.PARAMETER ShowInfo
Parameter description

.PARAMETER Status
Parameter description

.PARAMETER StrokeLinecap
Parameter description

.PARAMETER StrokeColor
Parameter description

.PARAMETER SuccessPercent
Parameter description

.PARAMETER TrailColor
Parameter description

.PARAMETER AutoRefresh
Parameter description

.PARAMETER RefreshInterval
Parameter description

.PARAMETER Style
Parameter description

.PARAMETER Step
Parameter description

.PARAMETER Width
Parameter description

.PARAMETER StrokeWidth
Parameter description

.PARAMETER GapDegree
Parameter description

.PARAMETER GapPosition
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdProgress {
    [CmdletBinding(DefaultParameterSetName = "Default")]
    [OutputType("Ant.Design.Progress")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet("line", "circle", "dashboard")]
        [string]$Type = "line",
        [Parameter()]
        [scriptblock]$Percent,
        [Parameter()]
        [switch]$ShowInfo,
        [Parameter()]
        [ValidateSet("success", "exception", "active", "normal")]
        [string]$Status,
        [Parameter()]
        [ValidateSet("round", "square")]
        [string]$StrokeLinecap = "round",
        [Parameter()]
        [string]$StrokeColor,
        [Parameter()]
        [int]$SuccessPercent = 0,
        [Parameter()]
        [string]$TrailColor,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [hashtable]$Style,
        [Parameter(ParameterSetName = "Line")]
        [int]$Step,
        [Parameter(ParameterSetName = "Circle")]
        [Parameter(ParameterSetName = "Dashboard")]
        [int]$Width = 132,
        [Parameter(ParameterSetName = "Circle")]
        [Parameter(ParameterSetName = "Dashboard")]
        [int]$StrokeWidth = 6,
        [Parameter(ParameterSetName = "Dashboard")]
        [int]$GapDegree = 75,
        [Parameter(ParameterSetName = "Dashboard")]
        [ValidateSet("top", "bottom", "left", "right")]
        [string]$GapPosition = "bottom"

    )

    End {

        if ($Null -ne $Percent) {
            $PercentEndpoint = New-UDEndpoint -Endpoint $Percent -Id $Id
        }

        $AntdProgress = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-progress"
            id              = $Id
            variant         = $Type
            style           = $Style
            status          = $Status
            strokeLinecap   = $StrokeLinecap
            strokeColor     = $StrokeColor
            successPercent  = $SuccessPercent
            trailColor      = $TrailColor
            showInfo        = $ShowInfo.IsPresent
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }

        if ($PSCmdlet.ParameterSetName -match "Line") {
            $AntdProgress.Add("steps", $Step)
        }
        if ($PSCmdlet.ParameterSetName -match "Circle") {
            $AntdProgress.Add("width", $Width)
            $AntdProgress.Add("strokeWidth", $StrokeWidth)
        }
        if ($PSCmdlet.ParameterSetName -match "Dashboard") {
            $AntdProgress.Add("width", $Width)
            $AntdProgress.Add("strokeWidth", $StrokeWidth)
            $AntdProgress.Add("gapDegree", $GapDegree)
            $AntdProgress.Add("gapPosition", $GapPosition)
        }
        $AntdProgress.PSTypeNames.Insert(0, 'Ant.Design.Progress')
        $AntdProgress
    }
}
