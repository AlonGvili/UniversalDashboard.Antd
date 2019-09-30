function New-UDAntdInputTextArea {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [switch]$Autosize,
        [Parameter()]
        [int]$Rows,
        [Parameter()]
        [scriptblock]$OnPressEnter,
        [Parameter()]
        [string]$PlaceHolder,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($null -ne $OnPressEnter) {
            if ($OnPressEnter -is [scriptblock]) {
                $OnPressEnterEndpoint = New-UDEndpoint -Endpoint $OnPressEnter -Id ($Id + "onPressEnter")
            }
            elseif ($OnPressEnter -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnPressEnter must be a script block or UDEndpoint"
            }
        }

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-input-textarea"
            id = $Id
            className = $ClassName
            disabled = $Disabled.IsPresent
            rows = $Rows
            autosize = $Autosize.IsPresent
            placeholder = $PlaceHolder
            style = $Style
        }

    }
}
