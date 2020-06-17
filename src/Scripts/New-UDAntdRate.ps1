function New-UDAntdRate {
    [CmdletBinding()]
    [OutputType('Ant.Design.Rate')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string[]]$Tooltips = @('terrible', 'bad', 'normal', 'good', 'wonderful'),
        [Parameter()]
        [switch]$AllowClear,
        [Parameter()]
        [switch]$AllowHalf,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [object]$Character,
        [Parameter()]
        [int]$Count = 5,
        [Parameter()]
        [int]$DefaultValue,
        [Parameter()]
        [hashtable]$Style
    )
    End {

        if ($Null -ne $OnChange) {
            New-UDEndpoint -Endpoint $OnChange -Id ( $Id + "OnChange" ) | Out-Null
        }

        if ($Null -ne $OnHoverChange) {
            New-UDEndpoint -Endpoint $OnHoverChange -Id ( $Id + "OnHoverChange  " ) | Out-Null
        }

        $UDAntdRate = @{
            assetId      = $AssetId 
            isPlugin     = $true 
            type         = "ud-antd-rate"
            id           = $Id
            allowClear   = $AllowClear.IsPresent
            allowHalf    = $AllowHalf.IsPresent
            character    = $Character
            count        = $Count
            defaultValue = $DefaultValue
            disabled     = $Disabled.IsPresent
            tooltips     = $Tooltips
            style        = $Style
        }
        $UDAntdRate.PSTypeNames.Insert(0, 'Ant.Design.Rate')
        $UDAntdRate
    }
}