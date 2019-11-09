
function New-UDAntdCard {
    [CmdletBinding(DefaultParameterSetName = "Default")]
    [OutputType('UDAntd.Card')]
    param(
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [string]$ClassName,
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [object[]]$actions,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [object[]]$Extra,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [object]$Cover,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$Loading,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$Hoverable,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$Bordered,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Grid')]
        [ValidateSet("small", "default")]
        [string]$Size,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [scriptblock]$Content,
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [hashtable]$Style,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [hashtable]$HeadStyle,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [hashtable]$BodyStyle = @{ padding = '0px' },
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [object]$Title,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [ValidateSet('inner')]
        [string]$Variant,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$IsEndpoint,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$AutoRefresh,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Grid')]
        [int]$RefreshInterval = 5000,

        [Parameter(ParameterSetName = 'Meta')]
        [string]$MetaTitle,
        [Parameter(ParameterSetName = 'Meta')]
        [string]$MetaDescription,
        [Parameter(ParameterSetName = 'Meta')]
        [object]$MetaAvatar,

        [Parameter(mandatory, ParameterSetName = 'Tabs')]
        [hashtable[]]$Tabs,
        [Parameter(mandatory , ParameterSetName = 'Tabs')]
        [string]$DefaultActiveKey,
        [Parameter(ParameterSetName = 'Tabs')]
        [object]$TabBarExtraContent,
        [Parameter(ParameterSetName = 'Tabs')]
        [int]$TabBarGutter,
        [Parameter(ParameterSetName = 'Tabs')]
        [ValidateSet("top", "bottom", "left", "right")]
        [string]$TabPosition = "top",
        [Parameter(ParameterSetName = 'Tabs')]
        [hashtable]$TabBarStyle,

        [Parameter(mandatory, ParameterSetName = 'Grid')]
        [hashtable[]]$GridCards
    )

    End {

        if ($null -ne $Content) {
            if ($IsEndpoint) {
                if ($Content -is [scriptblock]) {
                    $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id 
                    $CardContent = $Content.Invoke()
                    $BodyStyle.Clear()
                }
                elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Content must be a script block or UDEndpoint"
                }
            }
            else {
                $CardContent = $Content.Invoke()
            }
        }
        else {
            $CardContent = @()
        }

        $UDAntdCard = @{
            # Mandatory properties
            assetId            = $AssetId 
            isPlugin           = $true 
            type               = "ud-antd-card"
            id                 = $Id
            className          = $ClassName
            style              = $Style

            # Properties for all card variants
            actions            = $Actions
            extra              = $Extra
            hoverable          = $Hoverable.IsPresent
            content            = $CardContent  
            bordered           = $Bordered.IsPresent
            loading            = $Loading.IsPresent
            cover              = $Cover
            size               = $Size
            title              = $Title
            headStyle          = $HeadStyle
            bodyStyle          = $BodyStyle
            variant            = $Variant
            isEndpoint         = $IsEndpoint.IsPresent
            autoRefresh        = $AutoRefresh.IsPresent
            refreshInterval    = $RefreshInterval
            parameterSet       = $PSCmdlet.ParameterSetName

            # Properties for card meta
            metaTitle          = $MetaTitle
            metaDescription    = $MetaDescription
            metaAvatar         = $MetaAvatar

            # Properties for card grid
            gridCards          = $GridCards

            # Properties for card tabs
            tabs               = $Tabs
            tabBarExtraContent = $TabBarExtraContent
            defaultActiveKey   = $DefaultActiveKey

        }
        $UDAntdCard.PSTypeNames.Insert(0, 'UDAntd.Card')
        $UDAntdCard

    }
}

