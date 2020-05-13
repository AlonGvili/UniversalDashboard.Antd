function New-AntdDarkModeToggle {
    [CmdletBinding()]
    [OutputType('Ant.Design.DarkModeToggle')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet("small", "default")]
        [string]$Size = "default"

    )
    End {
        $UDAntdDarkModeToggle = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-darkmode-toggle"
            id       = $Id
            size     = $Size
        }
        $UDAntdDarkModeToggle.PSTypeNames.Insert(0, 'Ant.Design.DarkModeToggle')
        $UDAntdDarkModeToggle
        
    }
        
}
