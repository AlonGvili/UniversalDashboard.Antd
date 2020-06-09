function ConvertToBase64 {
    Param([String]$path)
    [convert]::ToBase64String((Get-Content $path -AsByteStream))
}
$LogoBase64 = ConvertToBase64 -Path "$Root\Assets\UDLogo.png"

$SideBar = New-UDAntdSideBar -Visible -Content {
    New-UDAntdAvatar -Src "data:image/$($LogoBase64);base64," -Alt "logo" -Shape circle -Size large 
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
        ) -Text "Security"  -To "#" 
        New-UDAntdMenuItem -Icon (
            New-UDAntdIcon -Icon FileSearchOutlined
        ) -Text "AutoComplete"  -To "/AutoComplete" 
    }
}
