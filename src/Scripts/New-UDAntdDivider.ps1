
function New-UDAntdDivider {
    [CmdletBinding()]
    [OutputType('Ant.Design.Divider')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet("left", "right", "center")]
        [string]$Orientation = "center",
        [Parameter()]
        [switch]$Dashed,
        [Parameter()]
        [switch]$Plain,
        [Parameter()]
        [ValidateSet("horizontal", "vertical")]
        [string]$Variant = "horizontal",
        [Parameter()]
        [hashtable]$Style, 
        [Parameter()]
        [string]$Text 
    )
    End {
        $AntdDivider = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-divider"
            id          = $Id
            dashed      = $Dashed.IsPresent
            className   = $ClassName
            variant     = $Variant
            style       = $Style    
            orientation = $Orientation
            plain       = $Plain.IsPresent
            text        = $Text 
        }
        $AntdDivider.PSTypeNames.Insert(0, 'Ant.Design.Divider')
        $AntdDivider
    }
}