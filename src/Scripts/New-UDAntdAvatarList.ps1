function New-UDAntdAvatarList {
    [CmdletBinding()]
    [OutputType('Ant.Design.AvatarList')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [int]$MaxLength,
        [Parameter()]
        [hashtable]$ExcessItemsStyle,
        [Parameter()]
        [ValidateSet('small', 'default', 'large', 'mini')]
        [string]$Size = "default",
        [Parameter(Mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )
    End {

        if ($null -ne $Content) {
            $AvatarListContentEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
        }

        $AntdAvatarList = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-avatar-list"
            id               = $Id
            size             = $Size
            maxLength        = $MaxLength
            excessItemsStyle = $ExcessItemsStyle
            autoRefresh      = $AutoRefresh.IsPresent
            refreshInterval  = $RefreshInterval
        }
        $AntdAvatarList.PSTypeNames.Insert(0, 'Ant.Design.AvatarList')
        $AntdAvatarList
    }
}

function New-UDAntdAvatarListItem {
    [CmdletBinding()]
    [OutputType('Ant.Design.AvatarListItem')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Source,
        [Parameter()]
        [object]$Tips,
        [Parameter()]
        [scriptblock]$OnClick
    )
    End {

        if ($null -ne $OnClick) {
            $AvatarListItemEndpoint = New-UDEndpoint -Endpoint $OnClick -Id ( $Id + "onClick" )
        }

        $AntdAvatarListItem = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-avatar-list-item"
            id          = $Id
            src         = $Source
            tips        = $Tips
            hasCallback = $null -ne $OnClick
        }
        $AntdAvatarListItem.PSTypeNames.Insert(0, 'Ant.Design.AvatarListItem')
        $AntdAvatarListItem
    }
}