
function New-UDAntdTypography {
    [CmdletBinding(DefaultParameterSetName = 'Text')]
    [OutputType('UDAntd.Typography')]
    param(
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [string]$ClassName,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [object[]]$Code,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [object]$Copyable,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Delete,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Disabled,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Editable,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Ellipsis,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Mark,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Underline,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [scriptblock]$OnChange,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Strong,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [ValidateSet('secondary', 'warning', 'danger')]
        [string]$Variant,
        [Parameter(ParameterSetName = 'Title')]
        [ValidateSet('1', '2', '3', '4')]
        [string]$Level,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$IsEndpoint,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$AutoRefresh,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [int]$RefreshInterval = 5000
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

        $UDAntdTypography = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-typography"
            id              = $Id
            className       = $ClassName
            actions         = $Actions
            extra           = $Extra
            hoverable       = $Hoverable.IsPresent
            content         = $CardContent  
            bordered        = $Bordered.IsPresent
            cover           = $Cover
            size            = $Size
            title           = $Title
            style           = $Style
            headStyle       = $HeadStyle
            bodyStyle       = $BodyStyle
            variant         = $Variant
            isEndpoint      = $IsEndpoint.IsPresent
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
        $UDAntdTypography.PSTypeNames.Insert(0, 'UDAntd.Typography')
        $UDAntdTypography
    }
}

