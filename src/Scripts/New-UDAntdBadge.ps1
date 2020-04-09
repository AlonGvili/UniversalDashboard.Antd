
function New-UDAntdBadge {
    [CmdletBinding()]
    [OutputType('UDAntd.Badge')]
    param(
        [Parameter()]
        [ValidateSet('success', 'processing', 'default', 'error', 'warning')]
        [string]$Status,
        [Parameter()]
        [string]$Text,  
        [Parameter()]
        [int]$OverflowCount = 9999,
        [Parameter()]
        [object]$Count,
        [Parameter()]
        [string]$Variant,
        [Parameter()]
        [switch]$ShowZero,
        [Parameter()]
        [switch]$Dot,
        [Parameter()]
        [ValidateSet('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime')]
        [string]$PresetColor,  
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [int[]]$OffSet,
        [Parameter()]
        [object]$Content
    )

    End {
            
        $UDAntdBadge = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-badge"
            id               = $Id
            # className        = $ClassName
            # offset           = $OffSet
            # showZero         = $ShowZero.IsPresent
            dot              = $Dot.IsPresent
            # overflowCount    = $OverflowCount
            # count            = $Count
            # status           = $Status
            color            = $PresetColor
            # variant            = $Variant
            # title            = $Title
            text             = $Text   
            content          = $Content
        }
        $UDAntdBadge.PSTypeNames.Insert(0, 'UDAntd.Badge')
        $UDAntdBadge

    }
}
