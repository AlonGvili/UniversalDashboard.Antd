
function New-UDAntdAutoComplete {
    [CmdletBinding()]
    [OutputType('Ant.Design.AutoComplete')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [hashtable]$InputStyle,
        [Parameter()]
        [object]$CustomInput,
        [Parameter()]
        [hashtable]$DropDownStyle,
        [Parameter()]
        [hashtable]$DropDownMenuStyle,
        [Parameter()]
        [switch]$allowClear,
        [Parameter()]
        [switch]$autoFocus,
        [Parameter()]
        [switch]$backfill,
        [Parameter(Mandatory)]
        [scriptblock]$dataSource,
        [Parameter()]
        [switch]$defaultActiveFirstOption,
        [Parameter()]
        [string]$defaultValue,
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [string[]]$FilterKeys,
        [Parameter()]
        [string]$optionLabelProp,
        [Parameter()]
        [ValidateSet("small","middle","large")]
        [string]$Size = "middle",
        [Parameter()]
        [scriptblock]$onSelect,
        [Parameter()]
        [switch]$defaultOpen,
        [Parameter()]
        [switch]$open,
        [Parameter()]
        [string]$Placeholder = "Enter your search",
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )

    End {

        if ($null -ne $DataSource) {
            $DataSourceEndpoint = New-UDEndpoint -Endpoint $DataSource -Id $Id     
        }
        
        if ($null -ne $onSelect) {
            $OnSelectEndpoint = New-UDEndpoint -Endpoint $onSelect  -Id ( $Id + "OnSelect")
        }

        $UDAntdAutoComplete = @{
            assetId                  = $AssetId
            isPlugin                 = $true
            type                     = "ud-antd-autocomplete"
            id                       = $Id
            style                    = $Style
            inputStyle               = $InputStyle
            dropDownStyle            = $DropDownStyle
            dropdownMenuStyle        = $DropDownMenuStyle
            allowClear               = $allowClear.IsPresent
            autoFocus                = $autoFocus.IsPresent
            backfill                 = $backfill.IsPresent
            content                  = $DataSourceContent
            defaultActiveFirstOption = $defaultActiveFirstOption.IsPresent
            defaultValue             = $defaultValue
            disabled                 = $disabled.IsPresent
            customInput              = $CustomInput
            filterKeys               = $FilterKeys
            placeholder              = $Placeholder
            optionLabelProp          = $optionLabelProp
            size                     = $Size
            defaultOpen              = $defaultOpen.IsPresent
            open                     = $open.IsPresent
            autoRefresh              = $AutoRefresh.IsPresent
            refreshInterval          = $RefreshInterval
        }
        $UDAntdAutoComplete.PSTypeNames.Insert(0, 'Ant.Design.AutoComplete')
        $UDAntdAutoComplete
    }
}
