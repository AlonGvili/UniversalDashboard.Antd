function New-UDAntdInputPassword {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [scriptblock]$OnPressEnter,
        [Parameter()]
        [string]$PlaceHolder,
        [Parameter()]
        [string]$Pattern,
        [Parameter()]
        [switch]$VisibilityToggle,
        [Parameter()]
        [switch]$Required ,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($null -ne $OnPressEnter) {
            if ($OnPressEnter -is [scriptblock]) {
                $OnPressEnterEndpoint = New-UDEndpoint -Endpoint $OnPressEnter -Id ($Id + "onPressEnter")
            }
            elseif ($OnPressEnter -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnPressEnter must be a script block or UDEndpoint"
            }
        }

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-input-password"
            id = $Id
            className = $ClassName
            disabled = $Disabled.IsPresent
            visibilityToggle = $VisibilityToggle.IsPresent
            pattern = $Pattern
            placeholder = $PlaceHolder
            required = $Required.IsPresent
            style = $Style
        }

    }
}
