
function New-UDAntdAutoComplete {
    [CmdletBinding()]
    [OutputType('UDAntd.AutoComplete')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [hashtable]$InputStyle,
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
        [Parameter()]
        [scriptblock]$dataSource,
        [Parameter()]
        [switch]$defaultActiveFirstOption,
        [Parameter()]
        [string]$defaultValue,
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [string[]]$filterOption,
        [Parameter()]
        [string]$optionLabelProp,
        [Parameter()]
        [string]$placeholder,
        [Parameter()]
        [string]$value,
        [Parameter()]
        [scriptblock]$onBlur,
        [Parameter()]
        [scriptblock]$onChange,
        [Parameter()]
        [scriptblock]$onFocus,
        [Parameter()]
        [scriptblock]$onSearch,
        [Parameter()]
        [scriptblock]$onSelect,
        [Parameter()]
        [switch]$defaultOpen,
        [Parameter()]
        [switch]$open,
        [Parameter()]
        [scriptblock]$onDropdownVisibleChange
    )

    End {

        if ($null -ne $DataSource) {
            if ($IsEndpoint) {
                if ($DataSource -is [scriptblock]) {
                    $DataSourceEndpoint = New-UDEndpoint -Endpoint $DataSource -Id $Id
                    $DataSourceContent = $DataSource.Invoke()
                }
                elseif ($DataSource -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "DataSource must be a script block or UDEndpoint"
                }
            }
            else {
                $DataSourceContent = $DataSource.Invoke()
            }
        }

        # $Filters = $DataSourceContent[0].psobject.Properties.name 

        if ($null -ne $onSelect) {
            if ($onSelect -is [scriptblock]) {
                $OnSelectEndpoint = New-UDEndpoint -Endpoint $onSelect  -Id ( $Id + "OnSelect")
            }
            elseif ($onSelect -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnSelect must be a script block or UDEndpoint"
            }
        }

        if ($null -ne $onChange) {
            if ($onChange -is [scriptblock]) {
                $onChangeEndpoint = New-UDEndpoint -Endpoint $onChange  -Id ( $Id + "OnChange")
            }
            elseif ($onChange -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "onChange must be a script block or UDEndpoint"
            }
        }

        $UDAntdAutoComplete = @{
            assetId                  = $AssetId
            isPlugin                 = $true
            type                     = "ud-antd-autocomplete"
            id                       = $Id
            className                = $ClassName
            style                    = $Style
            inputStyle               = $InputStyle
            dropDownStyle            = $DropDownStyle
            dropdownMenuStyle        = $DropDownMenuStyle
            allowClear               = $allowClear.IsPresent
            autoFocus                = $autoFocus.IsPresent
            backfill                 = $backfill.IsPresent
            content                  = $DataSourceContent | ConvertTo-Json
            defaultActiveFirstOption = $defaultActiveFirstOption.IsPresent
            defaultValue             = $defaultValue
            disabled                 = $disabled.IsPresent
            # filterOption             = $filterOption
            filters                  = $filterOption
            optionLabelProp          = $optionLabelProp
            placeholder              = $placeholder
            value                    = $value
            onBlur                   = $onBlur
            onFocus                  = $onFocus
            onSearch                 = $onSearch
            defaultOpen              = $defaultOpen.IsPresent
            open                     = $open.IsPresent
            onDropdownVisibleChange  = $onDropdownVisibleChange
        }
        $UDAntdAutoComplete.PSTypeNames.Insert(0, 'UDAntd.AutoComplete')
        $UDAntdAutoComplete

    }
}
