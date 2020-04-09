
function New-UDAntdPage {
    [CmdletBinding()]
    [OutputType('UDAntd.Page')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Name,
        [Parameter()]
        [scriptblock]$Content
    )
    End {
        # if ($null -ne $Content) {
        #     if ($Content -is [scriptblock]) {
        #         $Content = New-UDEndpoint -Endpoint $Content -Id ($Id + "Content")
        #     }
        #     elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
        #         throw "Content must be a script block or UDEndpoint"
        #     }
        # }

        $UDAntdPage = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-page"
            id = $Id
            dynamic = $false
            name = $Name
            components = $Content.Invoke()
            
        }
        $UDAntdPage.PSTypeNames.Insert(0, 'UDAntd.Page')
        $UDAntdPage

    }
}
