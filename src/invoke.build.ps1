

task Clean {
    Remove-Item -Path "$PSScriptRoot\output" -Force -ErrorAction SilentlyContinue -Recurse
    Remove-Item -Path "$PSScriptRoot\public" -Force -ErrorAction SilentlyContinue -Recurse
}

task Stage {
    $OutputPath = "$PSScriptRoot\output\UniversalDashboard.Antd"
    New-Item $OutputPath -Type Directory -Force

}

task BuildJS {
    npm install
    npm run build
}

task MergePsm1 {
    Copy-Item "$PSScriptRoot\UniversalDashboard.Antd.psm1" "$PSScriptRoot\output\UniversalDashboard.Antd\UniversalDashboard.Antd.psm1"
    Copy-Item "$PSScriptRoot\public\*" "$PSScriptRoot\output\UniversalDashboard.Antd\" -Recurse
    Copy-Item "$PSScriptRoot\less.js" "$PSScriptRoot\output\UniversalDashboard.Antd\less.js" -Recurse
    Get-ChildItem "$PSScriptRoot\Scripts" -File -Recurse -Filter "*.ps1" | ForEach-Object {
        Get-Content $_.FullName -Raw | Out-File  "$PSScriptRoot\output\UniversalDashboard.Antd\UniversalDashboard.Antd.psm1" -Append -Encoding UTF8
    }
    $manifestParameters = @{
        Path              = "$PSScriptRoot\output\UniversalDashboard.Antd\UniversalDashboard.Antd.psd1"
        Author            = "Alon Gvili"
        CompanyName       = "Alon gvili"
        Copyright         = "2020 AlonGvili"
        RootModule        = "UniversalDashboard.Antd.psm1"
        Description       = "Ant-Desig module for universal-dashboard"
        ModuleVersion     = "1.0.3"
        Tags              = @("universaldashboard")
        ReleaseNotes      = "First release"
        FunctionsToExport = @(
            # UD Basic functions
            "Add-UDElement"
            "Clear-UDElement"
            "Get-UDElement"
            "New-UDElement"
            "Remove-UDElement"
            "Select-UDElement"
            "Set-UDElement"
            "Sync-UDElement"

            # AntDesign functions
            "Add-UDAntdColumn"
            "Add-UDAntdPage"
            "Add-UDAntdTimelineItem"
            "Clear-UDAntdTimeline"
            "New-UDAntdAppBar"
            "New-UDAntdAutoComplete"
            "New-UDAntdAvatar"
            "New-UDAntdAvatarList"
            "New-UDAntdAvatarListItem"
            "New-UDAntdBadge"
            "New-UDAntdButton"
            "New-UDAntdButtonGroup"
            "New-UDAntdCalendar"
            "New-UDAntdCard"
            "New-UDAntdCarousel"
            "New-UDAntdChartCard"
            "New-UDAntdChartField"
            "New-UDAntdChartTrend"
            "New-UDAntdColumn"
            "New-UDAntdComment"
            "New-UDAntdConfiguration"
            "New-UDAntdContent"
            "New-UDAntdCopyToClipboard"
            "New-UDAntdCountdown"
            "New-UDAntdDarkModeToggle"
            "New-UDAntdDescriptionList"
            "New-UDAntdDescriptionListItem"
            "New-UDAntdDivider"
            "New-UDAntdDrawer"
            "New-UDAntdDropdown"
            "New-UDAntdFooter"
            "New-UDAntdFooterColumn"
            "New-UDAntdFooterColumnItem"
            "New-UDAntdForm"
            "New-UDAntdFormItem"
            "New-UDAntdGithubCalendar"
            "New-UDAntdHeader"
            "New-UDAntdHeaderAccountSettings"
            "New-UDAntdIcon"
            "New-UDAntdInput"
            "New-UDAntdInputNumber"
            "New-UDAntdInputPassword"
            "New-UDAntdInputTextArea"
            "New-UDAntdInputGroup"
            "New-UDAntdLayout"
            "New-UDAntdList"
            "New-UDAntdListItem"
            "New-UDAntdMenu"
            "New-UDAntdMenuDivider"
            "New-UDAntdMenuItem"
            "New-UDAntdMenuItemGroup"
            "New-UDAntdMessage"
            "New-UDAntdNavigationItem"
            "New-UDAntdNotification"
            "New-UDAntdPage"
            "New-UDAntdPageHeader"
            "New-UDAntdPopConfirm"
            "New-UDAntdPopover"
            "New-UDAntdProgress"
            "New-UDAntdRadio"
            "New-UDAntdRadioButton"
            "New-UDAntdRadioGroup"
            "New-UDAntdRate"
            "New-UDAntdResult"
            "New-UDAntdRoute"
            "New-UDAntdRow"
            "New-UDAntdSelect"
            "New-UDAntdSelectOption"
            "New-UDAntdSideBar"
            "New-UDAntdSider"
            "New-UDAntdSlider"
            "New-UDAntdSpace"
            "New-UDAntdSpin"
            "New-UDAntdStatistic"
            "New-UDAntdStep"
            "New-UDAntdSteps"
            "New-UDAntdSubMenu"
            "New-UDAntdSwitch"
            "New-UDAntdTable"
            "New-UDAntdTableColumn"
            "New-UDAntdTag"
            "New-UDAntdTagCheckable"
            "New-UDAntdTimeLine"
            "New-UDAntdTimeLineItem"
            "New-UDAntdToggleColorMode"
            "New-UDAntdTogglePrimaryColor"
            "New-UDDashboard"
            "New-UDPage"
            "Remove-UDAntdTimelineItem"
            "Show-UDAntdThemeButton"
            "Update-UDAntdTimeline"
            # "Get-UDAntdTimeline"
        )
    }
    
    New-ModuleManifest @manifestParameters 
    
}

task . Clean, Stage, BuildJS, MergePsm1
