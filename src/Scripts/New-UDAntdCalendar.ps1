
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