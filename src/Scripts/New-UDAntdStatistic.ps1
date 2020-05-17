<#
.SYNOPSIS
    Statistic component for universal dashboard
.DESCRIPTION
    This statistic component usefull when you want to display statistic data with description
.EXAMPLE
    PS C:\> 
    Explanation of what the example does
.OUTPUTS
    Ant.Design.Countdown
.NOTES
    
#>
function New-UDAntdStatistic {
    [CmdletBinding()]
    [OutputType("Ant.Design.Statistic")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$DecimalSeparator,
        [Parameter()]
        [string]$GroupSeparator,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [int]$Precision,
        [Parameter()]
        [object]$Suffix,
        [Parameter()]
        [object]$Prefix,
        [Parameter()]
        [hashtable]$ValueStyle,
        [Parameter()]
        [scriptblock]$Value,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )

    End {

        if ($null -ne $Value) {
            $StatsEndpoint = New-UDEndpoint -Endpoint $Value -Id $id
        }

        $AntdStatistic = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-statistic"
            id               = $Id
            prefix           = $Prefix
            suffix           = $Suffix
            title            = $Title
            valueStyle       = $ValueStyle
            decimalSeparator = $DecimalSeparator
            groupSeparator   = $GroupSeparator
            autoRefresh      = $AutoRefresh.IsPresent
            refreshInterval  = $RefreshInterval
        }
        $AntdStatistic.PSTypenames.Insert(0, "Ant.Design.Statistic")
        $AntdStatistic
    }
}
