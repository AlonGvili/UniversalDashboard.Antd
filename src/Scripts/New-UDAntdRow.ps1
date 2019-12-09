
function New-UDAntdRow {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [hashtable]$Style,
        [Parameter(mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [ValidateSet("top","middle","bottom")]
        [string]$Align,
        [Parameter()]
        [int]$Gutter,
        [Parameter()]
        [ValidateSet("start","end","center","space-around","space-between")]
        [string]$Justify,
        [Parameter()]
        [switch]$Flex,
        [Parameter()]
        [switch]$IsEndpoint
    )

    End {

        if($IsEndpoint.IsPresent){
            $RowEndpoint = New-UDEndpoint -Id $id -Endpoint $Content 
        }

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-row"
            id = $Id
            className = $ClassName
            style = $Style
            content = $Content.Invoke()
            gutter = $Gutter
            align = $Align
            justify = $Justify
            flex = $Flex.IsPresent
            span = $Span

        }

    }
}
