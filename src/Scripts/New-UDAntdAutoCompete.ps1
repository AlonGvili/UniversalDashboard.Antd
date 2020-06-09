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
function New-UDAntdAutoComplete {
    [CmdletBinding()]
    [OutputType('Ant.Design.AutoComplete')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "style for the autocomplete component")]
        [hashtable]$Style,
        [Parameter(HelpMessage = "style of the default input component")]
        [hashtable]$InputStyle,
        [Parameter(HelpMessage = "Custom input component instad of the default")]
        [object]$CustomInput,
        [Parameter(HelpMessage = "style of dropdown menu")]
        [hashtable]$DropDownStyle,
        [Parameter(HelpMessage = "Show clear button")]
        [switch]$AllowClear,
        [Parameter()]
        [switch]$AutoFocus,
        [Parameter(HelpMessage = "backfill selected item the input when using keyboard")]
        [switch]$Backfill,
        [Parameter(Mandatory, HelpMessage = "An array of objects, DataSource is a UDEndpoint and NOT static scriptblock, you Can Not change this and every object in the dataSource array must have a name property")]
        [scriptblock]$DataSource,
        [Parameter(HelpMessage = "Whether the component is disabled")]
        [switch]$Disabled,
        [Parameter(HelpMessage = "Determine whether the dropdown menu and the select input are the same width")]
        [switch]$DropdownMatchSelectWidth,
        [Parameter(HelpMessage = "An array of words that will be used to filter the data when you type")]
        [string[]]$FilterKeys,
        [Parameter(HelpMessage = "The custom suffix icon")]
        [object]$Suffix,
        [Parameter(HelpMessage = "whether has border style")]
        [switch]$Bordered,
        [Parameter(HelpMessage = "Size of Select input")]
        [ValidateSet("small", "middle", "large")]
        [string]$Size = "middle",
        [Parameter(HelpMessage = "Called when a option is selected, the return data is in EventData variable and it contain only the selected object")]
        [scriptblock]$OnSelect,
        [Parameter(HelpMessage = "Called when value of input is changed, the return data is in EventData variable and it contain only the filtered results")]
        [scriptblock]$OnChange,
        [Parameter(HelpMessage = "The placeholder text")]
        [string]$Placeholder = "Enter your search",
        [Parameter(HelpMessage = "Whether the DataSource scriptblock should auto-refresh. The default interval is every 5 seconds")]
        [switch]$AutoRefresh,
        [Parameter(HelpMessage = "How often the DataSource scriptblock refreshes")]
        [int]$RefreshInterval = 5000
    )

    End {

        if ($null -ne $DataSource) {
            $DataSourceEndpoint = New-UDEndpoint -Endpoint $DataSource -Id $Id     
        }
        
        if ($null -ne $onSelect) {
            $OnSelectEndpoint = New-UDEndpoint -Endpoint $onSelect  -Id ( $Id + "OnSelect")
        }

        if ($null -ne $onChange) {
            $OnChangeEndpoint = New-UDEndpoint -Endpoint $onChange  -Id ( $Id + "OnChange")
        }

        $UDAntdAutoComplete = @{
            assetId                  = $AssetId
            isPlugin                 = $true
            type                     = "ud-antd-autocomplete"
            id                       = $Id
            style                    = $Style
            inputStyle               = $InputStyle
            dropDownStyle            = $DropDownStyle   
            allowClear               = $allowClear.IsPresent
            autoFocus                = $autoFocus.IsPresent
            backfill                 = $backfill.IsPresent
            disabled                 = $disabled.IsPresent
            filterKeys               = $FilterKeys
            placeholder              = $Placeholder
            size                     = $Size
            suffixIcon               = $Suffix
            virtual                  = $true
            bordered                 = $Bordered.IsPresent
            dropdownMatchSelectWidth = $DropdownMatchSelectWidth
            autoRefresh              = $AutoRefresh.IsPresent
            refreshInterval          = $RefreshInterval
        }

        if ($PSBoundParameters.ContainsKey("CustomInput")) {
            $UDAntdAutoComplete.Add("customInput", $CustomInput)
        }
        $UDAntdAutoComplete.PSTypeNames.Insert(0, 'Ant.Design.AutoComplete')
        $UDAntdAutoComplete
    }
}
