<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> New-UDAntdCarousel
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdCarousel {
    [CmdletBinding()]
    [OutputType("Ant.Design.Carousel")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet('top', 'bottom', 'left', 'right')]
        [string]$DotPosition,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$Autoplay,
        [Parameter()]
        [switch]$Dots,
        [Parameter()]
        [scriptblock]$AfterChange,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )

    End {

        if ($null -ne $Content) {
            $CarouselContentEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id   
        }

        if ( $null -ne $AfterChange) {
            $CarouselAfterChangeEndpoint = New-UDEndpoint -Endpoint $AfterChange -Id ( $Id + "afterChange")
        }

        $AntdCarousel = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-carousel"
            id              = $Id
            dotPosition     = $DotPosition
            dots            = $Dots.IsPresent
            autoplay        = $Autoplay.IsPresent
            style           = $Style
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            hasCallback = $null -ne $AfterChange
        }
        $AntdCarousel.PSTypeNames.Insert(0, "Ant.Design.Carousel")
        $AntdCarousel
    }
}
