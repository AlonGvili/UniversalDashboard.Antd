function New-UDAntdTag {
    [CmdletBinding(DefaultParameterSetName = 'Icon')]
    [OutputType('UDAntd.Tag')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [switch]$Closable,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [object]$Content
    )
    End {
        
        $UDAntdTag = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-tag"
            id       = $Id
            # className    = $ClassName
            # style        = $Style
            # size         = $Size
            # src          = $Src
            closable = $Closable.IsPresent
            color    = $Color
            icon     = $Icon
            content  = $Content
            # parameterSet = $PSCmdlet.ParameterSetName
            # hasCallBack  = $null -ne $OnError
        }
        $UDAntdTag.PSTypeNames.Insert(0, 'UDAntd.Tag')
        $UDAntdTag
    }
}

function New-UDAntdTagCheckable {
    [CmdletBinding()]
    [OutputType('UDAntd.Tag.Checkable')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [switch]$Checked,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [object]$Content
    )
    End {
        
        $UDAntdCheckableTag = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-tag-checkable"
            id       = $Id
            checked = $Checked.IsPresent
            color    = $Color
            icon     = $Icon
            content  = $Content
        }
        $UDAntdCheckableTag.PSTypeNames.Insert(0, 'UDAntd.Tag.Checkable')
        $UDAntdCheckableTag
    }
}