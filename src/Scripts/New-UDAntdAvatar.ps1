function New-UDAntdAvatar {
    [CmdletBinding(DefaultParameterSetName = 'Icon')]
    [OutputType('UDAntd.Avatar')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet('circle', 'square')]
        [string]$Shape,
        [Parameter()]
        [ValidateSet('small', 'default', 'large')]
        [string]$Size,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [scriptblock]$OnError,
        [Parameter(ParameterSetName = 'Icon')]
        [object]$Icon,
        [Parameter(ParameterSetName = 'Image')]
        [string]$Alt,
        [Parameter(ParameterSetName = 'Image')]
        [string]$Src,
        [Parameter(ParameterSetName = 'Image')]
        [string[]]$SrcSet,
        [Parameter(ParameterSetName = 'Content')]
        [object]$Content
    )
    End {
        if ($null -ne $OnError) {
            if ($OnError -is [scriptblock] -or $OnError -is [UniversalDashboard.Models.Endpoint]) {
                $OnError = New-UDEndpoint -Endpoint $OnError -Id ($Id + "OnError")
            }
        }

        if($PSCmdlet.ParameterSetName.Contains('Icon')){
            $Content = $Icon
        }

        $UDAntdAvatar = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-avatar"
            id          = $Id
            className   = $ClassName
            style        = $Style
            size        = $Size
            src         = $Src
            srcSet      = $SrcSet
            shape       = $Shape
            alt         = $Alt
            content     = $Content
            parameterSet = $PSCmdlet.ParameterSetName
            hasCallBack = $null -ne $OnError
        }
        $UDAntdAvatar.PSTypeNames.Insert(0, 'UDAntd.Avatar')
        $UDAntdAvatar
    }
}