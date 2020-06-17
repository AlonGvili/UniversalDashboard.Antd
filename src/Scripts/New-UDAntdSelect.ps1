<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Style
Parameter description

.PARAMETER InputStyle
Parameter description

.PARAMETER CustomInput
Parameter description

.PARAMETER DropDownStyle
Parameter description

.PARAMETER AllowClear
Parameter description

.PARAMETER AutoFocus
Parameter description

.PARAMETER Backfill
Parameter description

.PARAMETER DataSource
Parameter description

.PARAMETER Disabled
Parameter description

.PARAMETER DropdownMatchSelectWidth
Parameter description

.PARAMETER FilterKeys
Parameter description

.PARAMETER Suffix
Parameter description

.PARAMETER Bordered
Parameter description

.PARAMETER Size
Parameter description

.PARAMETER OnSelect
Parameter description

.PARAMETER OnChange
Parameter description

.PARAMETER Placeholder
Parameter description

.PARAMETER AutoRefresh
Parameter description

.PARAMETER RefreshInterval
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdSelect {
    [CmdletBinding()]
    [OutputType('Ant.Design.Select')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [int]$DebounceInterval = 500,
        [Parameter(HelpMessage = "style for the autocomplete component")]
        [hashtable]$Style,
        [Parameter(Mandatory, HelpMessage = "An array of objects, DataSource is a UDEndpoint and NOT static scriptblock, you Can Not change this and every object in the dataSource array must have a name property")]
        [scriptblock]$DataSource,
        [Parameter(HelpMessage = "Whether the component is disabled")]
        [switch]$Disabled,
        [Parameter(HelpMessage = "Determine whether the dropdown menu and the select input are the same width")]
        [switch]$DropdownMatchSelectWidth,
        [Parameter(HelpMessage = "The custom suffix icon")]
        [object]$Suffix,
        [Parameter(HelpMessage = "whether has border style")]
        [switch]$Bordered,
        [Parameter(HelpMessage = "Size of Select input")]
        [ValidateSet("small", "middle", "large")]
        [string]$Size = "middle",
        [Parameter(HelpMessage = "Called when a option is selected, the return data is in EventData variable and it contain only the selected object")]
        [scriptblock]$OnSelect,
        [Parameter(HelpMessage = "The placeholder text")]
        [string]$Placeholder = "Enter your search"
    )

    End {

        if ($null -ne $DataSource) {
            $DataSourceEndpoint = New-UDEndpoint -Endpoint $DataSource -Id $Id     
        }
        
        if ($null -ne $onSelect) {
            $OnSelectEndpoint = New-UDEndpoint -Endpoint $onSelect  -Id ( $Id + "OnSelect")
        }

        $Url = "/api/internal/component/element/$($Id)"
        $UDAntdSelect = @{
            assetId                  = $AssetId
            isPlugin                 = $true
            type                     = "ud-antd-select"
            id                       = $Id
            url                      = $Url
            style                    = $Style
            disabled                 = $disabled.IsPresent
            placeholder              = $Placeholder
            size                     = $Size    
            content                  = $DataSource.Invoke()
            suffixIcon               = $Suffix
            debounceInterval         = $DebounceInterval
            virtual                  = $true
            bordered                 = $Bordered.IsPresent
            dropdownMatchSelectWidth = $DropdownMatchSelectWidth.IsPresent
        }
        $UDAntdSelect.PSTypeNames.Insert(0, 'Ant.Design.Select')
        $UDAntdSelect
    }
}


<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Value
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdSelectOption {
    [CmdletBinding()]
    [OutputType('Ant.Design.Select.Option')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Value
    )

    End {
        $UDAntdSelectOption = @{
            assetId  = $AssetId
            isPlugin = $true
            type     = "ud-antd-select-option"
            id       = $Id
            value    = $Value
        }
        $UDAntdSelectOption.PSTypeNames.Insert(0, 'Ant.Design.Select.Option')
        $UDAntdSelectOption
    }
}
