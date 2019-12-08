
function New-UDAntdBadge {
    [CmdletBinding(DefaultParameterSetName = 'Count')]
    [OutputType('UDAntd.Badge')]
    param(
        [Parameter(ParameterSetName = 'Dot')]
        [ValidateSet('success', 'processing', 'default', 'error', 'warning')]
        [string]$Status,
        [Parameter(ParameterSetName = 'Dot')]
        [string]$Text,  
        [Parameter(ParameterSetName = 'Count')]
        [int]$OverflowCount = 9999,
        [Parameter(ParameterSetName = 'Count')]
        [object]$Count,
        [Parameter(ParameterSetName = 'Count')]
        [hashtable]$Style,
        [Parameter(ParameterSetName = 'Count')]
        [switch]$ShowZero,
        [Parameter(ParameterSetName = 'Dot')]
        [switch]$Dot,
        [Parameter(ParameterSetName = 'Dot')]
        [string]$Color,
        [Parameter(ParameterSetName = 'Dot')]
        [ValidateSet('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime')]
        [string]$PresetColor,  
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter(ParameterSetName = 'Dot')]
        [int[]]$OffSet,
        [Parameter(ParameterSetName = 'Count')]
        [Parameter(ParameterSetName = 'Dot')]
        [object]$Content
    )

    End {

        if ($PSBoundParameters.ContainsKey('Color')) {
            $SelectedColor = $Color
        }
        else {
            $SelectedColor = $PresetColor
        }
            
        $UDAntdBadge = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-badge"
            id               = $Id
            className        = $ClassName
            offset           = $OffSet
            showZero         = $ShowZero.IsPresent
            dot              = $Dot.IsPresent
            overflowCount    = $OverflowCount
            count            = $Count
            status           = $Status
            color            = $SelectedColor
            style            = $Style
            title            = $Title
            text             = $Text   
            content          = $Content
            parameterSetName = $PSCmdlet.ParameterSetName
        }
        $UDAntdBadge.PSTypeNames.Insert(0, 'UDAntd.Badge')
        $UDAntdBadge

    }
}
