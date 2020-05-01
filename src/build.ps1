Param(
    [Parameter()]
    [switch]$Minimal
)
$BuildFolder = $PSScriptRoot

$powerShellGet = Import-Module PowerShellGet  -PassThru -ErrorAction Ignore
if ($powerShellGet.Version -lt ([Version]'1.6.0')) {
    Install-Module PowerShellGet -Scope CurrentUser -Force -AllowClobber
    Import-Module PowerShellGet -Force
}

Set-Location $BuildFolder

$OutputPath = "$BuildFolder\output\UniversalDashboard.Antd"

Remove-Item -Path "$BuildFolder\output" -Force -ErrorAction SilentlyContinue -Recurse
Remove-Item -Path "$BuildFolder\public" -Force -ErrorAction SilentlyContinue -Recurse

New-Item -Path $OutputPath -ItemType Directory

# & cyclonedx-bom -o antd.bom.xml
if (!$Minimal) {
    npm install
    npm run auditfix
}

npm run build

Copy-Item $BuildFolder\public\* $OutputPath -Recurse -Force
Copy-Item $BuildFolder\Scripts $OutputPath\Scripts -Recurse -Force
Copy-Item $BuildFolder\less.js $OutputPat 
Copy-Item $BuildFolder\UniversalDashboard.Antd.psm1 $OutputPath

Remove-Item -Path "$BuildFolder\public" -Force -ErrorAction SilentlyContinue -Recurse

$Version = "0.50.0"

$manifestParameters = @{
    Path              = "$OutputPath\UniversalDashboard.Antd.psd1"
    Author            = "Alon Gvili"
    CompanyName       = "Alon gvili"
    Copyright         = "2019 AlonGvili"
    RootModule        = "UniversalDashboard.Antd.psm1"
    Description       = "Ant-Desig module for universal-dashboard"
    ModuleVersion     = $Version
    Tags              = @("universaldashboard")
    ReleaseNotes      = "First release"
    FunctionsToExport = @(
        "New-UDAntdColumn"
        "New-UDAntdRow"
        "New-UDAntdButton"
        "New-UDAntdButtonGroup"
        "New-UDAntdSwitch"
        "New-UDAntdTimeLine"
        "New-UDAntdTimeLineItem"
        "New-UDAntdDrawer"
        "New-UDAntdCard"
        "New-UDAntdDescriptionList"
        "New-UDAntdDescriptionListItem"
        "New-UDAntdBadge"
        "New-UDAntdDropdown"
        "New-UDAntdMenu"
        "New-UDAntdMenuItem"
        "New-UDAntdSubMenu"
        "New-UDAntdMenuItemGroup"
        "New-UDAntdMenuDivider"
        "New-UDAntdPopover"
        "New-UDAntdLayout"
        "New-UDAntdHeader"
        "New-UDAntdContent"
        "New-UDAntdAutoComplete"
        "New-UDAntdList"
        "New-UDAntdListItem"
        "New-UDAntdStatistic"
        "New-UDAntdCarousel"
        "New-UDAntdInput"
        "New-UDAntdInputTextArea"
        "New-UDAntdInputPassword"
        "New-UDAntdIcon"
        "New-UDAntdRadio"
        "New-UDAntdRadioButton"
        "New-UDAntdRadioGroup"
        "New-UDAntdCopyToClipboard"
        "New-UDAntdAvatar"
        "New-UDAntdSlider"
        "New-UDAntdNotification"
        "New-UDAntdMessage"
        "New-UDAntdSider"
        "New-UDAntdComment"
        "New-UDAntdSteps"
        "New-UDAntdStep"
        "New-UDAntdFooter"
        "New-UDAntdFooterColumn"
        "New-UDAntdFooterColumnItem"
        "New-UDAntdTable"
        "New-UDAntdTableColumn"
        "New-UDAntdForm"
        "New-UDAntdFormItem"
        "Show-UDAntdThemeButton"
        "New-UDAntdPage"
        "New-UDAntdRoute"
        "New-UDAntdResult"
        "Get-UDAntdPageHeader"
        "Get-UDAntdTag"
        "Get-UDAntdTagCheckable"
    )
}

New-ModuleManifest @manifestParameters
