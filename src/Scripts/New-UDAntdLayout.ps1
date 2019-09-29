function New-UDAntdLayout {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$HasSider,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        # if($null -ne $Content ){
        #     $LayoutContent = $Content.Invoke()
        #     $LayoutContent | ForEach-Object {
        #         if($_.type -notmatch "universaldashboard.antd.[layout|header|footer|sider|content]" ){
        #             throw "Layout Content must be New-UDAntdLayout, New-UDAntdHeader, New-UDAntdSider, New-UDAntdContent, New-UDAntdFooter"
        #         }
        #     }
        # }
        $AntdLayout = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = 'ud-antd-layout'
            id = $Id
            className = $ClassName
            hasSider = $HasSider.IsPresent
            content = $Content.Invoke()
            style = $Style
        }
        $AntdLayout.PSTypeNames.Insert(0, 'universaldashboard.antd.layout') | Out-Null
        $AntdLayout
    }
}