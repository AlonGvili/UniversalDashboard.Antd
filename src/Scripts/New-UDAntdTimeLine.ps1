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
function New-UDAntdTimeLine {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$Reverse,
        [Parameter(Mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [ValidateSet("left", "alternate", "right")]
        [string]$Mode,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($IsEndpoint.IsPresent -and $null -ne $Content) {
            New-UDEndpoint -Endpoint $Content -Id $Id  | Out-Null
        }
        

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-timeline"
            id              = $Id
            isEndpoint      = $IsEndpoint.IsPresent
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            mode            = $Mode
            content         = $Content.Invoke()
            reverse         = $Reverse
            style           = $Style
        }

    }
}
