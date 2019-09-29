function New-UDAntdDrawer {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$Closable,
        [Parameter()]
        [switch]$DestroyOnClose,
        [Parameter()]
        [switch]$Mask,
        [Parameter()]
        [switch]$MaskClosable,
        [Parameter()]
        [hashtable]$MaskStyle,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [hashtable]$BodyStyle,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$Visible,
        [Parameter()]
        [int]$Width = 640,
        [Parameter()]
        [int]$Height,
        [Parameter()]
        [int]$ZIndex,
        [Parameter()]
        [string]$Level,
        [Parameter()]
        [ValidateSet('top' , 'right' , 'bottom' , 'left')]
        [string]$Placement,
        [Parameter()]
        [scriptblock]$OnClose,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$Push,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [switch]$AutoRefresh
    )

    End {
        
        if ($IsEndpoint.IsPresent) {
            if ($Content -is [scriptblock]) {
                $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }

        if ($null -ne $OnClose) {
            if ($OnClose -is [scriptblock]) {
                $OnCloseEndpoint = New-UDEndpoint -Endpoint $OnClose -Id ($Id + "onClose")
            }
            elseif ($OnClose -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClose must be a script block or UDEndpoint"
            }
        }

        @{
            assetId         = $AssetId
            isPlugin        = $true
            type            = "ud-antd-drawer"
            id              = $Id
            className       = $ClassName
            # closable        = $closable.IsPresent
            # mask            = $mask
            maskStyle       = $maskStyle
            style           = $style
            bodyStyle       = $bodyStyle
            title           = $title
            visible         = $visible.IsPresent
            push            = $Push.IsPresent
            width           = $width
            # height          = $height
            placement       = $placement
            level           = $Level
            content         = $Content.Invoke()
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
    }
}