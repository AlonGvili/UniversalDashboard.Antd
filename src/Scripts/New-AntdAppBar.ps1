<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Content
Parameter description

.PARAMETER Visible
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdAppBar {
    [CmdletBinding()]
    [OutputType('Ant.Design.AppBar')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$Visible
    )
    End {
        $UDAntdAppBar = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-appbar"
            id       = $Id
            content  = $Content.Invoke()
            visible  = $Visible.IsPresent
        }
        $UDAntdAppBar.PSTypeNames.Insert(0, 'Ant.Design.AppBar')
        $UDAntdAppBar
    }
}


