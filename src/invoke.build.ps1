

task Clean {
    Remove-Item -Path "$PSScriptRoot\output" -Force -ErrorAction SilentlyContinue -Recurse
    Remove-Item -Path "$PSScriptRoot\public" -Force -ErrorAction SilentlyContinue -Recurse
}

task Stage {
    $OutputPath = "$PSScriptRoot\output\UniversalDashboard.Antd"
    New-Item $OutputPath -Type Directory -Force
}

task BuildJS {
    npm install --save-dev webpack
    npm install --save-dev webpack-cli
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
        ModuleVersion     = "1.0.0"
        Tags              = @("universaldashboard")
        ReleaseNotes      = "First release"
        FunctionsToExport = @(
            # UD Basic functions
            "New-UDElement"
            "Get-UDElement"
            "Add-UDElement"
            "Set-UDElement"
            "Clear-UDElement"
            "Remove-UDElement"
            "Select-UDElement"
            "Sync-UDElement"

            # AntDesign functions
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
            "New-UDAntdPageHeader"
            "New-UDAntdTag"
            "New-UDAntdTagCheckable"
            "New-UDAntdConfiguration"
            "New-UDAntdHeaderAccountSettings"
            "New-UDAntdNavigationItem"
            "New-UDAntdAppBar"
            "New-UDAntdDarkModeToggle"
            "New-UDAntdChartCard"
            "New-UDAntdChartField"
            "New-UDAntdChartTrend"
            "New-UDDashboard"
            "New-UDPage"
            "New-UDAntdProgress"
            "New-UDAntdPopConfirm"
            "New-UDAntdAvatarList"
            "New-UDAntdAvatarListItem"
            "New-UDAntdSpin"
            "New-UDAntdSideBar"
            "Add-UDAntdPage"
            "New-UDAntdCalendar"
            "New-UDAntdSpace"
            "New-UDAntdDivider"
            "New-UDAntdToggleColorMode"
            "New-UDAntdTogglePrimaryColor"
            "New-UDAntdCountdown"
        )
    }
    
    New-ModuleManifest @manifestParameters 
    
}

task . Clean, Stage, BuildJS, MergePsm1
