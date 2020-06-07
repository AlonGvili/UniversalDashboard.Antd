function New-UDAntdMenuItem {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$Key,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [string]$Text,
        [Parameter()]
        [object]$OnClick,
        [Parameter()]
        [int]$InlineIndent,
        [Parameter()]
        [string]$To,
        [Parameter()]
        [object]$Content
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

        if ($null -eq $Key) {
            $Key = $Id
        }
        
        @{
            assetId      = $AssetId 
            isPlugin     = $true 
            type         = "ud-antd-menu-item"
            id           = $Id
            style        = $Style
            disabled     = $Disabled.IsPresent
            title        = $Title
            key          = $key
            icon         = $Icon
            inlineIndent = $InlineIndent
            to           = $To
            text         = $Text
            content      = $Content
        }

    }
}
