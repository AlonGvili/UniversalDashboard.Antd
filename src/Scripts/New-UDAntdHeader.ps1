function New-UDAntdHeader {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        if ($null -eq  $Content ) {
            throw "Content must NOT be empty."
        }
            
        $AntdHeader = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = 'ud-antd-header'
            id        = $Id
            className = $ClassName
            content   = $Content.Invoke()
            style     = $Style
        }
        $AntdHeader.PSTypeNames.Insert(0, 'universaldashboard.antd.header') | Out-Null
        $AntdHeader
    }
}