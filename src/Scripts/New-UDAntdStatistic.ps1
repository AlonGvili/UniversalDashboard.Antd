<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER DecimalSeparator
Parameter description

.PARAMETER GroupSeparator
Parameter description

.PARAMETER Title
Parameter description

.PARAMETER Precision
Parameter description

.PARAMETER Suffix
Parameter description

.PARAMETER Prefix
Parameter description

.PARAMETER ValueStyle
Parameter description

.PARAMETER Value
Parameter description

.PARAMETER AutoRefresh
Parameter description

.PARAMETER RefreshInterval
Parameter description

.EXAMPLE
An example

.NOTES
General notes
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
            New-UDEndpoint -Endpoint $Value -Id $id | Out-Null
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
