function New-AntdDarkModeToggle {
    [CmdletBinding()]
    [OutputType('UDAntd.DarkModeToggle')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString()

    )
    End {
        $UDAntdDarkModeToggle = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-darkmode-toggle"
            id       = $Id
        }
        $UDAntdDarkModeToggle.PSTypeNames.Insert(0, 'UDAntd.DarkModeToggle')
        $UDAntdDarkModeToggle
        
    }
        
}
