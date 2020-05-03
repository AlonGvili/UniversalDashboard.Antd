function New-UDAntdHeaderAccountSettings {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).guid.toString(),
        [Parameter()]
        [string]$Image,
        [Parameter()]
        [ValidateSet("small", "middle", "large")]
        [string]$Size = "middle",
        [Parameter()]
        [string]$Name,
        [Parameter()]
        [object]$Menu
    )

    End {
        @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-header-account-settings"
            id       = $Id
            image    = $Image
            size     = $Size
            name     = $Name
            menu     = $Menu
        }
    }
}