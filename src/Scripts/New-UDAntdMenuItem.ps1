function New-UDAntdMenuItem {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$Key,
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter(Mandatory)]
        [object]$OnClick,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        if ($null -ne $OnClick) {
            if ($OnClick -is [scriptblock]) {
                $OnClickEvent = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "onClick")
            }
            elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        if($null -eq $Key){
            $Key = $Id
        }
        
        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-menu-item"
            id = $Id
            className = $ClassName
            disabled = $Disabled.IsPresent
            title = $Title
            key = $key
            icon = $Icon
            style = $Style
            # content = $Content.Invoke()
        }

    }
}
