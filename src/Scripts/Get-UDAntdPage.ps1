function Add-UDAntdPage{
    param(
        [Parameter()]
        [string]$Id = (New-Guid).guid
    )
    end{
        @{
            assetId   = $AssetId
            id = $Id
            isPlugin  = $true
            type      = "ud-antd-add-page"
        }
    }
}