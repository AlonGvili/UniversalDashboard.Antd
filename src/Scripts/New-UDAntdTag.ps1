<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Closable
Parameter description

.PARAMETER Color
Parameter description

.PARAMETER Status
Parameter description

.PARAMETER WithIcon
Parameter description

.PARAMETER Icon
Parameter description

.PARAMETER Content
Parameter description

.EXAMPLE
New-UDAntdTag -PresetColor blue -Content "Twitter"

.EXAMPLE
New-UDAntdTag -Content "Youtube" -PresetColor red -Icon (
    New-UDAntdIcon -Icon YoutubeOutlined -Size xs
)

.EXAMPLE
New-UDAntdTag -Status error -Content "error"

.EXAMPLE
New-UDAntdTag -Status error -WithIcon -Content "error"

.NOTES
General notes
#>
function New-UDAntdTag {
    [CmdletBinding(DefaultParameterSetName = 'Color')]
    [OutputType('Ant.Design.Tag')]
    Param(
        [Parameter(ParameterSetName = "Status")]
        [Parameter(ParameterSetName = "Color")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(ParameterSetName = "Status")]
        [Parameter(ParameterSetName = "Color")]
        [switch]$Closable,
        [Parameter(ParameterSetName = "Color")]
        [ValidateSet("magenta", "red", "volcano", "orange", "gold", "lime", "green", "cyan", "blue", "geekblue", "purple")]
        [string]$PresetColor,
        [Parameter(ParameterSetName = "Color")]
        [string]$Color,
        [Parameter(ParameterSetName = "Status")]
        [ValidateSet("success", "processing", "error", "warning", "default")]
        [string]$Status,
        [Parameter(ParameterSetName = "Status")]
        [switch]$WithIcon,
        [Parameter(ParameterSetName = "Color")]
        [object]$Icon,
        [Parameter(ParameterSetName = "Status")]
        [Parameter(ParameterSetName = "Color")]
        [object]$Content
    )
    End {
        $UDAntdTag = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-tag"
            id          = $Id
            style       = $Style
            size        = $Size
            closable    = $Closable.IsPresent
            content     = $Content
            hasCallBack = $null -ne $OnError
        }

        if($PSCmdlet.ParameterSetName -match "Status"){
            $UDAntdTag.Add("color", $Status)
            $UDAntdTag.Add("withIcon", $WithIcon.IsPresent)
        }

        if ($PSCmdlet.ParameterSetName -match "Color" -and $PSBoundParameters.ContainsKey("PresetColor")) {
            $UDAntdTag.Add("color", $PresetColor)
            $UDAntdTag.Add("icon", $Icon)
        }

        if ($PSCmdlet.ParameterSetName -match "Color" -and $PSBoundParameters.ContainsKey("Color")) {
            $UDAntdTag.Add("color", $Color)
            $UDAntdTag.Add("icon", $Icon)
        }

        if ($PSCmdlet.ParameterSetName -match "Color" -and $PSBoundParameters.ContainsKey("Color") -and $PSBoundParameters.ContainsKey("PresetColor")) {
            Write-Error -Message "You can't use PresetColor and Color in the same command please select one."
        }

        $UDAntdTag.PSTypeNames.Insert(0, 'Ant.Design.Tag')
        $UDAntdTag
    }
}

<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Checked
Parameter description

.PARAMETER Color
Parameter description

.PARAMETER Icon
Parameter description

.PARAMETER Content
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdTagCheckable {
    [CmdletBinding()]
    [OutputType('Ant.Design.Tag.Checkable')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [switch]$Checked,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [object]$Content
    )
    End {
        
        $UDAntdCheckableTag = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-tag-checkable"
            id       = $Id
            checked  = $Checked.IsPresent
            color    = $Color
            icon     = $Icon
            content  = $Content
        }
        $UDAntdCheckableTag.PSTypeNames.Insert(0, 'Ant.Design.Tag.Checkable')
        $UDAntdCheckableTag
    }
}