
function New-UDAntdButton {
    [CmdletBinding()]
    [OutputType('UDAntd.Button')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [switch]$Ghost,
        [Parameter()]
        [ValidateSet("button","submit","reset")]
        [string]$HtmlType,
        [Parameter()]
        [string]$Icon,
        [Parameter()]
        [switch]$Loading,
        [Parameter()]
        [ValidateSet("circle","round")]
        [string]$Shape,
        [Parameter()]
        [ValidateSet("small","large")]
        [string]$Size,
        [Parameter()]
        [ValidateSet("primary","ghost","dashed","danger","link")]
        [string]$ButtonType,
        [Parameter()]
        [object]$OnClick,
        [Parameter()]
        [switch]$FullWidth,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Label
    )
    End {
        if ($null -ne $OnClick) {
            if ($OnClick -is [scriptblock]) {
                $OnClick = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "onClick")
            }
            elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        $UDAntdButton = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-button"
            id = $Id
            className = $ClassName
            disabled = $Disabled.IsPresent
            ghost = $Ghost.IsPresent
            htmlType = $HtmlType
            icon = $Icon
            loading = $Loading.IsPresent
            shape = $Shape
            size = $Size
            buttonType = $ButtonType
            block = $FullWidth.IsPresent
            label = $Label
            style = $Style
        }
        $UDAntdButton.PSTypeNames.Insert(0, 'UDAntd.Button')
        $UDAntdButton

    }
}
