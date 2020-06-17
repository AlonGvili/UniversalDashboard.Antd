function New-UDAntdInputGroup {
    [CmdletBinding()]
    [OutputType('Ant.Design.Input.Group')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [hashtable]$Style,
        [Parameter(Mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$Compact,
        [Parameter()]
        [ValidateSet("default", "small", "large")]
        [string]$size = "default"
    )

    End {
        $AntdInputGroup = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-input-group"
            id       = $Id
            content  = $Content.Invoke()
            size     = $Size
            style    = $Style
            compact  = $Compact.IsPresent
        }
        $AntdInputGroup.PSTypeNames.Insert(0, 'Ant.Design.Input.Group')
        $AntdInputGroup
    }
}
