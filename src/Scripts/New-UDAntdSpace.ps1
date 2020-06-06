<#
.SYNOPSIS
    Space component for universal dashboard
.DESCRIPTION
    Avoid components clinging together and set a unified space
.EXAMPLE
    PS C:\> 
    Explanation of what the example does
.OUTPUTS
    Ant.Design.Space
.NOTES
    
#>
function New-UDAntdSpace {
    [CmdletBinding()]
    [OutputType("Ant.Design.Space")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet("start", "end", "center", "baseline")]
        [string]$Align = "center",
        [Parameter()]
        [ValidateSet("vertical", "horizontal")]
        [string]$Direction = "horizontal",
        [Parameter()]
        [ValidateSet("small", "middle", "large")]
        [string]$Size = "middle",
        [Parameter(Mandatory)]
        [scriptblock]$Content
    )

    End {
        $AntdSpace = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-space"
            id        = $Id
            align     = $Align
            direction = $Direction
            size      = $Size
            content = $Content.Invoke()
        }
        $AntdSpace.PSTypenames.Insert(0, "Ant.Design.Space")
        $AntdSpace
    }
}
