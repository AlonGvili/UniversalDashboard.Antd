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
function New-UDAntdDescriptionList {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$Bordered,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [ValidateSet("large","middle","small")]
        [string]$Size,
        [ValidateSet("vertical","horizontal")]
        [string]$Layout = "horizontal",
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($IsEndpoint.IsPresent) {
            if ($Content -is [scriptblock]) {
                $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Sizels.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }
        

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-descriptionlist"
            id = $Id
            className = $ClassName
            isEndpoint = $IsEndpoint
            autoRefresh = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            content = $Content.Invoke()
            style = $Style
            bordered = $Bordered.IsPresent
            size = $Size
            title = $Title
            layout = $Layout
        }

    }
}
