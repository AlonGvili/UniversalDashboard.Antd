<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Title
Parameter description

.PARAMETER OnFinish
Parameter description

.PARAMETER Prefix
Parameter description

.PARAMETER Suffix
Parameter description

.PARAMETER Format
Parameter description

.PARAMETER ValueStyle
Parameter description

.PARAMETER Value
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdCountdown {
    [CmdletBinding()]
    [OutputType("Ant.Design.Countdown")]
    param(
        [Parameter( HelpMessage = "Id for the component")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter( HelpMessage = "Display title")]
        [string]$Title,
        [Parameter( HelpMessage = "Trigger when time's up")]
        [scriptblock]$OnFinish,
        [Parameter( HelpMessage = "prefix node of value")]
        [object]$Prefix,
        [Parameter( HelpMessage = "suffix node of value")]
        [object]$Suffix,
        [Parameter( HelpMessage = "Format as moment")]
        [string]$Format = 'HH:mm:ss',
        [Parameter( HelpMessage = "Set value css style")]
        [hashtable]$ValueStyle,
        [Parameter( HelpMessage = "Set target countdown time, the value must return an UNIX Epoch time in Milliseconds")]
        [object]$Value
    )

    End {

        if ($null -ne $OnFinish) {
            if ($OnFinish -is [scriptblock]) {
                $OnFinish = New-UDEndpoint -Endpoint $OnFinish -Id ($Id + "onFinish")
            }
            elseif ($OnFinish -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnFinish must be a script block or UDEndpoint"
            }
        }

        $AntdCountdown = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-countdown"
            id          = $Id
            prefix      = $Prefix
            suffix      = $Suffix
            title       = $Title
            value       = $Value
            format      = $Format
            valueStyle  = $ValueStyle
            hasCallback = $null -ne $OnFinish
        }
        $AntdCountdown.PSTypenames.Insert(0, "Ant.Design.Countdown")
        $AntdCountdown
    }
}
