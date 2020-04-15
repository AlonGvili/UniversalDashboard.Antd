function Get-UDAntdPage{
    param(
        [Parameter()]
        [string]$Id = (New-Guid).guid,
        [Parameter()]
        [string]$Name
    )
    end{
        @{
            assetId   = $AssetId
            id = $Id
            isPlugin  = $true
            name      = $Name
            type      = "ud-antd-utils-getPage"
        }
    }
}