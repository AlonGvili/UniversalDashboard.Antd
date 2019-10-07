
function New-UDAntdRadio {
    param(
        [Parameter ()]
        [scriptblock]$Content,
        # [Parameter ()]
        # [object]$OnClick,
        [Parameter ()]
        [string]$Value,
        [Parameter()]
        [switch]$DefaultChecked,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName

    )

    End {
        # if ($null -ne $OnClick) {
        #     if ($OnClick -is [scriptblock]) {
        #         $OnClick = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "onClick")
        #     }
        #     elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
        #         throw "OnClick must be a script block or UDEndpoint"
        #     }
        # }

        @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-radio"
            id        = $Id
            className = $ClassName
            defaultChecked   = $DefaultChecked.IsPresent
            disabled  = $Disabled.IsPresent
            content   = $Content.Invoke()
            value     = $Value
            style     = $Style
        }

    }
}