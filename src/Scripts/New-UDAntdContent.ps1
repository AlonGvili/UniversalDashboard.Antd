function New-UDAntdContent {
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
            
        $AntdContent = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = 'ud-antd-content'
            id        = $Id
            className = $ClassName
            content   = $Content.Invoke()
            style     = $Style
        }
        $AntdContent.PSTypeNames.Insert(0, 'universaldashboard.antd.content') | Out-Null
        $AntdContent
    }
}