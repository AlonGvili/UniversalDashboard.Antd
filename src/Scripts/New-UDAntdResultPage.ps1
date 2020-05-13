function New-UDAntdResult {
    [CmdletBinding()]
    [OutputType('Ant.Design.ResultPage')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet('success', 'error', 'info', 'warning', '404', '403', '500')]
        [string]$Status = "404",
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$SubTitle,
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [object]$Extra
    )
    End {

        $UDAntdResult = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-result"
            id       = $Id
            title    = $Title
            subTitle = $SubTitle
            status   = $Status
            icon     = $Icon
            extra    = $Extra
        }
        $UDAntdResult.PSTypeNames.Insert(0, 'Ant.Design.ResultPage')
        $UDAntdResult
    }
}