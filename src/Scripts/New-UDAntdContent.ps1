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
        if ($null -eq  $Content) {
            if ($Content -is [scriptblock]) {
                $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
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