function New-UDAntdInputTextArea {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [switch]$Autosize,
        [Parameter()]
        [int]$Rows = 4,
        [Parameter()]
        [string]$PlaceHolder,
        [Parameter()]
        [hashtable]$Style

    )

    End {
        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-input-textarea"
            id = $Id
            disabled = $Disabled.IsPresent
            rows = $Rows
            autosize = $Autosize.IsPresent
            placeholder = $PlaceHolder
            style = $Style
        }

    }
}
