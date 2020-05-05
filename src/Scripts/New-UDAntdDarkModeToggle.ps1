function New-AntdDarkModeToggle {
    [CmdletBinding()]
    [OutputType('UDAntd.DarkModeToggle')]
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
        $UDAntdDarkModeToggle.PSTypeNames.Insert(0, 'UDAntd.DarkModeToggle')
        $UDAntdDarkModeToggle
        
    }
        
}
