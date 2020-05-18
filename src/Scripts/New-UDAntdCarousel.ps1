<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdCarousel {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet('top', 'bottom', 'left', 'right')]
        [string]$DotPosition,

        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$Autoplay,
        [Parameter()]
        [switch]$CenterMode,
        [Parameter()]
        [int]$CenterPadding,
        [Parameter()]
        [switch]$Dots,
        [Parameter()]
        [switch]$Infinite,
        [Parameter()]
        [switch]$Vertical,
        [Parameter()]
        [int]$SlideWidth,
        [Parameter()]
        [int]$SlideHeight,
        [Parameter()]
        [switch]$Arrows,
        [Parameter()]
        [object]$PrevArrow,
        [Parameter()]
        [object]$NextArrow,
        [Parameter()]
        [switch]$AdaptiveHeight,
        [Parameter()]
        [int]$SlidesToShow = 1,
        [Parameter()]
        [int]$SlidesToScroll = 1,
        [Parameter()]
        [int]$Speed = 500,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000

    )

    End {

        if ($null -ne $Content) {
            if ($IsEndpoint) {
                if ($Content -is [scriptblock]) {
                    $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id 
                    $CarouselContent = $Content.Invoke()
                    
                }
                elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Content must be a script block or UDEndpoint"
                }
            }
            else {
                $CarouselContent = $Content.Invoke()
            }
        }

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-carousel"
            id              = $Id
            className       = $ClassName
            speed           = $Speed
            dotPosition     = $DotPosition
            dots            = $Dots.IsPresent
            infinite        = $Infinite.IsPresent
            arrows          = $Arrows.IsPresent
            autoplay        = $Autoplay.IsPresent
            adaptiveHeight  = $AdaptiveHeight.IsPresent
            slidesToShow    = $SlidesToShow
            slidesToScroll  = $SlidesToScroll
            content         = $CarouselContent
            centerMode      = $CenterMode.IsPresent
            centerPadding   = $CenterPadding
            vertical        = $Vertical.IsPresent
            slideWidth      = $SlideWidth
            slideHeight     = $SlideHeight
            prevArrow       = $PrevArrow
            nextArrow       = $NextArrow
            style           = $Style
            isEndpoint      = $IsEndpoint.IsPresent
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }

    }
}
