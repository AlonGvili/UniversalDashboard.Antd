$TAType = [psobject].Assembly.GetType('System.Management.Automation.TypeAccelerators')
$TAtype::Add('DashboardColor', 'UniversalDashboard.Models.DashboardColor')
$TAtype::Add('Endpoint', 'UniversalDashboard.Models.Endpoint')

function Add-UDAntdTimelineItem {
    param(
        [Parameter(Mandatory)]
        [string]$TimelineId,
        [Parameter(Mandatory)]
        [object]$Item,
        [Parameter()]
        [Switch]$Broadcast
    )

    # $NewContent = & $Content

    $Data = @{
        timelineId = $TimelineId
        item       = $Item
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("addTimelineItem", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "addTimelineItem", $Data)
    }    
}
function Add-UDAntdColumn {
    param(
        [Parameter(Mandatory)]
        [string]$RowId,
        [Parameter(Mandatory)]
        [object]$Column,
        [Parameter()]
        [Switch]$Broadcast
    )

    # $NewContent = & $Content

    $Data = @{
        rowId  = $RowId
        column = $Column
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("addColumn", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "addColumn", $Data)
    }    
}
function Clear-UDAntdTimeline {
    param(
        [Parameter(Mandatory)]
        [string]$TimelineId,
        [Parameter()]
        [Switch]$Broadcast
    )

    # $NewContent = & $Content

    $Data = @{
        timelineId = $TimelineId
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("clearTimeline", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "clearTimeline", $Data)
    }    
}
function New-UDDashboard {
    [CmdletBinding(DefaultParameterSetName = "Pages")]
    param(
        [Parameter()]
        [string]$Title = "PowerShell Universal Dashboard",
        [Parameter(ParameterSetName = "Content", Mandatory)]
        [Endpoint]$Content,
        [Parameter(ParameterSetName = "Pages")]
        [Parameter(ParameterSetName = "Configuration")]
        [Hashtable[]]$Pages = @(),
        [Parameter(ParameterSetName = "Pages")]
        [Parameter(ParameterSetName = "Configuration")]
        [Hashtable[]]$Configuration = @(),
        [Parameter()]
        [hashtable]$Theme = @{
            name  = "default"
            color = "#13c2c2"
        },
        [Parameter()]
        [object]$AppBar,
        [Parameter()]
        [object]$SideBar

    )   

    if ($PSCmdlet.ParameterSetName -eq 'Content') {
        $Pages += New-UDPage -Name 'Home' -Content $Content
    }


    $Cache:Pages = $Pages 
    $Cache:Configuration = $Configuration 
    $Cache:Theme = $Theme
    $Cache:AppBar = $AppBar
    $Cache:SideBar = $SideBar

    New-UDEndpoint -Id "pages" -Endpoint {
        $Cache:Pages
    } | Out-Null

    New-UDEndpoint -Id "theme" -Endpoint {
        $Cache:Theme
    } | Out-Null

    New-UDEndpoint -Id "config" -Endpoint {
        $Cache:Configuration
    } | Out-Null

    New-UDEndpoint -Id "appbar" -Endpoint {
        $Cache:Appbar
    } | Out-Null

    @{
        title         = $Title 
        pages         = $Pages
        configuration = $Configuration
        theme         = $Theme
        appbar        = $AppBar
        sidebar       = $SideBar
    }
}

function Add-UDAntdPage{
    param(
        [Parameter()]
        [string]$Id = (New-Guid).guid
    )
    end{
        @{
            assetId   = $AssetId
            id = $Id
            isPlugin  = $true
            type      = "ud-antd-add-page"
        }
    }
}
<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Content
Parameter description

.PARAMETER Visible
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdAppBar {
    [CmdletBinding()]
    [OutputType('Ant.Design.AppBar')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$Visible
    )
    End {
        $UDAntdAppBar = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-appbar"
            id       = $Id
            content  = $Content.Invoke()
            visible  = $Visible.IsPresent
        }
        $UDAntdAppBar.PSTypeNames.Insert(0, 'Ant.Design.AppBar')
        $UDAntdAppBar
    }
}



<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Type
Parameter description

.PARAMETER Percent
Parameter description

.PARAMETER ShowInfo
Parameter description

.PARAMETER Status
Parameter description

.PARAMETER StrokeLinecap
Parameter description

.PARAMETER StrokeColor
Parameter description

.PARAMETER SuccessPercent
Parameter description

.PARAMETER TrailColor
Parameter description

.PARAMETER AutoRefresh
Parameter description

.PARAMETER RefreshInterval
Parameter description

.PARAMETER Style
Parameter description

.PARAMETER Step
Parameter description

.PARAMETER Width
Parameter description

.PARAMETER StrokeWidth
Parameter description

.PARAMETER GapDegree
Parameter description

.PARAMETER GapPosition
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdProgress {
    [CmdletBinding(DefaultParameterSetName = "Default")]
    [OutputType("Ant.Design.Progress")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet("line", "circle", "dashboard")]
        [string]$Type = "line",
        [Parameter()]
        [scriptblock]$Percent,
        [Parameter()]
        [switch]$ShowInfo,
        [Parameter()]
        [ValidateSet("success", "exception", "active", "normal")]
        [string]$Status,
        [Parameter()]
        [ValidateSet("round", "square")]
        [string]$StrokeLinecap = "round",
        [Parameter()]
        [string]$StrokeColor,
        [Parameter()]
        [int]$SuccessPercent = 0,
        [Parameter()]
        [string]$TrailColor,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [hashtable]$Style,
        [Parameter(ParameterSetName = "Line")]
        [int]$Step,
        [Parameter(ParameterSetName = "Circle")]
        [Parameter(ParameterSetName = "Dashboard")]
        [int]$Width = 132,
        [Parameter(ParameterSetName = "Circle")]
        [Parameter(ParameterSetName = "Dashboard")]
        [int]$StrokeWidth = 6,
        [Parameter(ParameterSetName = "Dashboard")]
        [int]$GapDegree = 75,
        [Parameter(ParameterSetName = "Dashboard")]
        [ValidateSet("top", "bottom", "left", "right")]
        [string]$GapPosition = "bottom"

    )

    End {

        if ($Null -ne $Percent) {
            $PercentEndpoint = New-UDEndpoint -Endpoint $Percent -Id $Id
        }

        $AntdProgress = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-progress"
            id              = $Id
            variant         = $Type
            style           = $Style
            status          = $Status
            strokeLinecap   = $StrokeLinecap
            strokeColor     = $StrokeColor
            successPercent  = $SuccessPercent
            trailColor      = $TrailColor
            showInfo        = $ShowInfo.IsPresent
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }

        if ($PSCmdlet.ParameterSetName -match "Line") {
            $AntdProgress.Add("steps", $Step)
        }
        if ($PSCmdlet.ParameterSetName -match "Circle") {
            $AntdProgress.Add("width", $Width)
            $AntdProgress.Add("strokeWidth", $StrokeWidth)
        }
        if ($PSCmdlet.ParameterSetName -match "Dashboard") {
            $AntdProgress.Add("width", $Width)
            $AntdProgress.Add("strokeWidth", $StrokeWidth)
            $AntdProgress.Add("gapDegree", $GapDegree)
            $AntdProgress.Add("gapPosition", $GapPosition)
        }
        $AntdProgress.PSTypeNames.Insert(0, 'Ant.Design.Progress')
        $AntdProgress
    }
}

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

function New-UDAntdAvatar {
    [CmdletBinding(DefaultParameterSetName = 'Icon')]
    [OutputType('Ant.Design.Avatar')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet('circle', 'square')]
        [string]$Shape,
        [Parameter()]
        [ValidateSet('small', 'default', 'large')]
        [string]$Size,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [scriptblock]$OnError,
        [Parameter(ParameterSetName = 'Icon')]
        [object]$Icon,
        [Parameter(ParameterSetName = 'Image')]
        [string]$Alt,
        [Parameter(ParameterSetName = 'Image')]
        [string]$Src,
        [Parameter(ParameterSetName = 'Image')]
        [string[]]$SrcSet,
        [Parameter(ParameterSetName = 'Content')]
        [object]$Content
    )
    End {
        if ($null -ne $OnError) {
            if ($OnError -is [scriptblock] -or $OnError -is [UniversalDashboard.Models.Endpoint]) {
                $OnError = New-UDEndpoint -Endpoint $OnError -Id ($Id + "OnError")
            }
        }

        if ($PSCmdlet.ParameterSetName.Contains('Icon')) {
            $Content = $Icon
        }

        $UDAntdAvatar = @{
            assetId      = $AssetId 
            isPlugin     = $true 
            type         = "ud-antd-avatar"
            id           = $Id
            className    = $ClassName
            style        = $Style
            size         = $Size
            src          = $Src
            srcSet       = $SrcSet
            shape        = $Shape
            alt          = $Alt
            content      = $Content
            parameterSet = $PSCmdlet.ParameterSetName
            hasCallBack  = $null -ne $OnError
        }
        $UDAntdAvatar.PSTypeNames.Insert(0, 'Ant.Design.Avatar')
        $UDAntdAvatar
    }
}
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
<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Status
Parameter description

.PARAMETER Text
Parameter description

.PARAMETER OverflowCount
Parameter description

.PARAMETER Count
Parameter description

.PARAMETER Style
Parameter description

.PARAMETER ShowZero
Parameter description

.PARAMETER Dot
Parameter description

.PARAMETER PresetColor
Parameter description

.PARAMETER Id
Parameter description

.PARAMETER OffSet
Parameter description

.PARAMETER Content
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdBadge {
    [CmdletBinding()]
    [OutputType('Ant.Design.Badge')]
    param(
        [Parameter()]
        [ValidateSet('success', 'processing', 'default', 'error', 'warning')]
        [string]$Status = "default",
        [Parameter()]
        [string]$Text,  
        [Parameter()]
        [int]$OverflowCount = 9999,
        [Parameter()]
        [object]$Count = 0,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [switch]$ShowZero,
        [Parameter()]
        [switch]$Dot,
        [Parameter()]
        [ValidateSet('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime')]
        [string]$PresetColor,  
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [int[]]$OffSet,
        [Parameter()]
        [object]$Content
    )

    End {
            
        $UDAntdBadge = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-badge"
            id       = $Id
            content  = $Content
            offset   = $Offset
        }
    
        if ($PSBoundParameters.ContainsKey("Count") -and $PSBoundParameters.ContainsKey("Content")) {
            $UDAntdBadge.Add("count", $Count)
            $UDAntdBadge.Add("style", $Style)
            $UDAntdBadge.Add("showZero", $ShowZero.IsPresent)
            $UDAntdBadge.Add("overflowCount", $OverflowCount)
        }
        if ($PSBoundParameters.ContainsKey("Status")) {
            $UDAntdBadge.Remove("Content") 
            $UDAntdBadge.Add("text", $Text)
            $UDAntdBadge.Add("status", $Status)
        }
        if ($PSBoundParameters.ContainsKey("Text") -and $PSBoundParameters.ContainsKey("PresetColor")) {
            $UDAntdBadge.Remove("Content") 
            $UDAntdBadge.Add("text", $Text)
            $UDAntdBadge.Add("color", $PresetColor)
        }
        if ($PSBoundParameters.ContainsKey("Text") -and $PSBoundParameters.ContainsKey("Color")) {
            $UDAntdBadge.Remove("Content") 
            $UDAntdBadge.Add("text", $Text)
            $UDAntdBadge.Add("color", $Color)
        }
        if ($PSBoundParameters.ContainsKey("Content") -and $PSBoundParameters.ContainsKey("Dot")) {
            $UDAntdBadge.Add("dot", $Dot.IsPresent)
            $UDAntdBadge.Add("count", $Count)
        }
        if ($PSBoundParameters.ContainsKey("Content") -and $PSBoundParameters.ContainsKey("PresetColor")) {
            $UDAntdBadge.Add("color", $PresetColor)
        }
        if ($PSBoundParameters.ContainsKey("Count") -and (-not($PSBoundParameters.ContainsKey("Content")))) {
            $UDAntdBadge.Add("count", $Count)
            $UDAntdBadge.Add("style", $Style)
            $UDAntdBadge.Remove("Content")
        }

        $UDAntdBadge.PSTypeNames.Insert(0, 'Ant.Design.Badge')
        $UDAntdBadge
    }
}


function New-UDAntdButton {
    [CmdletBinding()]
    [OutputType('Ant.Design.Button')]
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
        [ValidateSet("button", "submit", "reset")]
        [string]$HtmlType,
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [switch]$Loading,
        [Parameter()]
        [ValidateSet("circle", "round")]
        [string]$Shape,
        [Parameter()]
        [ValidateSet("small", "large")]
        [string]$Size,
        [Parameter()]
        [ValidateSet("primary", "ghost", "dashed", "danger", "link")]
        [string]$ButtonType,
        [Parameter()]
        [scriptblock]$OnClick,
        [Parameter()]
        [switch]$FullWidth,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Label
    )
    End {
        if ($null -ne $OnClick) {
            New-UDEndpoint -Endpoint $OnClick -Id $Id | Out-Null
        }

        $UDAntdButton = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-button"
            id          = $Id
            className   = $ClassName
            disabled    = $Disabled.IsPresent
            ghost       = $Ghost.IsPresent
            htmlType    = $HtmlType
            icon        = $Icon
            loading     = $Loading.IsPresent
            shape       = $Shape
            size        = $Size
            hasCallback = $null -ne $OnClick
            buttonType  = $ButtonType
            block       = $FullWidth.IsPresent
            label       = $Label
            style       = $Style
        }
        $UDAntdButton.PSTypeNames.Insert(0, 'Ant.Design.Button')
        $UDAntdButton

    }
}

<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdButtonGroup {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-button-group"
            id = $Id
            className = $ClassName
            style = $Style
            content = $Content.Invoke()
        }

    }
}


class ChartTitle {
    [bool]$visible
    [string]$text
}

class ChartDescription {
    [bool]$visible
    [string]$text
}

class ChartLabel {
    [bool]$visible
}
function New-UDAntdCalendar {
    [CmdletBinding()]
    [OutputType("Ant.Design.Charts.Calendar")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).guid,
        [Parameter()]
        [ChartTitle]$Title = @{visible = $true; text = "Ant Design Chart Calendar" },
        [Parameter()]
        [ChartDescription]$Description = @{visible = $true; text = "Chart description" },
        [Parameter()]
        [ChartLabel]$Label = @{visible = $true },    
        [Parameter(Mandatory)]
        [scriptblock]$Data,
        [Parameter()]
        [int]$Width = 650,
        [Parameter()]
        [int]$Height = 300,
        [Parameter()]
        [string[]]$Colors = @('#BAE7FF', '#1890FF', '#0050B3'),
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [string]$DataField = "date",
        [Parameter()]
        [string]$ValueField = "commits",
        [Parameter()]
        [string[]]$DateRange = @((Get-Date).ToString("yyyy-MM-dd"), (Get-Date).AddMonths(-6).ToString("yyyy-MM-dd"))
        

    )
    end {

        $DataEndpoint = New-UDEndpoint -Endpoint $Data -Id $Id

        $Colors = ($Colors -join "-").ToString()
        $AntdCalendar = @{
            assetId         = $AssetId
            id              = $Id
            isPlugin        = $true
            type            = "ud-antd-charts-calendar"
            colors          = $Colors[0]
            width           = $Width
            height          = $Height
            label           = $Label
            title           = $Title
            description     = $Description
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            dateField       = $DataField
            valueField      = $ValueField
            dateRange       = $DateRange
        }
        $AntdCalendar.PSTypeNames.Insert(0, "Ant.Design.Charts.Calendar")
        $AntdCalendar
    }
}

function New-UDAntdCard {
    [CmdletBinding(DefaultParameterSetName = "Default")]
    [OutputType('Ant.Design.Card')]
    param(
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [string]$ClassName,
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [object[]]$actions,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [object[]]$Extra,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [object]$Cover,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$Loading,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$Hoverable,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$Bordered,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Grid')]
        [ValidateSet("small", "default")]
        [string]$Size,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [scriptblock]$Content,
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [hashtable]$Style,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [hashtable]$HeadStyle,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [hashtable]$BodyStyle = @{padding = 24 },
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [object]$Title,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [ValidateSet('inner')]
        [string]$Variant,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$IsEndpoint,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Grid')]
        [switch]$AutoRefresh,
        [Parameter(ParameterSetName = 'Meta')]
        [Parameter(ParameterSetName = 'Default')]
        [Parameter(ParameterSetName = 'Tabs')]
        [Parameter(ParameterSetName = 'Grid')]
        [int]$RefreshInterval = 5000,

        [Parameter(ParameterSetName = 'Meta')]
        [object]$MetaTitle,
        [Parameter(ParameterSetName = 'Meta')]
        [object]$MetaDescription,
        [Parameter(ParameterSetName = 'Meta')]
        [object]$MetaAvatar,

        [Parameter(mandatory, ParameterSetName = 'Tabs')]
        [hashtable[]]$Tabs,
        [Parameter(mandatory , ParameterSetName = 'Tabs')]
        [string]$DefaultActiveKey,
        [Parameter(ParameterSetName = 'Tabs')]
        [object]$TabBarExtraContent,
        [Parameter(ParameterSetName = 'Tabs')]
        [int]$TabBarGutter,
        [Parameter(ParameterSetName = 'Tabs')]
        [ValidateSet("top", "bottom", "left", "right")]
        [string]$TabPosition = "top",
        [Parameter(ParameterSetName = 'Tabs')]
        [hashtable]$TabBarStyle,

        [Parameter(mandatory, ParameterSetName = 'Grid')]
        [hashtable[]]$GridCards
    )

    End {

        if ($null -ne $Content) {
            if (-not ($BodyStyle.ContainsKey("padding"))) {
                $BodyStyle.Add("padding", 24)
            }
            if ($IsEndpoint) {
                if ($Content -is [scriptblock]) {
                    $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id 
                    $CardContent = $Content.Invoke()
                }
                elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Content must be a script block or UDEndpoint"
                }
            }
            else {
                $CardContent = $Content.Invoke()
            }
        }
        else {
            $CardContent = @()
        }

        if ($null -ne $MetaTitle) {
            if ($MetaTitle -is [scriptblock]) {
                $MetaTitleContent = $MetaTitle.Invoke()
            }
            else {
                $MetaTitleContent = $MetaTitle
            }
        }

        if ($null -ne $MetaDescription) {
            # $BodyStyle = @{padding = 0}
            if ($MetaDescription -is [scriptblock]) {
                $MetaDescriptionContent = $MetaDescription.Invoke()
            }
            else {
                $MetaDescriptionContent = $MetaDescription
            }
        }

        $UDAntdCard = @{
            # Mandatory properties
            assetId            = $AssetId 
            isPlugin           = $true 
            type               = "ud-antd-card"
            id                 = $Id
            className          = $ClassName
            style              = $Style

            # Properties for all card variants
            actions            = $Actions
            extra              = $Extra
            hoverable          = $Hoverable.IsPresent
            content            = $CardContent  
            bordered           = $Bordered.IsPresent
            loading            = $Loading.IsPresent
            cover              = $Cover
            size               = $Size
            title              = $Title
            headStyle          = $HeadStyle
            bodyStyle          = $BodyStyle
            variant            = $Variant
            isEndpoint         = $IsEndpoint.IsPresent
            autoRefresh        = $AutoRefresh.IsPresent
            refreshInterval    = $RefreshInterval
            parameterSet       = $PSCmdlet.ParameterSetName

            # Properties for card meta
            metaTitle          = $MetaTitleContent
            metaDescription    = $MetaDescriptionContent
            metaAvatar         = $MetaAvatar

            # Properties for card grid
            gridCards          = $GridCards

            # Properties for card tabs
            tabs               = $Tabs
            tabBarExtraContent = $TabBarExtraContent
            defaultActiveKey   = $DefaultActiveKey

        }
        $UDAntdCard.PSTypeNames.Insert(0, 'Ant.Design.Card')
        $UDAntdCard

    }
}


<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> New-UDAntdCarousel
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdCarousel {
    [CmdletBinding()]
    [OutputType("Ant.Design.Carousel")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet('top', 'bottom', 'left', 'right')]
        [string]$DotPosition,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$Autoplay,
        [Parameter()]
        [switch]$Dots,
        [Parameter()]
        [scriptblock]$AfterChange,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )

    End {

        if ($null -ne $Content) {
            $CarouselContentEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id   
        }

        if ( $null -ne $AfterChange) {
            $CarouselAfterChangeEndpoint = New-UDEndpoint -Endpoint $AfterChange -Id ( $Id + "afterChange")
        }

        $AntdCarousel = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-carousel"
            id              = $Id
            dotPosition     = $DotPosition
            dots            = $Dots.IsPresent
            autoplay        = $Autoplay.IsPresent
            style           = $Style
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            hasCallback = $null -ne $AfterChange
        }
        $AntdCarousel.PSTypeNames.Insert(0, "Ant.Design.Carousel")
        $AntdCarousel
    }
}

function New-UDAntdChartCard {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [object]$Action,
        [Parameter()]
        [object]$Total,
        [Parameter()]
        [int]$ContentHeight,
        [Parameter()]
        [object]$Footer,
        [Parameter()]
        [object]$Avatar,
        [Parameter()]
        [switch]$Bordered,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [scriptblock]$Content
    )
    End {

        # $endpointChart = New-UDEndpoint -Id $Id -Endpoint $Content 
        # New-UDEndpoint -Id ("$($Id)-total") -Endpoint $Total | Out-Null

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-chart-card"
            id              = $Id
            title           = $Title
            action          = $Action
            contentHeight   = $ContentHeight
            total           = $Total
            bordered        = $Bordered.IsPresent
            footer          = $Footer
            content         = $Content.Invoke()
            avatar          = $Avatar
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
    }
}
function New-UDAntdChartField {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [object]$Label,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [scriptblock]$Content
    )
    End {

        if($null -ne $Content){
            New-UDEndpoint -Id $Id -Endpoint $Content | out-null
            $EndpointChartField = $Content.Invoke() 
        }

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-chart-field"
            id              = $Id
            content           = $EndpointChartField 
            label           = $Label
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
    }
}
function New-UDAntdChartTrend {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [ValidateSet("up", "down")]
        [string]$Flag,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [switch]$Colorful,
        [Parameter()]
        [switch]$ReverseColor,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [object]$Content
    )
    End {

        # $EndpointChartTrend = New-UDEndpoint -Id $Id -Endpoint $Content 

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-chart-trend"
            id              = $Id
            content         = $Content
            reverseColor    = $ReverseColor.IsPresent
            colorful        = $Colorful.IsPresent
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
    }
}
<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdColumn {
    [CmdletBinding()]
    [OutputType("Ant.Design.Column")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [int]$Offset,
        [Parameter()]
        [int]$Span,
        [Parameter()]
        [int]$Pull,
        [Parameter()]
        [int]$Push,
        [Parameter()]
        [int]$Order,
        [Parameter()]
        [string]$Xs,
        [Parameter()]
        [string]$Sm,
        [Parameter()]
        [string]$Md,
        [Parameter()]
        [string]$Lg,
        [Parameter()]
        [string]$Xl,
        [Parameter()]
        [string]$Xxl,
        [Parameter()]
        [object]$Flex = "auto"
    )

    End {
        $AntdColumn = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-col"
            id       = $Id
            xs       = $Xs
            sm       = $Sm
            md       = $Md
            lg       = $Lg
            xl       = $Xl
            xxl      = $Xxl
            flex     = $Flex
            content  = $Content.Invoke()
        }

        if ($PSBoundParameters.ContainsKey("Span")) {
            $AntdColumn.Add("span", $Span)
            $AntdColumn.Add("offset", $Offset)
            $AntdColumn.Add("order", $Order)
            $AntdColumn.Add("pull", $Pull)
            $AntdColumn.Add("push", $Push)
            $AntdColumn.Remove("Flex")
        }
        $AntdColumn.PSTypeNames.Insert(0, "Ant.Design.Column")
        $AntdColumn
    }
}

function New-UDAntdComment {
    [CmdletBinding()]
    [OutputType('Ant.Design.Comment')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "List of action items rendered below the comment content")]
        [scriptblock]$Actions,
        [Parameter(HelpMessage = "The element to display as the comment avatar - generally an antd Avatar or src.")]
        [object]$Avatar,
        [Parameter(HelpMessage = "The element to display as the comment author")]
        [object]$Author,
        [Parameter(HelpMessage = "The main content of the comment.")]
        [scriptblock]$Message,
        [Parameter(HelpMessage = "The date time to display as string.")]
        [string]$DateTime = (get-date -Format "HH:mm dd/MM/yy"),
        [Parameter(HelpMessage = "Set comment css style.")]
        [hashtable]$Style,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )

    End {
        $Content = @()
        $ReplysEndpoint = New-UDEndpoint -Endpoint { $Content } -Id $id

        $UDAntdComment = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-comment"
            id              = $Id
            key             = (New-Guid).ToString()
            message         = $Message.Invoke()
            avatar          = $Avatar
            style           = $Style
            content         = $Content
            author          = $Author
            actions         = $Actions.Invoke() 
            datetime        = $DateTime
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
        $UDAntdComment.PSTypeNames.Insert(0, 'Ant.Design.Comment')
        $UDAntdComment
    }
}

function New-UDAntdContent {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [hashtable]$Style
    )

    End {
        if ($null -eq  $Content) {
            if ($Content -is [scriptblock]) {
                $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }
    
        $AntdContent = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = 'ud-antd-content'
            id        = $Id
            className = $ClassName
            content   = $Content.Invoke()
            style     = $Style
        }
        $AntdContent.PSTypeNames.Insert(0, 'universaldashboard.antd.content') | Out-Null
        $AntdContent
    }
}
<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdCopyToClipboard {
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
        [ValidateSet("button", "submit", "reset")]
        [string]$HtmlType,
        [Parameter()]
        [string]$Icon,
        [Parameter()]
        [switch]$Loading,
        [Parameter()]
        [ValidateSet("circle", "round")]
        [string]$Shape,
        [Parameter()]
        [ValidateSet("small", "large")]
        [string]$Size,
        [Parameter()]
        [ValidateSet("primary", "ghost", "dashed", "danger", "link")]
        [string]$ButtonType,
        [Parameter()]
        [switch]$FullWidth,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [string]$TextToCopy
    )

    End {

        # if ($null -ne $OnClick) {
        #     if ($OnClick -is [scriptblock]) {
        #         $OnClick = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "onClick")
        #     }
        #     elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
        #         throw "OnClick must be a script block or UDEndpoint"
        #     }
        # }

        @{
            assetId    = $AssetId 
            isPlugin   = $true 
            type       = "ud-antd-copy-button"
            id         = $Id
            className  = $ClassName
            disabled   = $Disabled.IsPresent
            ghost      = $Ghost.IsPresent
            htmlType   = $HtmlType
            icon       = $Icon
            shape      = $Shape
            size       = $Size
            buttonType = $ButtonType
            block      = $FullWidth.IsPresent
            label      = $Label
            textToCopy = $TextToCopy
            style      = $Style
        }

    }
}

<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Title
Parameter description

.PARAMETER OnFinish
Parameter description

.PARAMETER Prefix
Parameter description

.PARAMETER Suffix
Parameter description

.PARAMETER Format
Parameter description

.PARAMETER ValueStyle
Parameter description

.PARAMETER Value
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdCountdown {
    [CmdletBinding()]
    [OutputType("Ant.Design.Countdown")]
    param(
        [Parameter( HelpMessage = "Id for the component")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter( HelpMessage = "Display title")]
        [string]$Title,
        [Parameter( HelpMessage = "Trigger when time's up")]
        [scriptblock]$OnFinish,
        [Parameter( HelpMessage = "prefix node of value")]
        [object]$Prefix,
        [Parameter( HelpMessage = "suffix node of value")]
        [object]$Suffix,
        [Parameter( HelpMessage = "Format as moment")]
        [string]$Format = 'HH:mm:ss',
        [Parameter( HelpMessage = "Set value css style")]
        [hashtable]$ValueStyle,
        [Parameter( HelpMessage = "Set target countdown time, the value must return an UNIX Epoch time in Milliseconds")]
        [object]$Value
    )

    End {

        if ($null -ne $OnFinish) {
            if ($OnFinish -is [scriptblock]) {
                $OnFinish = New-UDEndpoint -Endpoint $OnFinish -Id ($Id + "onFinish")
            }
            elseif ($OnFinish -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnFinish must be a script block or UDEndpoint"
            }
        }

        $AntdCountdown = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-countdown"
            id          = $Id
            prefix      = $Prefix
            suffix      = $Suffix
            title       = $Title
            value       = $Value
            format      = $Format
            valueStyle  = $ValueStyle
            hasCallback = $null -ne $OnFinish
        }
        $AntdCountdown.PSTypenames.Insert(0, "Ant.Design.Countdown")
        $AntdCountdown
    }
}

function New-AntdDarkModeToggle {
    [CmdletBinding()]
    [OutputType('Ant.Design.DarkModeToggle')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet("small", "default")]
        [string]$Size = "default"

    )
    End {
        $UDAntdDarkModeToggle = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-darkmode-toggle"
            id       = $Id
            size     = $Size
        }
        $UDAntdDarkModeToggle.PSTypeNames.Insert(0, 'Ant.Design.DarkModeToggle')
        $UDAntdDarkModeToggle
        
    }
        
}


function New-UDAntdDivider {
    [CmdletBinding()]
    [OutputType('Ant.Design.Divider')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet("left", "right", "center")]
        [string]$Orientation = "center",
        [Parameter()]
        [switch]$Dashed,
        [Parameter()]
        [switch]$Plain,
        [Parameter()]
        [ValidateSet("horizontal", "vertical")]
        [string]$Variant = "horizontal",
        [Parameter()]
        [hashtable]$Style, 
        [Parameter()]
        [string]$Text 
    )
    End {
        $AntdDivider = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-divider"
            id          = $Id
            dashed      = $Dashed.IsPresent
            className   = $ClassName
            variant     = $Variant
            style       = $Style    
            orientation = $Orientation
            plain       = $Plain.IsPresent
            text        = $Text 
        }
        $AntdDivider.PSTypeNames.Insert(0, 'Ant.Design.Divider')
        $AntdDivider
    }
}
function New-UDAntdDrawer {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$Closable,
        [Parameter()]
        [switch]$DestroyOnClose,
        [Parameter()]
        [switch]$Mask,
        [Parameter()]
        [switch]$MaskClosable,
        [Parameter()]
        [hashtable]$MaskStyle,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [hashtable]$BodyStyle,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$Visible,
        [Parameter()]
        [int]$Width = 640,
        [Parameter()]
        [int]$Height,
        [Parameter()]
        [int]$ZIndex,
        [Parameter()]
        [string]$Level,
        [Parameter()]
        [ValidateSet('top' , 'right' , 'bottom' , 'left')]
        [string]$Placement,
        [Parameter()]
        [scriptblock]$OnClose,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$Push,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [switch]$AutoRefresh
    )

    End {
        
        if ($IsEndpoint.IsPresent) {
            if ($Content -is [scriptblock]) {
                $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }

        if ($null -ne $OnClose) {
            if ($OnClose -is [scriptblock]) {
                $OnCloseEndpoint = New-UDEndpoint -Endpoint $OnClose -Id ($Id + "onClose")
            }
            elseif ($OnClose -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClose must be a script block or UDEndpoint"
            }
        }

        @{
            assetId         = $AssetId
            isPlugin        = $true
            type            = "ud-antd-drawer"
            id              = $Id
            className       = $ClassName
            # closable        = $closable.IsPresent
            # mask            = $mask
            maskStyle       = $maskStyle
            style           = $style
            bodyStyle       = $bodyStyle
            title           = $title
            visible         = $visible.IsPresent
            push            = $Push.IsPresent
            width           = $width
            # height          = $height
            placement       = $placement
            level           = $Level
            content         = $Content.Invoke()
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
    }
}
<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdDropdown {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$OverlayClassName,
        [Parameter()]
        [hashtable]$OverlayStyle,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [PSTypeName('universaldashboard.antd.menu')]$Menu,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [switch]$Visible,
        [Parameter()]
        [scriptblock]$OnVisibleChange,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [ValidateSet("bottomLeft","bottomCenter","bottomRight","topLeft","topCenter","topRight")]
        [string]$Placement,
        [Parameter()]
        [int[]]$TargetOffset,
        [Parameter()]
        [ValidateSet("hover","click","contextMenu")]
        [string]$Trigger = "hover",
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($IsEndpoint.IsPresent) {
            if ($Content -is [scriptblock]) {
                $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Sizels.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }

        if ($null -ne $OnVisibleChange) {
            if ($OnVisibleChange -is [scriptblock]) {
                $DropdownOnVisibleChange = New-UDEndpoint -Endpoint $OnVisibleChange -Id ($Id + 'onVisibleChange')
            }
        }
        
        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-dropdown"
            id = $Id
            className = $ClassName
            isEndpoint = $IsEndpoint.IsPresent
            autoRefresh = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            overlay = $Menu
            content= $Content.Invoke()
            overlayStyle = $OverlayStyle
            overlayClassName = $OverlayClassName
            disabled = $Disabled.IsPresent
            visible = $Visible.IsPresent
            placement = $Placement
            trigger = $Trigger
            style = $Style
            targetOffset = $TargetOffset
        }

    }
}

function New-UDAntdFooter {
    [CmdletBinding()]
    [OutputType('Ant.Design.Footer')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "justify-content value of columns element.")]
        [ValidateSet("space-around", "space-between")]
        [string]$ColumnLayout = "space-around",
        [Parameter(HelpMessage = "max count of columns for each row.")]
        [int]$MaxColumnsPerRow,
        [Parameter(HelpMessage = "background color of footer.")]
        [string]$BackgroundColor,
        [Parameter(HelpMessage = "extra bottom area beneath footer columns.")]
        [object]$Bottom,
        [Parameter(HelpMessage = "Footers container Columns, it should be FooterColumn using New-UDAntdFooterColumn.")]
        [scriptblock]$Columns,
        [Parameter(HelpMessage = "Is the Columns scriptblock is register as ud endpoint")]
        [switch]$IsEndpoint,
        [Parameter(HelpMessage = "Creates a schedule for an endpoint")]
        [UniversalDashboard.Models.EndpointSchedule]$Schedule,
        [Parameter(HelpMessage = "Set css style on the main container.")]
        [hashtable]$Style
    )

    End {

        if ($null -ne $Columns) {
            if ($IsEndpoint) {
                if ($Columns -is [scriptblock]) {
                    $FooterColumnsEndpoint = New-UDEndpoint -Endpoint $Columns -Id $Id 
                    $FooterColumns = $Columns.Invoke()
                }
                elseif ($Columns -is [scriptblock] -and $PSBoundParameters.ContainsKey('Schedule')) {
                    $FooterColumnsEndpoint = New-UDEndpoint -Endpoint $Columns -Id $Id -Schedule $Schedule
                    $FooterColumns = $Columns.Invoke()
                }
                elseif ($Columns -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Columns must be a script block or UDEndpoint"
                }   
            }
            else {
                $FooterColumns = $Columns.Invoke()
            }
        }

        $UDAntdFooter = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-footer"
            id       = $Id
            key      = (New-Guid).ToString()
            style    = $Style
            content  = $FooterColumns
            columnLayout = $ColumnLayout
            maxColumnsPerRow = $MaxColumnsPerRow
            backgroundColor  = $BackgroundColor
            bottom = $Bottom
        }
        $UDAntdFooter.PSTypeNames.Insert(0, 'Ant.Design.Footer')
        $UDAntdFooter
    }
}

function New-UDAntdFooterColumn {
    [CmdletBinding()]
    [OutputType('Ant.Design.FooterColumn')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "background color of footer.")]
        [string]$Title,
        [Parameter(HelpMessage = "extra bottom area beneath footer columns.")]
        [object]$Icon,
        [Parameter(HelpMessage = "Footers container Columns, it should be FooterColumnItem using New-UDAntdFooterColumnItem.")]
        [scriptblock]$Items,
        [Parameter(HelpMessage = "Is the Columns scriptblock is register as ud endpoint")]
        [switch]$IsEndpoint,
        [Parameter(HelpMessage = "Creates a schedule for an endpoint")]
        [UniversalDashboard.Models.EndpointSchedule]$Schedule,
        [Parameter(HelpMessage = "Set css style on the main container.")]
        [hashtable]$Style
    )

    End {

        if ($null -ne $Items) {
            if ($IsEndpoint) {
                if ($Items -is [scriptblock]) {
                    $FooterColumnItemsEndpoint = New-UDEndpoint -Endpoint $Items -Id $Id 
                    $FooterColumnItems = $Items.Invoke()
                }
                elseif ($Items -is [scriptblock] -and $PSBoundParameters.ContainsKey('Schedule')) {
                    $FooterColumnItemsEndpoint = New-UDEndpoint -Endpoint $Items -Id $Id -Schedule $Schedule
                    $FooterColumnItems = $Items.Invoke()
                }
                elseif ($Items -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Items must be a script block or UDEndpoint"
                }   
            }
            else {
                $FooterColumnItems = $Items.Invoke()
            }
        }
        $UDAntdFooterColumn = @{
            assetId  = $AssetId 
            isPlugin = $true 
            id       = $Id
            key      = (New-Guid).ToString()
            style    = $Style
            icon = $Icon
            title = $Title
            content  = $FooterColumnItems
        }
        $UDAntdFooterColumn.PSTypeNames.Insert(0, 'Ant.Design.FooterColumn')
        $UDAntdFooterColumn
    }
}

function New-UDAntdFooterColumnItem {
    [CmdletBinding()]
    [OutputType('Ant.Design.FooterColumnItem')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "title of column.")]
        [string]$Title,
        [Parameter(HelpMessage = "description of column, come after title.")]
        [string]$Description,
        [Parameter(HelpMessage = "link url of item title.")]
        [string]$Url,
        [Parameter(HelpMessage = "link target would be _blank if openExternal is ture.")]
        [switch]$OpenExternal,
        [Parameter(HelpMessage = "icon that before column title.")]
        [object]$Icon,
        [Parameter(HelpMessage = "style properties of footer.")]
        [hashtable]$Style
    )

    End {
        $UDAntdFooterColumnItem = @{
            assetId  = $AssetId 
            isPlugin = $true 
            id       = $Id
            key      = (New-Guid).ToString()
            style    = $Style
            icon = $Icon
            title = $Title
            description = $Description
            openExternal = $OpenExternal.IsPresent
            url = $Url
        }
        $UDAntdFooterColumnItem.PSTypeNames.Insert(0, 'Ant.Design.FooterColumnItem')
        $UDAntdFooterColumnItem
    }
}

function New-UDAntdForm {
    [CmdletBinding()]
    [OutputType('Ant.Design.Form')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Variant,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$HideRequiredMark,
        [Parameter()]
        [ValidateSet("horizontal", "vertical", "inline")]
        [string]$Layout,
        [Parameter()]
        [ValidateSet("left", "right")]
        [string]$LabelAlign,
        [Parameter()]
        [object]$SubmitButton, 
        [Parameter()]
        [object]$OnSubmit, 
        [Parameter()]
        [object]$OnReset 
    )
    End {
        if ($null -ne $OnSubmit) {
            New-UDEndpoint -Endpoint $OnSubmit -Id ($Id + "onSubmit") | Out-Null
        }
        
        if ($null -ne $OnReset) {
            New-UDEndpoint -Endpoint $OnReset -Id ($Id + "onReset") | Out-Null
        }

        $UDAntdForm = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-form"
            id               = $Id
            submitButton     = $SubmitButton
            # className = $ClassName
            variant          = $Variant
            hideRequiredMark = $HideRequiredMark.IsPresent
            labelAlign       = $LabelAlign
            layout           = $Layout
            content          = $Content.Invoke()
            hasResetCallback = $null -ne $OnReset
        }
        $UDAntdForm.PSTypeNames.Insert(0, 'Ant.Design.Form')
        $UDAntdForm

    }
}



function New-UDAntdFormItem {
    [CmdletBinding()]
    [OutputType('Ant.Design.FormItem')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Name,
        [Parameter()]
        [string]$Message,
        [Parameter()]
        [switch]$Required,
        [Parameter()]
        [switch]$HasFeedback,
        [Parameter()]
        [object]$InitialValue,
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [object]$Content,
        [Parameter()]
        [hashtable[]]$Rules
    )
    End {
        # if ($null -ne $Content) {
        #     if ($Content -is [scriptblock]) {
        #         $Content = New-UDEndpoint -Endpoint $Content -Id ($Id + "Content")
        #     }
        #     elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
        #         throw "Content must be a script block or UDEndpoint"
        #     }
        # }

        $UDAntdFormItem = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-form-item"
            id          = $Id
            # className = $ClassName
            # style = $Style
            name        = $Name
            label       = $Label
            required    = $Required.IsPresent
            hasFeedback = $HasFeedback.IsPresent
            # initialValue = $InitialValue
            rules       = if ($Rules.Length -gt 0) { $Rules }else { $null }
            content     = $Content
            
        }
        $UDAntdFormItem.PSTypeNames.Insert(0, 'Ant.Design.FormItem')
        $UDAntdFormItem

    }
}

<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER UserName
Parameter description

.PARAMETER FullYear
Parameter description

.PARAMETER Years
Parameter description

.PARAMETER Color
Parameter description

.PARAMETER BlockSize
Parameter description

.PARAMETER MarginSize
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdGithubCalendar {
    [CmdletBinding()]
    [OutputType('Ant.Design.Github.Calendar')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(Mandatory)]
        [string]$UserName,
        [Parameter()]
        [switch]$FullYear,
        [Parameter()]
        [int[]]$Years = (Get-Date).Year,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [int]$BlockSize = 12,
        [Parameter()]
        [int]$MarginSize = 2
    )
    End {
        $AntdGithubCalendar = @{
            assetId    = $AssetId 
            isPlugin   = $true 
            type       = "ud-antd-github-calendar"
            id         = $Id
            username   = $UserName
            color      = $Color
            years      = $Years
            blockSize  = $BlockSize
            marginSize = $MarginSize
            fullYear   = $FullYear.IsPresent
        }
        $AntdGithubCalendar.PSTypeNames.Insert(0, 'Ant.Design.Github.Calendar')
        $AntdGithubCalendar
    }
}



function New-UDAntdHeader {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        if ($null -eq  $Content ) {
            throw "Content must NOT be empty."
        }
            
        $AntdHeader = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = 'ud-antd-header'
            id        = $Id
            className = $ClassName
            content   = $Content.Invoke()
            style     = $Style
        }
        $AntdHeader.PSTypeNames.Insert(0, 'universaldashboard.antd.header') | Out-Null
        $AntdHeader
    }
}
function New-UDAntdHeaderAccountSettings {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).guid.toString(),
        [Parameter()]
        [string]$Image,
        [Parameter()]
        [ValidateSet("small", "middle", "large")]
        [string]$Size = "middle",
        [Parameter()]
        [string]$Name,
        [Parameter()]
        [object]$Menu
    )

    End {
        @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-header-account-settings"
            id       = $Id
            image    = $Image
            size     = $Size
            name     = $Name
            menu     = $Menu
        }
    }
}

function New-UDAntdIcon {
    [CmdletBinding()]
    [OutputType("Ant.Design.Icon")]
    param(
        [Parameter()]
        [ValidateSet('AccountBookFilled',
            'AlipayCircleFilled',
            'AlipaySquareFilled',
            'AliwangwangFilled',
            'AlertFilled',
            'AndroidFilled',
            'AmazonCircleFilled',
            'ApiFilled',
            'AppstoreFilled',
            'AmazonSquareFilled',
            'AudioFilled',
            'AppleFilled',
            'BackwardFilled',
            'BankFilled',
            'BellFilled',
            'BehanceCircleFilled',
            'BookFilled',
            'BehanceSquareFilled',
            'BoxPlotFilled',
            'BugFilled',
            'BuildFilled',
            'CalculatorFilled',
            'BulbFilled',
            'CalendarFilled',
            'CarFilled',
            'CaretDownFilled',
            'CaretLeftFilled',
            'CarryOutFilled',
            'CaretRightFilled',
            'CaretUpFilled',
            'CheckSquareFilled',
            'CheckCircleFilled',
            'ChromeFilled',
            'ClockCircleFilled',
            'CiCircleFilled',
            'CloseSquareFilled',
            'CloseCircleFilled',
            'CloudFilled',
            'CodeSandboxSquareFilled',
            'CodeFilled',
            'CameraFilled',
            'CodepenCircleFilled',
            'CodeSandboxCircleFilled',
            'CompassFilled',
            'ContactsFilled',
            'ContainerFilled',
            'CopyFilled',
            'CopyrightCircleFilled',
            'CreditCardFilled',
            'CrownFilled',
            'CodepenSquareFilled',
            'CustomerServiceFilled',
            'DashboardFilled',
            'DiffFilled',
            'DeleteFilled',
            'DingtalkCircleFilled',
            'DatabaseFilled',
            'DingtalkSquareFilled',
            'DislikeFilled',
            'DollarCircleFilled',
            'ControlFilled',
            'DownCircleFilled',
            'DownSquareFilled',
            'DribbbleSquareFilled',
            'DribbbleCircleFilled',
            'EnvironmentFilled',
            'DropboxCircleFilled',
            'ExclamationCircleFilled',
            'EuroCircleFilled',
            'ExperimentFilled',
            'EyeInvisibleFilled',
            'DropboxSquareFilled',
            'EyeFilled',
            'FacebookFilled',
            'EditFilled',
            'FastBackwardFilled',
            'FastForwardFilled',
            'FileExcelFilled',
            'FileAddFilled',
            'FileImageFilled',
            'FileMarkdownFilled',
            'FileExclamationFilled',
            'FilePptFilled',
            'FileUnknownFilled',
            'FileZipFilled',
            'FilePdfFilled',
            'FileWordFilled',
            'FileFilled',
            'FireFilled',
            'FlagFilled',
            'FolderAddFilled',
            'FolderFilled',
            'FolderOpenFilled',
            'FilterFilled',
            'ForwardFilled',
            'FrownFilled',
            'FileTextFilled',
            'FunnelPlotFilled',
            'GiftFilled',
            'GithubFilled',
            'GoldenFilled',
            'GooglePlusCircleFilled',
            'GoogleCircleFilled',
            'GooglePlusSquareFilled',
            'GitlabFilled',
            'GoogleSquareFilled',
            'HddFilled',
            'FundFilled',
            'HighlightFilled',
            'HomeFilled',
            'HourglassFilled',
            'Html5Filled',
            'IdcardFilled',
            'IeSquareFilled',
            'HeartFilled',
            'InfoCircleFilled',
            'IeCircleFilled',
            'InsuranceFilled',
            'InteractionFilled',
            'InterationFilled',
            'LayoutFilled',
            'LeftCircleFilled',
            'LeftSquareFilled',
            'LikeFilled',
            'LockFilled',
            'LinkedinFilled',
            'MailFilled',
            'MedicineBoxFilled',
            'MediumSquareFilled',
            'MehFilled',
            'MessageFilled',
            'MinusCircleFilled',
            'MinusSquareFilled',
            'MobileFilled',
            'MediumCircleFilled',
            'MoneyCollectFilled',
            'PayCircleFilled',
            'PauseCircleFilled',
            'NotificationFilled',
            'InstagramFilled',
            'PhoneFilled',
            'PictureFilled',
            'PieChartFilled',
            'PlaySquareFilled',
            'PlayCircleFilled',
            'PoundCircleFilled',
            'PrinterFilled',
            'PlusCircleFilled',
            'ProfileFilled',
            'ProjectFilled',
            'PushpinFilled',
            'PropertySafetyFilled',
            'QqCircleFilled',
            'PlusSquareFilled',
            'QqSquareFilled',
            'QuestionCircleFilled',
            'ReconciliationFilled',
            'RedEnvelopeFilled',
            'RedditCircleFilled',
            'RedditSquareFilled',
            'RightCircleFilled',
            'RestFilled',
            'ReadFilled',
            'RocketFilled',
            'SafetyCertificateFilled',
            'ScheduleFilled',
            'RightSquareFilled',
            'SecurityScanFilled',
            'SettingFilled',
            'ShopFilled',
            'SketchCircleFilled',
            'SkinFilled',
            'SlackCircleFilled',
            'SketchSquareFilled',
            'ShoppingFilled',
            'SkypeFilled',
            'SlackSquareFilled',
            'SmileFilled',
            'SlidersFilled',
            'SaveFilled',
            'SnippetsFilled',
            'SoundFilled',
            'StarFilled',
            'StepForwardFilled',
            'StopFilled',
            'StepBackwardFilled',
            'TagsFilled',
            'SwitcherFilled',
            'TaobaoCircleFilled',
            'TabletFilled',
            'ThunderboltFilled',
            'TrademarkCircleFilled',
            'TaobaoSquareFilled',
            'ToolFilled',
            'TrophyFilled',
            'TwitterCircleFilled',
            'TwitterSquareFilled',
            'UnlockFilled',
            'UpSquareFilled',
            'UsbFilled',
            'VideoCameraFilled',
            'WarningFilled',
            'UpCircleFilled',
            'WechatFilled',
            'WeiboCircleFilled',
            'WindowsFilled',
            'WalletFilled',
            'WeiboSquareFilled',
            'TagFilled',
            'YoutubeFilled',
            'ZhihuSquareFilled',
            'YuqueFilled',
            'ZhihuCircleFilled',
            'AccountBookOutlined',
            'AlertOutlined',
            'YahooFilled',
            'AlipayCircleOutlined',
            'AliwangwangOutlined',
            'AndroidOutlined',
            'ApiOutlined',
            'AudioOutlined',
            'AppstoreOutlined',
            'AppleOutlined',
            'BackwardOutlined',
            'BankOutlined',
            'BellOutlined',
            'BookOutlined',
            'BehanceSquareOutlined',
            'BoxPlotOutlined',
            'BulbOutlined',
            'CalculatorOutlined',
            'CalendarOutlined',
            'CameraOutlined',
            'CarOutlined',
            'CaretDownOutlined',
            'BuildOutlined',
            'BugOutlined',
            'CaretRightOutlined',
            'CaretLeftOutlined',
            'CarryOutOutlined',
            'CheckSquareOutlined',
            'CheckCircleOutlined',
            'ChromeOutlined',
            'CloudOutlined',
            'CloseCircleOutlined',
            'CaretUpOutlined',
            'CloseSquareOutlined',
            'CodeOutlined',
            'ContainerOutlined',
            'ClockCircleOutlined',
            'ControlOutlined',
            'CopyOutlined',
            'CompassOutlined',
            'CrownOutlined',
            'CreditCardOutlined',
            'CustomerServiceOutlined',
            'DashboardOutlined',
            'DiffOutlined',
            'DeleteOutlined',
            'ContactsOutlined',
            'DatabaseOutlined',
            'DislikeOutlined',
            'DownCircleOutlined',
            'DownSquareOutlined',
            'EditOutlined',
            'DribbbleSquareOutlined',
            'ExperimentOutlined',
            'ExclamationCircleOutlined',
            'CodepenCircleOutlined',
            'EnvironmentOutlined',
            'FacebookOutlined',
            'FastBackwardOutlined',
            'EyeInvisibleOutlined',
            'FastForwardOutlined',
            'FileAddOutlined',
            'EyeOutlined',
            'FileImageOutlined',
            'FileExclamationOutlined',
            'FileExcelOutlined',
            'FilePdfOutlined',
            'FileTextOutlined',
            'FilePptOutlined',
            'FileWordOutlined',
            'FileUnknownOutlined',
            'FileZipOutlined',
            'FileOutlined',
            'FileMarkdownOutlined',
            'FilterOutlined',
            'FireOutlined',
            'FlagOutlined',
            'FolderAddOutlined',
            'FolderOutlined',
            'FrownOutlined',
            'ForwardOutlined',
            'FolderOpenOutlined',
            'FundOutlined',
            'GiftOutlined',
            'FunnelPlotOutlined',
            'GithubOutlined',
            'GitlabOutlined',
            'HddOutlined',
            'HeartOutlined',
            'HourglassOutlined',
            'HighlightOutlined',
            'IdcardOutlined',
            'InfoCircleOutlined',
            'InstagramOutlined',
            'Html5Outlined',
            'HomeOutlined',
            'InteractionOutlined',
            'InterationOutlined',
            'LayoutOutlined',
            'LeftCircleOutlined',
            'LeftSquareOutlined',
            'LinkedinOutlined',
            'LikeOutlined',
            'LockOutlined',
            'MedicineBoxOutlined',
            'MailOutlined',
            'MehOutlined',
            'MessageOutlined',
            'MinusCircleOutlined',
            'InsuranceOutlined',
            'MinusSquareOutlined',
            'MobileOutlined',
            'PayCircleOutlined',
            'PauseCircleOutlined',
            'NotificationOutlined',
            'PhoneOutlined',
            'PictureOutlined',
            'PlaySquareOutlined',
            'MoneyCollectOutlined',
            'PlusCircleOutlined',
            'PlayCircleOutlined',
            'ProfileOutlined',
            'PieChartOutlined',
            'ProjectOutlined',
            'PlusSquareOutlined',
            'PrinterOutlined',
            'PushpinOutlined',
            'PropertySafetyOutlined',
            'ReconciliationOutlined',
            'RestOutlined',
            'ReadOutlined',
            'RocketOutlined',
            'RightSquareOutlined',
            'RightCircleOutlined',
            'SafetyCertificateOutlined',
            'RedEnvelopeOutlined',
            'SaveOutlined',
            'ScheduleOutlined',
            'SecurityScanOutlined',
            'SettingOutlined',
            'ShopOutlined',
            'ShoppingOutlined',
            'SkinOutlined',
            'SkypeOutlined',
            'SlackSquareOutlined',
            'SlidersOutlined',
            'SnippetsOutlined',
            'QuestionCircleOutlined',
            'SmileOutlined',
            'SoundOutlined',
            'StepBackwardOutlined',
            'StopOutlined',
            'SwitcherOutlined',
            'StarOutlined',
            'TabletOutlined',
            'StepForwardOutlined',
            'TaobaoCircleOutlined',
            'TagsOutlined',
            'ToolOutlined',
            'ThunderboltOutlined',
            'TrophyOutlined',
            'UnlockOutlined',
            'TagOutlined',
            'UsbOutlined',
            'UpSquareOutlined',
            'VideoCameraOutlined',
            'UpCircleOutlined',
            'WechatOutlined',
            'WalletOutlined',
            'YahooOutlined',
            'WarningOutlined',
            'WindowsOutlined',
            'YuqueOutlined',
            'YoutubeOutlined',
            'AlignCenterOutlined',
            'AlignLeftOutlined',
            'AlignRightOutlined',
            'AlipayOutlined',
            'AlibabaOutlined',
            'AliyunOutlined',
            'AntCloudOutlined',
            'AmazonOutlined',
            'WeiboSquareOutlined',
            'ApartmentOutlined',
            'AreaChartOutlined',
            'ArrowDownOutlined',
            'ArrowLeftOutlined',
            'ArrowUpOutlined',
            'ArrowRightOutlined',
            'AntDesignOutlined',
            'AuditOutlined',
            'BarChartOutlined',
            'BarsOutlined',
            'BarcodeOutlined',
            'BehanceOutlined',
            'BgColorsOutlined',
            'WeiboCircleOutlined',
            'BlockOutlined',
            'BoldOutlined',
            'BorderLeftOutlined',
            'BorderOuterOutlined',
            'ArrowsAltOutlined',
            'BorderBottomOutlined',
            'BorderInnerOutlined',
            'BorderRightOutlined',
            'BorderHorizontalOutlined',
            'BorderTopOutlined',
            'BorderVerticleOutlined',
            'BranchesOutlined',
            'CiOutlined',
            'CloseOutlined',
            'CloudSyncOutlined',
            'CloudDownloadOutlined',
            'CloudServerOutlined',
            'CloudUploadOutlined',
            'ClusterOutlined',
            'CheckOutlined',
            'CodepenOutlined',
            'CodeSandboxOutlined',
            'ColumHeightOutlined',
            'ColumnWidthOutlined',
            'BorderOutlined',
            'CoffeeOutlined',
            'ColumnHeightOutlined',
            'CopyrightOutlined',
            'DashOutlined',
            'DesktopOutlined',
            'DingdingOutlined',
            'DeploymentUnitOutlined',
            'DisconnectOutlined',
            'DoubleLeftOutlined',
            'DotChartOutlined',
            'DoubleRightOutlined',
            'DownOutlined',
            'DollarOutlined',
            'DownloadOutlined',
            'DribbbleOutlined',
            'EllipsisOutlined',
            'EnterOutlined',
            'DropboxOutlined',
            'EuroOutlined',
            'ExceptionOutlined',
            'DragOutlined',
            'ExclamationOutlined',
            'ExportOutlined',
            'FileDoneOutlined',
            'FallOutlined',
            'FileProtectOutlined',
            'FileSyncOutlined',
            'FileSearchOutlined',
            'FontSizeOutlined',
            'ForkOutlined',
            'FileJpgOutlined',
            'FullscreenExitOutlined',
            'FontColorsOutlined',
            'FullscreenOutlined',
            'GatewayOutlined',
            'GoldOutlined',
            'GoogleOutlined',
            'HeatMapOutlined',
            'GooglePlusOutlined',
            'HistoryOutlined',
            'IeOutlined',
            'ImportOutlined',
            'InboxOutlined',
            'InfoOutlined',
            'FormOutlined',
            'GlobalOutlined',
            'KeyOutlined',
            'ItalicOutlined',
            'LeftOutlined',
            'LaptopOutlined',
            'LinkOutlined',
            'LineHeightOutlined',
            'LineChartOutlined',
            'LoadingOutlined',
            'LoginOutlined',
            'LogoutOutlined',
            'Loading3QuartersOutlined',
            'MediumOutlined',
            'MediumWorkmarkOutlined',
            'ManOutlined',
            'MenuUnfoldOutlined',
            'MenuFoldOutlined',
            'MenuOutlined',
            'MinusOutlined',
            'MonitorOutlined',
            'NumberOutlined',
            'OrderedListOutlined',
            'MoreOutlined',
            'PauseOutlined',
            'PercentageOutlined',
            'PaperClipOutlined',
            'LineOutlined',
            'PicLeftOutlined',
            'PicRightOutlined',
            'PlusOutlined',
            'IssuesCloseOutlined',
            'PoundOutlined',
            'PullRequestOutlined',
            'RadarChartOutlined',
            'QqOutlined',
            'PoweroffOutlined',
            'QuestionOutlined',
            'RadiusBottomleftOutlined',
            'RadiusBottomrightOutlined',
            'RadiusUpleftOutlined',
            'RadiusSettingOutlined',
            'RadiusUprightOutlined',
            'QrcodeOutlined',
            'RedditOutlined',
            'RedoOutlined',
            'ReloadOutlined',
            'RetweetOutlined',
            'PicCenterOutlined',
            'RiseOutlined',
            'RollbackOutlined',
            'RightOutlined',
            'RobotOutlined',
            'SafetyOutlined',
            'SearchOutlined',
            'ScissorOutlined',
            'ShareAltOutlined',
            'ScanOutlined',
            'ShoppingCartOutlined',
            'SelectOutlined',
            'ShakeOutlined',
            'SketchOutlined',
            'ShrinkOutlined',
            'SlackOutlined',
            'SmallDashOutlined',
            'SolutionOutlined',
            'SortDescendingOutlined',
            'SwapLeftOutlined',
            'SwapRightOutlined',
            'StrikethroughOutlined',
            'SortAscendingOutlined',
            'StockOutlined',
            'SyncOutlined',
            'TableOutlined',
            'TeamOutlined',
            'TaobaoOutlined',
            'ToTopOutlined',
            'SwapOutlined',
            'TrademarkOutlined',
            'TwitterOutlined',
            'TransactionOutlined',
            'UndoOutlined',
            'UnorderedListOutlined',
            'UpOutlined',
            'UnderlineOutlined',
            'UserAddOutlined',
            'UserDeleteOutlined',
            'UsergroupAddOutlined',
            'UserOutlined',
            'UploadOutlined',
            'UsergroupDeleteOutlined',
            'VerticalAlignMiddleOutlined',
            'VerticalLeftOutlined',
            'VerticalAlignTopOutlined',
            'WeiboOutlined',
            'VerticalAlignBottomOutlined',
            'WifiOutlined',
            'VerticalRightOutlined',
            'WomanOutlined',
            'ZhihuOutlined',
            'ZoomInOutlined',
            'AccountBookTwoTone',
            'ApiTwoTone',
            'AlertTwoTone',
            'AppstoreTwoTone',
            'AudioTwoTone',
            'BankTwoTone',
            'BellTwoTone',
            'BookTwoTone',
            'BoxPlotTwoTone',
            'BugTwoTone',
            'BulbTwoTone',
            'CalculatorTwoTone',
            'BuildTwoTone',
            'CameraTwoTone',
            'CalendarTwoTone',
            'CarTwoTone',
            'CarryOutTwoTone',
            'CheckCircleTwoTone',
            'ClockCircleTwoTone',
            'CloudTwoTone',
            'CheckSquareTwoTone',
            'CloseCircleTwoTone',
            'CloseSquareTwoTone',
            'CodeTwoTone',
            'CompassTwoTone',
            'ContactsTwoTone',
            'ContainerTwoTone',
            'CopyTwoTone',
            'ControlTwoTone',
            'CreditCardTwoTone',
            'CustomerServiceTwoTone',
            'DeleteTwoTone',
            'CrownTwoTone',
            'DiffTwoTone',
            'DashboardTwoTone',
            'DislikeTwoTone',
            'DownCircleTwoTone',
            'DatabaseTwoTone',
            'DownSquareTwoTone',
            'EnvironmentTwoTone',
            'EditTwoTone',
            'ExclamationCircleTwoTone',
            'ExperimentTwoTone',
            'EyeTwoTone',
            'EyeInvisibleTwoTone',
            'FileAddTwoTone',
            'FileExclamationTwoTone',
            'FileExcelTwoTone',
            'FileImageTwoTone',
            'FileMarkdownTwoTone',
            'FilePdfTwoTone',
            'FilePptTwoTone',
            'FileTextTwoTone',
            'FileUnknownTwoTone',
            'FileWordTwoTone',
            'FileZipTwoTone',
            'FilterTwoTone',
            'FireTwoTone',
            'ZoomOutOutlined',
            'FileTwoTone',
            'FlagTwoTone',
            'FolderTwoTone',
            'FolderAddTwoTone',
            'FolderOpenTwoTone',
            'FrownTwoTone',
            'FundTwoTone',
            'FunnelPlotTwoTone',
            'GiftTwoTone',
            'HeartTwoTone',
            'HddTwoTone',
            'HighlightTwoTone',
            'HomeTwoTone',
            'HourglassTwoTone',
            'Html5TwoTone',
            'InfoCircleTwoTone',
            'IdcardTwoTone',
            'InterationTwoTone',
            'InteractionTwoTone',
            'LeftSquareTwoTone',
            'LayoutTwoTone',
            'LikeTwoTone',
            'LockTwoTone',
            'MehTwoTone',
            'MessageTwoTone',
            'LeftCircleTwoTone',
            'MedicineBoxTwoTone',
            'MinusSquareTwoTone',
            'MinusCircleTwoTone',
            'MailTwoTone',
            'MoneyCollectTwoTone',
            'NotificationTwoTone',
            'PauseCircleTwoTone',
            'PhoneTwoTone',
            'PictureTwoTone',
            'PieChartTwoTone',
            'PlayCircleTwoTone',
            'MobileTwoTone',
            'PlaySquareTwoTone',
            'InsuranceTwoTone',
            'PlusSquareTwoTone',
            'PlusCircleTwoTone',
            'PoundCircleTwoTone',
            'PrinterTwoTone',
            'ProjectTwoTone',
            'ProfileTwoTone',
            'PropertySafetyTwoTone',
            'PushpinTwoTone',
            'ReconciliationTwoTone',
            'QuestionCircleTwoTone',
            'RedEnvelopeTwoTone',
            'RestTwoTone',
            'RightCircleTwoTone',
            'RocketTwoTone',
            'SafetyCertificateTwoTone',
            'ScheduleTwoTone',
            'SaveTwoTone',
            'SecurityScanTwoTone',
            'SettingTwoTone',
            'ShoppingTwoTone',
            'RightSquareTwoTone',
            'ShopTwoTone',
            'SkinTwoTone',
            'SmileTwoTone',
            'SlidersTwoTone',
            'SnippetsTwoTone',
            'SoundTwoTone',
            'StopTwoTone',
            'TabletTwoTone',
            'SwitcherTwoTone',
            'TagTwoTone',
            'StarTwoTone',
            'TagsTwoTone',
            'ThunderboltTwoTone',
            'ToolTwoTone',
            'TrademarkCircleTwoTone',
            'UnlockTwoTone',
            'UpCircleTwoTone',
            'UpSquareTwoTone',
            'TrophyTwoTone',
            'UsbTwoTone',
            'VideoCameraTwoTone',
            'WarningTwoTone',
            'WalletTwoTone',
            'CiTwoTone',
            'CopyrightTwoTone',
            'EuroTwoTone',
            'DollarTwoTone',
            'GoldTwoTone',
            'CanlendarTwoTone'
        )]
        [string]$Icon,
        [Parameter ()]
        [ValidateSet("xs", "sm", "lg", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x")]
        [string]$Size = "sm",
        [Parameter()]
        [object]$OnClick,
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$PrimaryColor
    )

    End {
        
        if ($null -ne $OnClick) {
            if ($OnClick -is [scriptblock]) {
                $OnClickEvent = New-UDEndpoint -Endpoint $OnClick -Id $Id 
            }
            elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        $AntDesignIcon = @{
            assetId      = $AssetId 
            isPlugin     = $true 
            type         = "ud-antd-icon"
            id           = $Id
            name         = $Icon
            isTwoTone    = $Icon.Contains("TwoTone")
            size         = $Size
            hasCallback  = $null -ne $OnClick
            primaryColor = $PrimaryColor
        }
        $AntDesignIcon.PSTypeNames.Insert(0, 'Ant.Design.Icon')
        $AntDesignIcon
    }
}
function New-UDAntdInput {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [switch]$AllowClear,
        [Parameter()]
        [ValidateSet("default","small","large")]
        [string]$size,
        [Parameter()]
        [object]$Suffix,
        [Parameter()]
        [object]$Prefix,
        [Parameter()]
        [object]$AddonBefore,
        [Parameter()]
        [object]$AddonAfter,
        [Parameter()]
        [string]$PlaceHolder,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-input"
            disabled = $Disabled.IsPresent
            allowClear = $AllowClear.IsPresent
            size = $Size
            prefix = $Prefix
            suffix = $Suffix
            addonBefore = $AddonBefore
            addonAfter = $AddonAfter
            placeholder = $PlaceHolder
            style = $Style
        }

    }
}

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

function New-UDAntdInputPassword {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [scriptblock]$OnPressEnter,
        [Parameter()]
        [string]$PlaceHolder,
        [Parameter()]
        [string]$Pattern,
        [Parameter()]
        [switch]$VisibilityToggle,
        [Parameter()]
        [switch]$Required ,
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
            type = "ud-antd-input-password"
            id = $Id
            className = $ClassName
            disabled = $Disabled.IsPresent
            visibilityToggle = $VisibilityToggle.IsPresent
            pattern = $Pattern
            placeholder = $PlaceHolder
            required = $Required.IsPresent
            style = $Style
        }

    }
}

function New-UDAntdLayout {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$HasSider,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        # if($null -ne $Content ){
        #     $LayoutContent = $Content.Invoke()
        #     $LayoutContent | ForEach-Object {
        #         if($_.type -notmatch "universaldashboard.antd.[layout|header|footer|sider|content]" ){
        #             throw "Layout Content must be New-UDAntdLayout, New-UDAntdHeader, New-UDAntdSider, New-UDAntdContent, New-UDAntdFooter"
        #         }
        #     }
        # }
        $AntdLayout = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = 'ud-antd-layout'
            id = $Id
            className = $ClassName
            hasSider = $HasSider.IsPresent
            content = $Content.Invoke()
            style = $Style
        }
        $AntdLayout.PSTypeNames.Insert(0, 'universaldashboard.antd.layout') | Out-Null
        $AntdLayout
    }
}
<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdList {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$bordered,
        [Parameter()]
        $footer,
        [Parameter()]
        $grid,
        [Parameter()]
        [object]$header,
        [Parameter()]
        [ValidateSet('horizontal', 'vertical')]
        [string]$itemLayout,
        [Parameter()]
        [string]$rowKey,
        [Parameter()]
        [switch]$loading,
        [Parameter()]
        [switch]$loadMore,
        [Parameter()]
        [string]$locale,
        [Parameter()]
        [switch]$pagination,
        [Parameter()]
        [switch]$split,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [scriptblock]$renderItem,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($null -ne $Content) {
            if ($Content -is [scriptblock]) {
                $dataSourceEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Sizels.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }
        

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-list"
            id              = $Id
            className       = $ClassName
            style           = $Style
            bordered        = $bordered.IsPresent
            footer          = $footer
            grid            = $grid
            header          = $header
            itemLayout      = $itemLayout
            rowKey          = $rowKey
            loading         = $loading.IsPresent
            loadMore        = $loadMore.IsPresent
            pagination      = $pagination.IsPresent
            split           = $split.IsPresent
            content         = $Content.Invoke()
            renderItem      = $renderItem
            isEndpoint      = $IsEndpoint.IsPresent
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }

    }
}

<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdListItem {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [scriptblock]$Actions,
        [Parameter()]
        [scriptblock]$Extra,
        [Parameter()]
        [object]$Avatar,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$Description,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($IsEndpoint.IsPresent) {
            if ($Content -is [scriptblock]) {
                $Content = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Sizels.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }
        elseif ($null -ne $Content) {
            $ListItemContent = $Content.Invoke()
        }
        else{
            $ListItemContent = $Content
        }

        if($null -ne $Actions){
            $ListItemActions = $Actions.Invoke()
        }else{
            $ListItemActions = $null
        }

        if($null -ne $Extra){
            $ListItemExtra = $Extra.Invoke()
        }else{
            $ListItemExtra = $null
        }
        

        @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-list-item"
            id              = $Id
            className       = $ClassName
            style = $Style
            itemLayout = $itemLayout
            avatar = $Avatar
            title = $Title
            description = $Description
            content = $ListItemContent
            isEndpoint = $IsEndpoint.IsPresent
            autoRefresh = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            actions = $ListItemActions
            extra = $ListItemExtra
        }

    }
}

function New-UDAntdMenu {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [ValidateSet("horizontal","vertical","inline")]
        [string]$Mode = "horizontal",
        [Parameter()]
        [ValidateSet("hover","click")]
        [string]$TriggerSubMenuAction = "click",
        [Parameter()]
        [string[]]$DefaultOpenKeys,
        [Parameter()]
        [string]$DefaultSelectedKeys,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        $AntdMenu = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-menu"
            id = $Id
            # className = $ClassName
            mode = $Mode
            triggerSubMenuAction = $TriggerSubMenuAction
            defaultOpenKeys      = $DefaultOpenKeys
            defaultSelectedKeys  = $DefaultSelectedKeys
            # inlineCollapsed = $Collapsed.IsPresent
            # key = $Key
            content = $Content.Invoke()
            # style = $Style
        }
        $AntdMenu.PSTypeNames.Insert(0, "universaldashboard.antd.menu") | Out-Null
        $AntdMenu
    }
}

function New-UDAntdMenuDivider {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [hashtable]$Style
    )

    End {
        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-menu-divider"
            id = $Id
            className = $ClassName
            style = $Style            # icon = $Icon
        }
    }
}

function New-UDAntdMenuItem {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$Key,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [string]$Text,
        [Parameter()]
        [object]$OnClick,
        [Parameter()]
        [int]$InlineIndent,
        [Parameter()]
        [string]$To,
        [Parameter()]
        [object]$Content
    )

    End {

        if ($null -ne $OnClick) {
            if ($OnClick -is [scriptblock]) {
                $OnClickEvent = New-UDEndpoint -Endpoint $OnClick -Id ($Id + "onClick")
            }
            elseif ($OnClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        if ($null -eq $Key) {
            $Key = $Id
        }
        
        @{
            assetId      = $AssetId 
            isPlugin     = $true 
            type         = "ud-antd-menu-item"
            id           = $Id
            style        = $Style
            disabled     = $Disabled.IsPresent
            title        = $Title
            key          = $key
            icon         = $Icon
            inlineIndent = $InlineIndent
            to           = $To
            text         = $Text
            content      = $Content
        }

    }
}

function New-UDAntdMenuItemGroup {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$Key,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [Hashtable]$Style
    )

    End {
        if($null -eq $Key){
            $Key = $Id
        }
        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-menu-item-group"
            id = $Id
            className = $ClassName
            title = $Title
            key = $key
            style = $Style
            content = $Content.Invoke()
        }

    }
}

function New-UDAntdMessage {
    [CmdletBinding()]
    [OutputType('Ant.Design.Message')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Key = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "How long the Message will appear in seconds, if set to 0 will not disapear.")]
        [int]$Duration,
        [Parameter(HelpMessage = "Custom icon for the Message.")]
        [object]$Icon,
        [Parameter(HelpMessage = "Message Content.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [object]$OnClose,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [hashtable]$Style,
        [Parameter(HelpMessage = "Set Message with buildin icon.")]
        [ValidateSet("success", "error", "warning", "info","loading")]
        [string]$Preset,
        [Parameter(HelpMessage = "Display the Message")]
        [switch]$Visible
    )

    End {

        if ($null -ne $OnClose) {
            if ($OnClose -is [scriptblock]) {
                $OnCloseEndpoint = New-UDEndpoint -Endpoint $OnClose -Id ($Id + "onClose") 
            }
            elseif ($OnClose -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClose must be a script block or UDEndpoint"
            }   
        }

        if ($null -ne $Content) {
            if ($Content -is [scriptblock]) {
                $ContenteEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }   
        }

        $UDAntdMessage = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-message"
            id          = $Id
            key         = $Key
            content     = $Content.Invoke()
            duration    = $Duration
            className   = $ClassName
            icon        = $Icon
            style       = $Style
            hasCallback = $null -ne $OnClose
            preset      = $Preset
            visible     = $Visible.IsPresent
        }
        $UDAntdMessage.PSTypeNames.Insert(0, 'Ant.Design.Message')
        $UDAntdMessage
    }
}

function New-UDAntdChartMiniProgress {
    [CmdletBinding()]
    [OutputType('Ant.Design.Charts#MiniProgressBar')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [scriptblock]$Value,
        [Parameter()]
        [int]$StrokeWidth,
        [Parameter()]
        [string]$Color,
        [Parameter()]
        [int]$Target,
        [Parameter()]
        [string]$TargetLabel,
        [Parameter()]
        [scriptblock]$OnChange,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )
    End {
        
        $ProgressEndpoint = New-UDEndpoint -Endpoint $Value -Id $Id 
        $ProgressOnChangeEndpoint = New-UDEndpoint -Endpoint $OnChange -Id ( $Id + "onChange" )

        $AntdMiniProgressBar = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-chart-mini-progress-bar"
            id              = $Id
            strokeWidth     = $StrokeWidth
            color           = $Color
            target          = $Target
            targetLabel     = $TargetLabel
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
        $AntdMiniProgressBar.PSTypeNames.Insert(0, 'Ant.Design.Charts#MiniProgressBar')
        $AntdMiniProgressBar
    }
}
function New-UDAntdMiniRingProgress {
    [CmdletBinding()]
    [OutputType("Ant.Design.Chart#MiniRingProgress")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).Guid.ToString(),
        [Parameter()]
        [int]$Percent = 0,
        [Parameter()]
        [int]$Width = 100,
        [Parameter()]
        [string[]]$Color = @("#30BF78", "#E8EDF3"),
        [Parameter()]
        [int]$Height = 100
    )
    End {
        $MiniRingProgress = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-chart-mini-ring-progress"
            id       = $Id
            percent  = $Percent / 100.0
            width    = $Width
            color    = $Color
            height   = $Height
        }
        $MiniRingProgress.PSTypeNames.Insert(0, "Ant.Design.Chart#MiniRingProgress")
        $MiniRingProgress
    }
}
function New-UDAntdNavigationItem {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).guid.toString(),
        [Parameter()]
        [string]$Key = (New-Guid).guid.toString(),
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [string]$To,
        [Parameter()]
        [string]$Title
    )

    End {
        @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-navigation-item"
            id       = $Id
            key      = $Key
            icon     = $Icon
            title    = $Title
            to       = $To
        }
    }
}
function New-UDAntdNotification {
    [CmdletBinding()]
    [OutputType('Ant.Design.Notification')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$UpdateKey = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "Add custom close button to the notification.")]
        [object]$CustomCloseButton,
        [Parameter(HelpMessage = "How long the notification will appear in seconds, if set to 0 will not disapear.")]
        [int]$Duration = 4.5,
        [Parameter(HelpMessage = "Custom icon for the notification.")]
        [object]$Icon,
        [Parameter(HelpMessage = "Notification description.")]
        [object]$Description,
        [Parameter(HelpMessage = "The notification title.")]
        [object]$Title,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [object]$OnClose,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [hashtable]$Style,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [hashtable]$TitleStyle,
        [Parameter(HelpMessage = "Set notification position.")]
        [ValidateSet("topLeft", "topRight", "bottomLeft", "bottomRight")]
        [string]$Placement = "topRight",
        [Parameter(HelpMessage = "Set notification with buildin icon.")]
        [ValidateSet("success", "error", "warning", "info")]
        [string]$Preset = "info",
        [Parameter(HelpMessage = "Display the notification")]
        [switch]$Visible
    )

    End {

        if ($null -ne $OnClose) {
            if ($OnClose -is [scriptblock]) {
                $OnCloseEndpoint = New-UDEndpoint -Endpoint $OnClose -Id ($Id + "onClose") 
            }
            elseif ($OnClose -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClose must be a script block or UDEndpoint"
            }   
        }

        $UDAntdNotification = @{
            assetId           = $AssetId 
            isPlugin          = $true 
            type              = "ud-antd-notification"
            id                = $Id
            updateKey         = $UpdateKey
            message           = $Title
            description       = $Description
            placement         = $Placement
            duration          = $Duration
            customCloseButton = $CustomCloseButton
            className         = $ClassName
            icon              = $Icon
            style             = $Style
            titleStyle        = $TitleStyle
            hasCallback       = $null -ne $OnClose
            preset            = $Preset
            visible           = $Visible.IsPresent
        }
        $UDAntdNotification.PSTypeNames.Insert(0, 'Ant.Design.Notification')
        $UDAntdNotification
    }
}


function New-UDAntdPageHeader {
    [CmdletBinding()]
    [OutputType('Ant.Design.Page.Header')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(
            HelpMessage = "PageHeader type, will change background color"
        )]
        [switch]$Ghost,
        [Parameter(
            HelpMessage = "Avatar next to the title bar"
        )]
        [object]$Avatar,
        [Parameter(
            HelpMessage = "Custom title text"
        )]
        [string]$Title,
        [Parameter(
            HelpMessage = "Custom subtitle text"
        )]
        [string]$SubTitle,
        [Parameter(
            HelpMessage = "Tag list next to title"
        )]
        [object[]]$Tags,
        [Parameter(
            HelpMessage = "Operating area, at the end of the line of the title line"
        )]
        [object[]]$Extra,
        [Parameter(
            HelpMessage = "PageHeader's footer, generally used to render TabBar"
        )]
        [object]$Footer,
        [Parameter(
            HelpMessage = "Breadcrumb configuration"
        )]
        [object]$Breadcrumb,
        [Parameter(
            HelpMessage = "Custom back icon, if false the back icon will not be displayed"
        )]
        [object]$BackIcon
    )
    End {        
        $UDAntdPageHeader = @{
            assetId    = $AssetId 
            isPlugin   = $true 
            type       = "ud-antd-page-header"
            id         = $Id
            footer     = $Footer
            extra      = $Extra
            tags       = $Tags
            backIcon   = $BackIcon
            avatar     = $Avatar
            title      = $Title
            subTitle   = $SubTitle
            breadcrumb = $Breadcrumb
            ghost      = $Ghost.IsPresent
        }
        $UDAntdPageHeader.PSTypeNames.Insert(0, 'Ant.Design.Page.Header')
        $UDAntdPageHeader

    }
}


<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdPopConfirm {
    [CmdletBinding(DefaultParameterSetName = "Default")]
    [OutputType("Ant.Design.PopConfirm")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [scriptblock]$OnConfirm,
        [Parameter()]
        [scriptblock]$OnCancel,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$OkText = "OK",
        [Parameter()]
        [string]$CancelText = "Cancel",
        [Parameter()]
        [object]$Content,
        [Parameter()]
        [switch]$Disabled
    )

    End {

        if ($Null -ne $OnConfirm) {
            $OnConfirmEndpoint = New-UDEndpoint -Endpoint $OnConfirm -Id ( $Id + "onConfirm" )
        }

        if ($Null -ne $OnCancel) {
            $OnCancelEndpoint = New-UDEndpoint -Endpoint $OnCancel -Id ( $Id + "onCancel" )
        }

        $AntdPopConfirm = @{
            assetId    = $AssetId 
            isPlugin   = $true 
            type       = "ud-antd-popconfirm"
            id         = $Id
            title      = $Title
            content    = $Content
            okText     = $OkText
            cancelText = $CancelText
            icon       = $Icon
            
            disabled   = $Disabled.IsPresent
        }
        $AntdPopConfirm.PSTypeNames.Insert(0, 'Ant.Design.PopConfirm')
        $AntdPopConfirm
    }
}

function New-UDAntdPopover {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [scriptblock]$Title,
        [Parameter()]
        [ValidateSet("top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom")]
        [string]$Placement,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [scriptblock]$Children,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        if($null -ne $Title){
            $PopoverTitle = $Title.Invoke()
        }else {
            $PopoverTitle = $null
        }

        $AntdPopover = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-popover"
            id = $Id
            className = $ClassName
            title = $PopoverTitle
            placement = $Placement
            key = $Id
            content = $Content.Invoke()
            children = $Children.Invoke()
            style = $Style
        }
        $AntdPopover.PSTypeNames.Insert(0, "universaldashboard.antd.popover") | Out-Null
        $AntdPopover
    }
}


function New-UDAntdRadio {
    param(
        [Parameter ()]
        [scriptblock]$Content,
        [Parameter ()]
        [string]$Value,
        [Parameter()]
        [switch]$DefaultChecked,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName

    )

    End {
        @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-radio"
            id        = $Id
            disabled  = $Disabled.IsPresent
            content   = $Content.Invoke()
            value     = $Value
        }

    }
}

function New-UDAntdRadioButton {
    param(
        [Parameter ()]
        [scriptblock]$Content,
        [Parameter ()]
        [string]$Value,
        [Parameter()]
        [switch]$DefaultChecked,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName

    )

    End {
        @{
            assetId        = $AssetId 
            isPlugin       = $true 
            type           = "ud-antd-radio-button"
            id             = $Id
            defaultChecked = $DefaultChecked.IsPresent
            disabled       = $Disabled.IsPresent
            content        = $Content.Invoke()
            value          = $Value
        }
    }
}

function New-UDAntdRadioGroup {
    param(
        [Parameter ()]
        [scriptblock]$Content,
        [Parameter ()]
        [object]$OnChange,
        [Parameter ()]
        [string]$Value,
        [Parameter ()]
        [string]$Name,
        [Parameter ()]
        [string]$DefaultValue,
        [Parameter ()]
        [ValidateSet("large", "default", "small")]
        [string]$Size,
        [Parameter ()]
        [ValidateSet("outline", "solid")]
        [string]$ButtonStyle,
        [Parameter()]
        [switch]$Checked,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName

    )

    End {
        if ($null -ne $onChange) {
            if ($onChange -is [scriptblock]) {
                $onChange = New-UDEndpoint -Endpoint $onChange -Id ($Id + "onChange")
            }
            elseif ($onChange -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        @{
            assetId      = $AssetId 
            isPlugin     = $true 
            type         = "ud-antd-radio-group"
            id           = $Id
            # className    = $ClassName
            disabled     = $Disabled.IsPresent
            content      = $Content.Invoke()
            value        = $Value
            # style        = $Style
            size         = $Size
            name         = $Name
            buttonStyle  = $ButtonStyle
            defaultValue = $DefaultValue
        }

    }
}
function New-UDAntdResult {
    [CmdletBinding()]
    [OutputType('Ant.Design.ResultPage')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet('success', 'error', 'info', 'warning', '404', '403', '500')]
        [string]$Status = "404",
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [string]$SubTitle,
        [Parameter()]
        [object]$Icon,
        [Parameter()]
        [object]$Extra
    )
    End {

        $UDAntdResult = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-result"
            id       = $Id
            title    = $Title
            subTitle = $SubTitle
            status   = $Status
            icon     = $Icon
            extra    = $Extra
        }
        $UDAntdResult.PSTypeNames.Insert(0, 'Ant.Design.ResultPage')
        $UDAntdResult
    }
}
function New-UDAntdRoute {
    [CmdletBinding()]
    [OutputType('Ant.Design.Route')]
    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string[]]$Path,
        [Parameter()]
        [switch]$Exact,
        [Parameter(ParameterSetName = 'Content')]
        [object]$Content
    )
    End {
        
        $UDAntdRoute = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-route"
            id       = $Id
            path     = $Path
            content  = $Content
            exact    = $Exact.IsPresent
        }
        $UDAntdRoute.PSTypeNames.Insert(0, 'Ant.Design.Route')
        $UDAntdRoute
    }
}

function New-UDAntdRow {
    [CmdletBinding()]
    [OutputType("Ant.Design.Row")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [ValidateSet("top", "middle", "bottom")]
        [string]$Align,
        [Parameter()]
        [int[]]$Gutter = @(0),
        [Parameter()]
        [ValidateSet("start", "end", "center", "space-around", "space-between")]
        [string]$Justify
    )

    End {
        $AntdRow = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-row"
            id        = $Id
            gutter    = $Gutter
            align     = $Align
            justify   = $Justify
            content   = $Content.Invoke()
        }
        $AntdRow.PSTypeNames.Insert(0, "Ant.Design.Row")
        $AntdRow
    }
}

function New-UDAntdSideBar {
    [CmdletBinding()]
    [OutputType('Ant.Design.SideBar')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Key = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "reverse direction of arrow, for a sider that expands from the right")]
        [switch]$ReverseArrow,
        [Parameter(HelpMessage = "width of the collapsed sidebar, by setting to 0 a special trigger will appear")]
        [int]$CollapsedWidth = 80,
        [Parameter(HelpMessage = "color theme of the sidebar.")]
        [ValidateSet("light", "dark")]
        [string]$Theme = "light",
        [Parameter(HelpMessage = "specify the customized trigger, set to null to hide the trigger")]
        [object]$Trigger,
        [Parameter(HelpMessage = "width of the sidebar.")]
        [int]$Width = 200,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [hashtable]$Style,
        [Parameter(HelpMessage = "SideBar content it usally a menu componen.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "Set if sidebar is visible or not")]
        [switch]$Visible
    )

    End {

        if ($null -ne $Content) {
            if ($Content -is [scriptblock]) {
                $ContentEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }   
        }

        $UDAntdSider = @{
            assetId        = $AssetId 
            isPlugin       = $true 
            type           = "ud-antd-sidebar"
            id             = $Id
            key            = $Key
            # trigger        = $Trigger
            theme          = $Theme
            collapsedWidth = $CollapsedWidth
            width          = $Width
            reverseArrow   = $ReverseArrow.IsPresent
            className      = $ClassName
            style          = $Style
            hasCallback    = $null -ne $Content
            content        = $Content.Invoke()
            visible        = $Visible.IsPresent
        }
        $UDAntdSider.PSTypeNames.Insert(0, 'Ant.Design.SideBar')
        $UDAntdSider
    }
}

function New-UDAntdSider {
    [CmdletBinding()]
    [OutputType('Ant.Design.Sider')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Key = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "reverse direction of arrow, for a sider that expands from the right")]
        [switch]$ReverseArrow,
        [Parameter(HelpMessage = "width of the collapsed sidebar, by setting to 0 a special trigger will appear")]
        [int]$CollapsedWidth = 80,
        [Parameter(HelpMessage = "color theme of the sidebar.")]
        [ValidateSet("light", "dark")]
        [string]$Theme = "light",
        [Parameter(HelpMessage = "specify the customized trigger, set to null to hide the trigger")]
        [object]$Trigger,
        [Parameter(HelpMessage = "width of the sidebar.")]
        [int]$Width = 200,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [hashtable]$Style,
        [Parameter(HelpMessage = "SideBar content it usally a menu componen.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "Set if sidebar is visible or not")]
        [switch]$Visible
    )

    End {

        if ($null -ne $Content) {
            if ($Content -is [scriptblock]) {
                $ContentEndpoint = New-UDEndpoint -Endpoint $Content -Id ($Id + "Content") 
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }   
        }

        $UDAntdSider = @{
            assetId        = $AssetId 
            isPlugin       = $true 
            type           = "ud-antd-sider"
            id             = $Id
            key            = $Key
            # trigger        = $Trigger
            theme          = $Theme
            collapsedWidth = $CollapsedWidth
            width          = $Width
            reverseArrow   = $ReverseArrow.IsPresent
            className      = $ClassName
            style          = $Style
            hasCallback    = $null -ne $Content
            content = $Content.Invoke()
            visible = $Visible.IsPresent
        }
        $UDAntdSider.PSTypeNames.Insert(0, 'Ant.Design.Sider')
        $UDAntdSider
    }
}

function New-UDAntdSlider {
    [CmdletBinding()]
    [OutputType('Ant.Design.Slider')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "If true, the slider will not be interactable")]
        [switch]$Disabled,
        [Parameter(HelpMessage = "Whether the thumb can drag over tick only")]
        [switch]$Dots,
        [Parameter(HelpMessage = "Make effect when marks not null, true means containment and false means coordinative")]
        [switch]$Included,
        [Parameter(HelpMessage = "Tick mark of Slider, type of key must be number, and must in closed interval [min, max], each mark can declare its own style. example: @{0 = '0°C'} or @{100 = @{style =  @{color = 'red'}; label = '100°C'}}")]
        [hashtable]$Marks,
        [Parameter(HelpMessage = "The maximum value the slider can slide to.")]
        [int]$Max = 100,
        [Parameter(HelpMessage = "The minimum value the slider can slide to.")]
        [int]$Min = 0,
        [Parameter(HelpMessage = "dual thumb mode")]
        [switch]$Range,
        [Parameter(HelpMessage = "could be set as true to allow those handles to cross.")]
        [switch]$AllowCross,
        [Parameter(HelpMessage = "could be set as true to allow pushing of surrounding handles when moving a handle. When set to a number, the number will be the minimum ensured distance between handles.")]
        [switch]$Pushable,
        [Parameter(HelpMessage = "The default value of slider. When range is false, use number, otherwise, use @(0, 30)")]
        [int[]]$DefaultValue,
        [Parameter(HelpMessage = "reverse the component")]
        [switch]$Reverse,
        [Parameter(HelpMessage = "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min).")]
        [int]$Step = 1,
        [Parameter(HelpMessage = "Add icon before the slider.")]
        [object]$BeforeIcon,
        [Parameter(HelpMessage = "Add icon after the slider.")]
        [object]$AfterIcon,
        [Parameter(HelpMessage = "If true, the slider will be vertical.")]
        [switch]$Vertical,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [object]$OnChange,
        [Parameter(HelpMessage = "Set Tooltip display position.")]
        [ValidateSet("top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom")]
        [string]$TooltipPlacement,
        [Parameter(HelpMessage = "If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering.")]
        [switch]$TooltipVisible,
        [Parameter(HelpMessage = "For styling the track line.")]
        [hashtable]$TrackStyle,
        [Parameter(HelpMessage = "For styling the rail line.")]
        [hashtable]$RailStyle,
        [Parameter(HelpMessage = "For styling the handle circle.")]
        [hashtable]$HandleStyle,
        [Parameter(HelpMessage = "For styling the dot circle only visible if dots switch is used.")]
        [hashtable]$DotStyle,
        [Parameter(HelpMessage = "The style used for the active dots.")]
        [hashtable]$ActiveDotStyle
    )

    End {

        if ($null -ne $OnChange) {
            if ($OnChange -is [scriptblock]) {
                $OnChangeEndpoint = New-UDEndpoint -Endpoint $OnChange -Id ($Id + "onChange") 
            }
            elseif ($OnChange -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnChange must be a script block or UDEndpoint"
            }   
        }

        $UDAntdSlider = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-slider"
            id               = $Id
            className        = $ClassName
            marks            = $Marks
            max              = $Max
            min              = $Min
            disabled         = $Disabled.IsPresent
            dots             = $Dots.IsPresent
            included         = $Included.IsPresent
            range            = $Range.IsPresent
            reverse          = $Reverse.IsPresent
            vertical         = $Vertical.IsPresent
            defaultValue     = $DefaultValue
            step             = $Step
            beforeIcon       = $BeforeIcon
            afterIcon        = $AfterIcon
            # isEndpoint = $IsEndpoint
            # onChange = $OnChange
            # Schedule = $Schedule
            hasCallback      = $null -ne $OnChange
            tooltipPlacement = $TooltipPlacement
            tooltipVisible   = $TooltipVisible.IsPresent
            trackStyle       = $TrackStyle
            railStyle        = $RailStyle
            handleStyle      = $HandleStyle
            dotStyle         = $DotStyle
            activeDotStyle   = $ActiveDotStyle
            allowCross       = $AllowCross.IsPresent
            pushable         = $Pushable.IsPresent
        }
        $UDAntdSlider.PSTypeNames.Insert(0, 'Ant.Design.Slider')
        $UDAntdSlider
    }
}

<#
.SYNOPSIS
    Space component for universal dashboard
.DESCRIPTION
    Avoid components clinging together and set a unified space
.EXAMPLE
    PS C:\> 
    Explanation of what the example does
.OUTPUTS
    Ant.Design.Space
.NOTES
    
#>
function New-UDAntdSpace {
    [CmdletBinding()]
    [OutputType("Ant.Design.Space")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet("start", "end", "center", "baseline")]
        [string]$Align = "center",
        [Parameter()]
        [ValidateSet("vertical", "horizontal")]
        [string]$Direction = "horizontal",
        [Parameter()]
        [ValidateSet("small", "middle", "large")]
        [string]$Size = "middle",
        [Parameter(Mandatory)]
        [scriptblock]$Content
    )

    End {
        $AntdSpace = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-space"
            id        = $Id
            align     = $Align
            direction = $Direction
            size      = $Size
            content = $Content.Invoke()
        }
        $AntdSpace.PSTypenames.Insert(0, "Ant.Design.Space")
        $AntdSpace
    }
}

<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER DecimalSeparator
Parameter description

.PARAMETER GroupSeparator
Parameter description

.PARAMETER Title
Parameter description

.PARAMETER Precision
Parameter description

.PARAMETER Suffix
Parameter description

.PARAMETER Prefix
Parameter description

.PARAMETER ValueStyle
Parameter description

.PARAMETER Value
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
function New-UDAntdStatistic {
    [CmdletBinding()]
    [OutputType("Ant.Design.Statistic")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$DecimalSeparator,
        [Parameter()]
        [string]$GroupSeparator,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [int]$Precision,
        [Parameter()]
        [object]$Suffix,
        [Parameter()]
        [object]$Prefix,
        [Parameter()]
        [hashtable]$ValueStyle,
        [Parameter()]
        [scriptblock]$Value,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )

    End {

        if ($null -ne $Value) {
            $StatsEndpoint = New-UDEndpoint -Endpoint $Value -Id $id
        }

        $AntdStatistic = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-statistic"
            id               = $Id
            prefix           = $Prefix
            suffix           = $Suffix
            title            = $Title
            valueStyle       = $ValueStyle
            decimalSeparator = $DecimalSeparator
            groupSeparator   = $GroupSeparator
            autoRefresh      = $AutoRefresh.IsPresent
            refreshInterval  = $RefreshInterval
        }
        $AntdStatistic.PSTypenames.Insert(0, "Ant.Design.Statistic")
        $AntdStatistic
    }
}

function New-UDAntdStep {
    [CmdletBinding()]
    [OutputType('Ant.Design.Step')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Key = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "disabled step when onChange exist.")]
        [switch]$Disabled,
        [Parameter(HelpMessage = "title of step item.")]
        [string]$Title,
        [Parameter(HelpMessage = "To specify the status of current step, can be set to one of the following Contents: wait process finish error.")]
        [ValidateSet("wait", "process", "finish", "error")]
        [string]$Status,
        [Parameter(HelpMessage = "subTitle of step item.")]
        [object]$SubTitle,
        [Parameter(HelpMessage = "description of step item.")]
        [string]$Description,
        [Parameter(HelpMessage = "Steps container content, it should be StepsItem using New-UDAntdStepsItem.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "Is the Content scriptblock is register as ud endpoint")]
        [switch]$IsEndpoint,
        [Parameter(HelpMessage = "Do autorefresh the Content scriptblock.")]
        [switch]$AutoRefresh,
        [Parameter(HelpMessage = "When in ms to rerun the Content scriptblock.")]
        [int]$RefreshInterval = 5000,
        [Parameter(HelpMessage = "content above tail.")]
        [string]$TailContent,
        [Parameter(HelpMessage = "Custom error message on step error.")]
        [string]$ErrorMessage,
        [Parameter(HelpMessage = "set icon of step item.")]
        [object]$Icon,
        [Parameter(HelpMessage = "Set css style on the main container.")]
        [hashtable]$Style
    )

    End {

        if ($null -ne $Content) {
            if ($IsEndpoint) {
                if ($Content -is [scriptblock]) {
                    $StepContentEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
                    $StepContent = $Content.Invoke()
                }
                elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Content must be a script block or UDEndpoint"
                }   
            }
            else {
                $StepContent = $Content.Invoke()
            }
        }

        $UDAntdStep = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            # type            = "ud-antd-steps-item"
            id              = $Id
            key             = $Key
            content         = $StepContent
            style           = $Style
            status          = $Status
            title           = $Title
            subTitle        = $SubTitle
            description     = $Description
            tailContent     = $TailContent
            disabled        = $Disabled.IsPresent
            errorMessage = $ErrorMessage
            # autorefresh     = $AutoRefresh.IsPresent
            # refreshInterval = $RefreshInterval
        }
        $UDAntdStep.PSTypeNames.Insert(0, 'Ant.Design.Step')
        $UDAntdStep
    }
}

function New-UDAntdSteps {
    [CmdletBinding()]
    [OutputType('Ant.Design.Steps')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Key = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "Type of steps, can be set to one of the following Contents: default, navigation.")]
        [ValidateSet("navigation", "default")]
        [string]$Variant = "default",
        [Parameter(HelpMessage = "To set the current step, counting from 0. You can overwrite this state by using status of Step.")]
        [int]$Current,
        [Parameter(HelpMessage = "To specify the direction of the step bar, horizontal or vertical.")]
        [ValidateSet("horizontal", "vertical")]
        [string]$Direction = "horizontal",
        [Parameter(HelpMessage = "Place title and description with horizontal or vertical direction.")]
        [ValidateSet("horizontal", "vertical")]
        [string]$LabelPlacement = "horizontal",
        [Parameter(HelpMessage = "Steps with progress dot style.")]
        [switch]$ProgressDot,
        [Parameter(HelpMessage = "To specify the size of the step bar, default and small are currently supported.")]
        [ValidateSet("default", "small")]
        [string]$Size = "default",
        [Parameter(HelpMessage = "To specify the status of current step, can be set to one of the following Contents: wait process finish error.")]
        [ValidateSet("wait", "process", "finish", "error")]
        [string]$Status = "process",
        [Parameter(HelpMessage = "Set the initial step, counting from 0.")]
        [int]$Initial = 0,
        [Parameter(HelpMessage = "Trigger when Step is changed.")]
        [scriptblock]$OnChange,
        [Parameter(HelpMessage = "Steps container content, it should be StepsItem using New-UDAntdStepsItem.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "Is the Content scriptblock is register as ud endpoint")]
        [switch]$IsEndpoint,
        [Parameter(HelpMessage = "Do autorefresh the Content scriptblock.")]
        [switch]$AutoRefresh,
        [Parameter(HelpMessage = "When in ms to rerun the Content scriptblock.")]
        [int]$RefreshInterval = 5000,
        [Parameter(HelpMessage = "Set custom error icon when step get an error.")]
        [object]$CustomErrorIcon,
        [Parameter(HelpMessage = "Set custom finish icon when step finish.")]
        [object]$CustomFinishIcon,
        [Parameter(HelpMessage = "Set css style on the main container.")]
        [hashtable]$Style
    )

    End {

        if ($null -ne $OnChange) {
            if ($OnChange -is [scriptblock]) {
                $OnChangeEndpoint = New-UDEndpoint -Endpoint $OnChange -Id ($Id + "onChange") 
            }
            elseif ($OnChange -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnChange must be a script block or UDEndpoint"
            }   
        }

        if ($null -ne $Content) {
            if ($IsEndpoint) {
                if ($Content -is [scriptblock]) {
                    $ContentEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
                    $StepsContent = $Content.Invoke()
                }
                elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Content must be a script block or UDEndpoint"
                }   
            }
            else {
                $StepsContent = $Content.Invoke()
            }
        }

        $Icons = @{
            finish = $CustomFinishIcon
            error  = $CustomErrorIcon
        }

        $UDAntdSteps = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-steps"
            id              = $Id
            key             = $Key
            content         = $StepsContent
            initial         = $Initial
            className       = $ClassName
            icons           = $Icons
            style           = $Style
            hasCallback     = $null -ne $OnChange
            status          = $Status
            size            = $Size
            labelPlacement  = $LabelPlacement
            direction       = $Direction
            # current         = $Current
            variant         = $Variant
            progressDot     = $ProgressDot.IsPresent
            autorefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
        $UDAntdSteps.PSTypeNames.Insert(0, 'Ant.Design.Steps')
        $UDAntdSteps
    }
}

function New-UDAntdSubMenu {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Key = $Id,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [scriptblock]$OnTitleClick,
        [Parameter()]
        [int[]]$PopupOffset,
        [Parameter()]
        [hashtable]$Style
    )

    End {

        if ($null -ne $OnTitleClick) {
            if ($OnTitleClick -is [scriptblock]) {
                $OnTitleClickEvent = New-UDEndpoint -Endpoint $OnTitleClick -Id ($Id + "onTitleClick")
            }
            elseif ($OnTitleClick -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnTitleClick must be a script block or UDEndpoint"
            }
        }

        $AntdSubMenu = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-sub-menu"
            id = $Id
            # className = $ClassName
            title = $Title
            key = $Key
            disabled = $Disabled.IsPresent
            content = $Content.Invoke()
            # popupOffset = $PopupOffset
            # style = $Style
        }
        $AntdSubMenu.PSTypeNames.Insert(0, "universaldashboard.antd.submenu") | Out-Null
        $AntdSubMenu
    }
}

<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdSwitch {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [switch]$autoFocus,
        [Parameter()]
        [switch]$checked,
        [Parameter()]
        [object]$checkedChildren,
        [Parameter()]
        [switch]$defaultChecked,
        [Parameter()]
        [switch]$disabled,
        [Parameter()]
        [switch]$loading,
        [Parameter()]
        [ValidateSet("default","small","large")]
        [string]$size,
        [Parameter()]
        [object]$unCheckedChildren,
        [Parameter()]
        [object]$onChange,
        [Parameter()]
        [hashtable]$Style

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

        if ($null -ne $onChange) {
            if ($onChange -is [scriptblock]) {
                $onChange = New-UDEndpoint -Endpoint $onChange -Id ($Id + "onChange")
            }
            elseif ($onChange -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClick must be a script block or UDEndpoint"
            }
        }

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-switch"
            id = $Id
            className = $ClassName
            autoFocus = $AutoFocus.IsPresent
            checked = $Checked.IsPresent
            checkedChildren = $CheckedChildren
            defaultChecked = $DefaultChecked.IsPresent
            disabled = $Disabled.IsPresent
            loading = $Loading.IsPresent
            size = $Size
            unCheckedChildren = $UnCheckedChildren
            # onChange = $OnChange
            # onClick = $OnClick
            style = $Style
        }

    }
}

function New-UDAntdTable {
    [CmdletBinding()]
    [OutputType("Ant.Design.Table")]

    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [scriptblock]$Column,
        [Parameter()]
        [scriptblock]$DataSource,
        [Parameter()]
        [switch]$Bordered,
        [Parameter()]
        [switch]$ShowHeader,
        [Parameter()]
        [hashtable]$BodyStyle,
        [Parameter()]
        [hashtable]$HeaderStyle,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$IsEndpoint

    )

    End {

        if($null -ne $DataSource){
            if($IsEndpoint){
                $TableContent = $DataSource.Invoke() | ConvertTo-Json
                $TableEndpoint = New-UDEndpoint -Endpoint {
                    $DataSource.Invoke() | ConvertTo-Json
                } -Id $Id
            }
            else {
                $TableContent = $DataSource.Invoke()  | ConvertTo-Json
            }
        }

        $UDAntdTable = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-table"
            id       = $Id
            key      = (New-Guid).ToString()
            content = $TableContent
            columns = $Column.Invoke()
            bordered = $Bordered.IsPresent
            bodyStyle = $BodyStyle
            headerStyle = $HeaderStyle
            title = $Title
            showHeader = $ShowHeader.IsPresent
        }
        $UDAntdTable.PSTypeNames.Insert(0, 'Ant.Design.Table')
        $UDAntdTable
    }
}

function New-UDAntdTableColumn {
    [CmdletBinding()]
    [OutputType("Ant.Design.TableColumn")]

    Param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$Sortable,
        [Parameter()]
        [ValidateSet("left","right","center")]
        [string]$Align,
        [Parameter()]
        [int]$ColSpan,
        [Parameter()]
        [int]$Width,
        [Parameter()]
        [ValidateSet("left", "right")]
        [string]$Fixed,
        [Parameter()]
        [switch]$Visible
    )

    End {
        $UDAntdTableColumn = @{
            assetId  = $AssetId 
            isPlugin = $true 
            id       = $Id
            key =  (New-Guid).ToString()
            title = $Title
            sortable = $Sortable.IsPresent
            visible = $Visible.IsPresent
            fixed = $Fixed
            width = $Width
            colSpan = $ColSpan
            align = $Align
        }
        $UDAntdTableColumn.PSTypeNames.Insert(0, 'Ant.Design.TableColumn')
        $UDAntdTableColumn
    }
}
function New-UDAntdTag {
    [CmdletBinding(DefaultParameterSetName = 'Icon')]
    [OutputType('Ant.Design.Tag')]
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
        $UDAntdTag.PSTypeNames.Insert(0, 'Ant.Design.Tag')
        $UDAntdTag
    }
}

function New-UDAntdTagCheckable {
    [CmdletBinding()]
    [OutputType('Ant.Design.Tag.Checkable')]
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
        $UDAntdCheckableTag.PSTypeNames.Insert(0, 'Ant.Design.Tag.Checkable')
        $UDAntdCheckableTag
    }
}
<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Reverse
Parameter description

.PARAMETER Pending
Parameter description

.PARAMETER AutoRefresh
Parameter description

.PARAMETER RefreshInterval
Parameter description

.PARAMETER Mode
Parameter description

.PARAMETER Style
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdTimeLine {
    [CmdletBinding()]
    [OutputType("Ant.Design.Timeline")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [switch]$Reverse,
        [Parameter()]
        [object]$Pending,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [ValidateSet("left", "alternate", "right")]
        [string]$Mode,
        [Parameter()]
        [hashtable]$Style
    )
    End {
        $AntdTimeline = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-timeline"
            id       = $Id
            mode     = $Mode
            reverse  = $Reverse.IsPresent
            style    = $Style
        }
        
        if ($PSBoundParameters.ContainsKey("Pending")) {
            $AntdTimeline.Add("pending", $Pending)
        }

        if ($PSBoundParameters.ContainsKey("AutoRefresh")) {
            $AntdTimeline.Add("autoRefresh", $AutoRefresh.IsPresent)
            $AntdTimeline.Add("refreshInterval", $RefreshInterval)
        }

        $AntdTimeline.PSTypeNames.Insert(0, "Ant.Design.Timeline")
        $AntdTimeline
    }
}

<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER Id
Parameter description

.PARAMETER Color
Parameter description

.PARAMETER Content
Parameter description

.PARAMETER Dot
Parameter description

.PARAMETER Position
Parameter description

.PARAMETER Style
Parameter description

.PARAMETER Label
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function New-UDAntdTimeLineItem {
    [CmdletBinding()]
    [OutputType("Ant.Design.Timeline.Item")]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$Color = "blue",
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [object]$Dot,
        [Parameter()]
        [ValidateSet("left", "right")]
        [string]$Position,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [object]$Label
    )

    End {
        $TimelineItem = @{
            assetId  = $AssetId 
            isPlugin = $true 
            type     = "ud-antd-timeline-item"
            id       = $Id
            content  = $Content.Invoke()
            color    = $Color
            dot      = $Dot
            label    = $Label
            position = $Position
            style    = $Style
        }
        $TimelineItem.PSTypenames.Insert(0, "Ant.Design.Timeline.Item")
        $TimelineItem
    }
}

function New-UDAntdToggleColorMode {
    param(
        [Parameter()]
        [ValidateSet("default", "dark", "compact")]
        [string]$ColorMode
    )

    End {

        @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-toggle-color-mode"
            colorMode = $ColorMode
        }

    }
}

function New-UDAntdTogglePrimaryColor {
    param(
        [Parameter()]
        [string]$PrimaryColor
    )
    End {
        @{
            assetId      = $AssetId 
            isPlugin     = $true 
            type         = "ud-antd-toggle-primary-color"
            primaryColor = $PrimaryColor
        }
    }
}


function New-UDAntdTypography {
    [CmdletBinding(DefaultParameterSetName = 'Text')]
    [OutputType('Ant.Design.Typography')]
    param(
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [string]$ClassName,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [object[]]$Code,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [object]$Copyable,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Delete,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Disabled,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Editable,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Ellipsis,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Mark,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Underline,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [scriptblock]$OnChange,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$Strong,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [ValidateSet('secondary', 'warning', 'danger')]
        [string]$Variant,
        [Parameter(ParameterSetName = 'Title')]
        [ValidateSet('1', '2', '3', '4')]
        [string]$Level,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$IsEndpoint,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [switch]$AutoRefresh,
        [Parameter(ParameterSetName = 'Paragraph')]
        [Parameter(ParameterSetName = 'Text')]
        [Parameter(ParameterSetName = 'Title')]
        [int]$RefreshInterval = 5000
    )

    End {

        if ($null -ne $Content) {
            if ($IsEndpoint) {
                if ($Content -is [scriptblock]) {
                    $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id 
                    $CardContent = $Content.Invoke()
                    $BodyStyle.Clear()
                }
                elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Content must be a script block or UDEndpoint"
                }
            }
            else {
                $CardContent = $Content.Invoke()
            }
        }
        else {
            $CardContent = @()
        }

        $UDAntdTypography = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-typography"
            id              = $Id
            className       = $ClassName
            content         = $CardContent  
            bordered        = $Bordered.IsPresent
            cover           = $Cover
            size            = $Size
            title           = $Title
            style           = $Style
            headStyle       = $HeadStyle
            bodyStyle       = $BodyStyle
            variant         = $Variant
            isEndpoint      = $IsEndpoint.IsPresent
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
        $UDAntdTypography.PSTypeNames.Insert(0, 'Ant.Design.Typography')
        $UDAntdTypography
    }
}


<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdDescriptionList {
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Title,
        [Parameter()]
        [switch]$Bordered,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [ValidateSet("large","middle","small")]
        [string]$Size,
        [ValidateSet("vertical","horizontal")]
        [string]$Layout = "horizontal",
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($IsEndpoint.IsPresent) {
            if ($Content -is [scriptblock]) {
                $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Sizels.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }
        

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-descriptionlist"
            id = $Id
            className = $ClassName
            isEndpoint = $IsEndpoint
            autoRefresh = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            content = $Content.Invoke()
            style = $Style
            bordered = $Bordered.IsPresent
            size = $Size
            title = $Title
            layout = $Layout
        }

    }
}

<#
.SYNOPSIS
    Sample control for UniversalDashboard.
.DESCRIPTION
    Sample control function for UniversalDashboard. This function must have an ID and return a hash table.
.PARAMETER Id
    An id for the component default value will be generated by new-guid.
.EXAMPLE
    PS C:\> <example usage>
    Explanation of what the example does
.INPUTS
    Inputs (if any)
.OUTPUTS
    Output (if any)
.NOTES
    General notes
#>
function New-UDAntdDescriptionListItem {
    [CmdletBinding(DefaultParameterSetName = 'Content')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter(ParameterSetName = 'Content')]
        [scriptblock]$Content,
        [Parameter()]
        [object]$Label,
        [Parameter(ParameterSetName = 'Text')]
        [string]$Text,
        [Parameter()]
        [string]$Span,
        [Parameter()]
        [switch]$IsEndpoint,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000,
        [Parameter()]
        [hashtable]$Style

    )

    End {

        if ($IsEndpoint.IsPresent) {
            if ($Content -is [scriptblock]) {
                $Endpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }

        if($null -ne $Content){$ListContent = $Content.Invoke()}

        if($Label -is [scriptblock]){
            $ItemLabel = $Label.invoke()
        }else{
            $ItemLabel = $Label
        }

        @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-descriptionlist-item"
            id = $Id
            className = $ClassName
            # isEndpoint = $IsEndpoint
            autoRefresh = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
            content = $ListContent
            text = $Text
            style = $Style
            label = $ItemLabel
            span = $Span
        }

    }
}

function New-UDPage 
{
    param(
        [Parameter(Position = 0)]
        [object]$Name,
        [Parameter(Position = 2)]
        [Alias("Endpoint")]
        [Endpoint]$Content,
        [Parameter(Position = 0)]
        [string]$Url,
        [Parameter(Position = 3)]
        [Switch]$DefaultHomePage,
        [Parameter(Position = 4)]
        [string]$Title,
        [Parameter()]
        [Switch]$Blank,
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Parameter()]
        [ScriptBlock]$OnLoading,
        [Parameter()]
        [object]$Icon
    )

    $Content.Register($Id, $PSCmdlet)

    if ($null -ne $Url -and -not $Url.StartsWith("/"))
    {
        $Url = "/" + $Url
    }

    if ($Null -eq $Url -and $null -ne $Name -and $Name -is [System.string])
    {
        $Url = "/" + $Name.Replace(' ', '-');
    }

    if ($OnLoading)
    {
        $LoadingContent = & $OnLoading
    }
    

    @{
        name = $Name
        url = $Url
        id = $Id
        defaultHomePage = $DefaultHomePage.IsPresent
        title = $Title
        blank = $Blank.IsPresent
        loading = $LoadingContent
        content = $Content 
        icon = $Icon
        dynamic = $Url -match ":"
    }
}
<#
.SYNOPSIS
Short description

.DESCRIPTION
Long description

.PARAMETER TimelineId
Parameter description

.PARAMETER ItemId
Parameter description

.PARAMETER Broadcast
Parameter description

.EXAMPLE
An example

.NOTES
General notes
#>
function Remove-UDAntdTimelineItem {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$TimelineId,
        [Parameter(Mandatory)]
        [string]$ItemId,
        [Parameter()]
        [Switch]$Broadcast
    )

    End {
        $Data = @{
            timelineId = $TimelineId
            itemId     = $ItemId
        }
        if ($Broadcast) {
            $DashboardHub.SendWebSocketMessage("removeTimelineItem", $Data)
        }
        else {
            $DashboardHub.SendWebSocketMessage($ConnectionId, "removeTimelineItem", $Data)
        }    
    }
}

function Show-UDAntdThemeButton {
    [CmdletBinding()]
    [OutputType('Ant.Design.ThemeButton')]
    param()
    End {
        $UDAntdThemeButton = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-theme-button"
        }
        $UDAntdThemeButton.PSTypeNames.Insert(0, 'Ant.Design.ThemeButton')
        $UDAntdThemeButton
    }
}


# function Update-UDAntdTypeData {
#     Param(
#         [Parameter(ValueFromPipeline)]
#         [object]$InputObject
#     )
#     Begin {
#         $CommonParameters = [System.Management.Automation.Internal.CommonParameters].DeclaredMembers | 
#             Where-Object { $_.MemberType -eq 'Property' } | Select-Object -Expand Name
#     }
#     Process {
#         # $ = 
#         (Get-Command -Name $CommandName).Parameters.Values.Name | ForEach-Object {
#             if ($_ -notin $CommonParameters) {
#                 # Add-Member -InputObject $BlanckObject -MemberType NoteProperty -Name $_.Name -Value '' -Force -TypeName ($CommonParameters | Get-Member).TypeName[0]
#                 Update-TypeData -MemberType NoteProperty -MemberName $_ -TypeName $type -Force -Value $null 
#             }
#         }
#     }
# }
function Add-UDElement {
    param(
        [Parameter(Mandatory)]
        [string]$ParentId,
        [Parameter(Mandatory)]
        [ScriptBlock]$Content,
        [Parameter()]
        [Switch]$Broadcast
    )

    $NewContent = & $Content

    $Data = @{
        componentId = $ParentId
        elements    = $NewContent
    }

    if ($Broadcast) {
        $DashboardHub.SendWebSocketMessage("addElement", $Data)
    }
    else {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "addElement", $Data)
    }    
}


function Clear-UDElement
{
    param(
        [Parameter(Mandatory)]
        [string]$Id,
        [Parameter()]
        [Switch]$Broadcast
    )

    if ($Broadcast)
    {
        $DashboardHub.SendWebSocketMessage("clearElement", $Id)
    }
    else 
    {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "clearElement", $Id)
    }
}

function Get-UDElement 
{
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
		[string]$Id
    )

    $requestId = ''

    $requestId = [Guid]::NewGuid().ToString()

    $Data = @{
        requestId = $requestId 
        componentId = $Id
    }


    $DashboardHub.SendWebSocketMessage("requestState", $ConnectionId, $Data)
    $retry = 0
    while($retry -lt 10) {
        if (-not $stateRequestService.TryGet($requestId, [out]$value)) {
            $stateRequestService.EventAvailable.WaitOne(100)
            $retry++;
            continue;
        }

        $Value
        break;
    }
    
}

function Hide-UDModal 
{
    $DashboardHub.SendWebSocketMessage($ConnectionId, "closeModal", $null)
}
function Hide-UDToast
{
    param(
        [Parameter(Mandatory, Position = 0)]
        [string]$Id
    )

    $DashboardHub.SendWebSocketMessage($ConnectionId, "hideToast", $Id)
}

function Invoke-UDJavaScript
{
    param(
        [Parameter(Mandatory)]
		[string]$JavaScript
    )

    $DashboardHub.SendWebSocketMessage($ConnectionId, "invokejavascript", $JavaScript)
}
function Invoke-UDRedirect
{
    param(
        [Parameter(Mandatory)]
		[string]$Url,
        [Parameter()]
        [Switch]$OpenInNewWindow
    )

    $Data = @{
        url = $Url 
        openInNewWindow = $OpenInNewWindow.IsPresent
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "redirect", $Data)
}
function Remove-UDElement
{
    param(
        [Parameter(Mandatory)]
        [string]$Id, 
        [Parameter()]
        [string]$ParentId,
        [Parameter()]
        [Switch]$Broadcast
    )

    $Data = @{
        componentId = $Id 
        parentId = $ParentId
    }

    if ($Broadcast)
    {
        $DashboardHub.SendWebSocketMessage("removeElement", $Data)
    }
    else 
    {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "removeElement", $Data)
    }
}

function Select-UDElement 
{   
    param(
        [Parameter(Mandatory, ParameterSetName = "Normal")]
		[string]$Id,
        [Parameter(ParameterSetName = "Normal")]
        [Switch]$ScrollToElement
    )

    $Data = @{
        id = $Id 
        scrollToElement = $ScrollToElement
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "select", $Data)
}
function Set-UDClipboard
{
    param(
        [Parameter(Mandatory)]
		[string]$Data,
        [Parameter()]
        [Switch]$ToastOnSuccess,
        [Parameter()]
        [Switch]$ToastOnError
    )

    $Data = @{
        data = $Data 
        toastOnSuccess = $ToastOnSuccess.IsPresent
        toastOnError = $ToastOnError.IsPresent
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "clipboard", $Data)
}

function Set-UDElement
{
    param(
        [Parameter(Mandatory)]
		[string]$Id,
        [Parameter()]
        [Hashtable]$Properties,
        [Parameter()]
        [Switch]$Broadcast
    )

    $Data = @{
        componentId = $Id 
        state = $Properties
    }

    if ($Broadcast)
    {
        $DashboardHub.SendWebSocketMessage("setState", $data)
    }
    else
    {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "setState", $Data)
    }
}
function Show-UDModal
{
    param(
        [Parameter()]
        [Switch]$FullScreen,
        [Parameter()]
        [ScriptBlock]$Footer,
        [Parameter()]
        [ScriptBlock]$Header,
        [Parameter()]
        [ScriptBlock]$Content,
        [Parameter()]
        [Switch]$Persistent,
        [Parameter()]
        [Switch]$FullWidth,
        [Parameter()]
        [ValidateSet("xs", "sm", "md", "lg", "xl")]
        [string]$MaxWidth
    )

    $Modal = @{
        dismissible = -not $Persistent.IsPresent
        max = $MaxWidth
        fullWidth = $FullWidth.IsPresent
        fullScreen = $FullScreen.IsPresent
    }

    if ($null -ne $Footer)
    {
        $Modal['footer'] = & $Footer
    }

    if ($null -ne $Header)
    {
        $Modal['header'] = & $Header
    }

    if ($null -ne $Content)
    {
        $Modal['content'] = & $Content
    }

    $DashboardHub.SendWebSocketMessage($ConnectionId, "showModal", $modal)
}

function Show-UDToast 
{
    param(
        [Parameter(Mandatory, Position = 0)]
		[string]$Message,
        [Parameter()]
        [DashboardColor]$MessageColor,
        [Parameter()]
        [string]$MessageSize,
        [Parameter()]
        [int]$Duration = 1000,
        [Parameter()]
        [string]$Title, 
        [Parameter()]
        [DashboardColor]$TitleColor,
        [Parameter()]
        [string]$TitleSize,
        [Parameter()]
        [string]$Id = [Guid]::NewGuid(),
        [Parameter()]
        [DashboardColor]$BackgroundColor,
        [Parameter()]
        [ValidateSet("light", "dark")]
        [string]$Theme,
        [Parameter()]
        [FontAwesomeIcons]$Icon,
        [Parameter()]
        [DashboardColor]$IconColor,
        [Parameter()]
        [ValidateSet("bottomRight", "bottomLeft", "topRight", "topLeft", "topCenter", "bottomCenter", "center")]
        [string]$Position = "topRight",
        [Parameter()]
        [Switch]$HideCloseButton,
        [Parameter()]
        [Switch]$CloseOnClick,
        [Parameter()]
        [Switch]$CloseOnEscape,
        [Parameter()]
        [Switch]$ReplaceToast,
        [Parameter()]
        [Switch]$RightToLeft,
        [Parameter()]
        [Switch]$Balloon,
        [Parameter()]
        [Switch]$Overlay,
        [Parameter()]
        [Switch]$OverlayClose,
        [Parameter()]
        [DashboardColor]$OverlayColor,
        [Parameter()]
        [ValidateSet("bounceInLeft", "bounceInRight", "bounceInUp", "bounceInDown", "fadeIn", "fadeInDown", "fadeInUp", "fadeInLeft", "fadeInRight", "flipInX")]
        [string]$TransitionIn = "fadeInUp",
        [Parameter()]
        [ValidateSet("bounceInLeft", "bounceInRight", "bounceInUp", "bounceInDown", "fadeIn", "fadeInDown", "fadeInUp", "fadeInLeft", "fadeInRight", "flipInX")]
        [string]$TransitionOut = "fadeOut",
        [Parameter()]
        [Switch]$Broadcast
    )

    $options = @{
        close = -not $HideCloseButton.IsPresent
        id = $Id
        message = $Message
        messageColor = $MessageColor.HtmlColor
        messageSize = $MessageSize
        title = $Title
        titleColor = $TitleColor.HtmlColor
        titleSize = $TitleSize
        timeout = $Duration
        position = $Position
        backgroundColor = $BackgroundColor.HtmlColor
        theme = $Theme
        #icon = Icon == FontAwesomeIcons.None ? "" : $"fa fa-{Icon.ToString().Replace("_", "-")}",
        iconColor = $IconColor.HtmlColor
        displayMode = if ($ReplaceToast.IsPresent) {2 } else { 0 }
        rtl = $RightToLeft.IsPresent
        balloon = $Balloon.IsPresent
        overlay = $Overlay.IsPresent
        overlayClose = $OverlayClose.IsPresent
        overlayColor = $OverlayColor.HtmlColor
        closeOnClick = $CloseOnClick.IsPresent
        closeOnEscape = $CloseOnEscape.IsPresent
        transitionIn = $TransitionIn
        transitionOut = $TransitionOut
    }

    if ($Broadcast)
    {
        $DashboardHub.SendWebSocketMessage("showToast", $options)
    }
    else 
    {
        $DashboardHub.SendWebSocketMessage($ConnectionId, "showToast", $options)
    }
}

function Sync-UDElement
{
    param(
        [Parameter(Mandatory, ValueFromPipeline)]
        [string[]]$Id,
        [Parameter()]
        [Switch]$Broadcast
    )

    Process 
    {
        foreach($i in $Id) 
        {
            if ($Broadcast)
            {
                $DashboardHub.SendWebSocketMessage("syncElement", $I)
            }
            else
            {
                $DashboardHub.SendWebSocketMessage($ConnectionId, "syncElement", $I)
            }
        } 
    }
}
