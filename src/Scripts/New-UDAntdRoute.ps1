function New-UDAntdRoute {
    [CmdletBinding()]
    [OutputType('Ant.Design.Route')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string[]]$Path,
        [Parameter()]
        [switch]$Exact,
        [Parameter(ParameterSetName = 'Content')]
        [object]$Content
    )
    End {
        
        $UDAntdRoute = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-route"
            id       = $Id
            path     = $Path
            content  = $Content
            exact    = $Exact.IsPresent
        }
        $UDAntdRoute.PSTypeNames.Insert(0, 'Ant.Design.Route')
        $UDAntdRoute
    }
}