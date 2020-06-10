$SideBar = New-UDAntdSideBar -Visible -Content {
    New-UDAntdAvatar -Src https://raw.githubusercontent.com/AlonGvili/UniversalDashboard.Antd/master/src/Dashboard/Assets/UDLogo.png -Alt "logo" -Shape circle -Size large 
    New-UDAntdMenu -Mode inline -Content {
        New-UDAntdMenuItem -Icon (
            New-UDAntdIcon -Icon ReadOutlined
        ) -Text "Docs" -To "#"
        New-UDAntdMenuItem -Icon (  
            New-UDAntdIcon -Icon SettingOutlined
        ) -Text "Settings"  -To "#"
        New-UDAntdMenuItem -Icon (
            New-UDAntdIcon -Icon UserOutlined
        ) -Text "Profile"  -To "#"
        New-UDAntdMenuItem -Icon (
            New-UDAntdIcon -Icon LockOutlined
        ) -Text "Github Timeline"  -To "/GithubTimeline" 
        New-UDAntdMenuItem -Icon (
            New-UDAntdIcon -Icon FileSearchOutlined
        ) -Text "AutoComplete"  -To "/AutoComplete" 
    }
}
