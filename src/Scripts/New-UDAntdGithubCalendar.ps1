<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER UserName
Parameter description

.PARAMETER FullYear
Parameter description

.PARAMETER Years
Parameter description

.PARAMETER Color
Parameter description

.PARAMETER BlockSize
Parameter description

.PARAMETER MarginSize
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdGithubCalendar {
    [CmdletBinding()]
    [OutputType('Ant.Design.Github.Calendar')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(Mandatory)]
        [string]$UserName,
        [Parameter()]
        [switch]$FullYear,
        [Parameter()]
        [int[]]$Years = (Get-Date).Year,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [int]$BlockSize = 12,
        [Parameter()]
        [int]$MarginSize = 2
    )
    End {
        $AntdGithubCalendar = @{
            assetId    = $AssetId 
            isPlugin   = $true 
            type       = "ud-antd-github-calendar"
            id         = $Id
            username   = $UserName
            color      = $Color
            years      = $Years
            blockSize  = $BlockSize
            marginSize = $MarginSize
            fullYear   = $FullYear.IsPresent
        }
        $AntdGithubCalendar.PSTypeNames.Insert(0, 'Ant.Design.Github.Calendar')
        $AntdGithubCalendar
    }
}


