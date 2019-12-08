function New-UDAntdStatistic {
    [CmdletBinding(DefaultParameterSetName = "Statistic")]
    [OutputType('UDAntd.Statistic')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "Set target countdown time or Display value")]
        [scriptblock]$Value,
        [Parameter(HelpMessage = "suffix node of value")]
        [object]$Suffix,
        [Parameter(HelpMessage = "Display title")]
        [object]$Title,
        [Parameter(HelpMessage = "prefix node of value")]
        [object]$Prefix,
        [Parameter(HelpMessage = "Is the value scriptblock is register as ud endpoint")]
        [switch]$IsEndpoint,
        [Parameter(HelpMessage = "Do autorefresh the value scriptblock.")]
        [switch]$AutoRefresh,
        [Parameter(HelpMessage = "When in ms to rerun the value scriptblock.")]
        [int]$RefreshInterval = 5000,
        [Parameter(HelpMessage = "precision of input value", ParameterSetName = "Statistic")]
        [int]$Precision,
        [Parameter(HelpMessage = "group separator", ParameterSetName = "Statistic")]
        [string]$GroupSeparator,
        [Parameter(HelpMessage = "decimal separator", ParameterSetName = "Statistic")]
        [string]$DecimalSeparator,
        [Parameter(HelpMessage = "Set the component main css style.")]
        [hashtable]$Style,
        [Parameter(HelpMessage = "Set value css style")]
        [hashtable]$ValueStyle,
        [Parameter(HelpMessage = "Trigger when time's up", ParameterSetName = "Countdown")]
        [scriptblock]$OnFinish,
        [Parameter(HelpMessage = "Format as moment.js link to examples: https://momentjs.com/docs/#/parsing/string-formats/", ParameterSetName = "Countdown")]
        [string]$Format

    )

    End {

        if (($null -ne $Value) -and ($IsEndpoint)) {
            if ($Value -is [scriptblock]) {
                $ValueEndpoint = New-UDEndpoint -Endpoint $Value -Id $Id
            }
            else {
                throw "Value must be a script block or UDEndpoint"
            }
        }


        if ($null -ne $OnFinish) {
            if ($OnFinish -is [scriptblock]) {
                $OnFinishEndpoint = New-UDEndpoint -Endpoint $OnFinish -Id ($Id + "onFinish")
            }
            elseif ($OnFinish -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnFinish must be a script block or UDEndpoint"
            }  
        }

        $UDAntdStatistic = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-statistic"
            id               = $Id
            className        = $ClassName
            style            = $Style
            isEndpoint       = $IsEndpoint.IsPresent
            autoRefresh      = $AutoRefresh.IsPresent
            refreshInterval  = $RefreshInterval
            decimalSeparator = $DecimalSeparator
            groupSeparator   = $GroupSeparator
            precision        = $Precision
            prefix           = $Prefix
            suffix           = $Suffix
            title            = $Title
            content          = $Value.Invoke()
            valueStyle       = $ValueStyle
            format           = $Format
            hasCallback      = $null -ne $OnFinish
            parameterSetName = $PSCmdlet.ParameterSetName
        }
        $UDAntdStatistic.PSTypeNames.Insert(0, 'UDAntd.Statistic')
        $UDAntdStatistic
    }
}
