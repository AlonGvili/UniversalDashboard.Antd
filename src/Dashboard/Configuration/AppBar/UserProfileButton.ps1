$UserProfileBtn = New-UDAntdMenuItem -Content (
    New-UDAntdHeaderAccountSettings -Name "Alon Gvili" -Image "https://avatars1.githubusercontent.com/u/34351424?s=400&u=1af0f32562a8f68850c736e3fca838c5ed022203&v=4" -Menu (
        New-UDAntdMenu -Content {
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon RocketOutlined 
            ) -Text "Overview" -To "/users/alongvili"
            New-UDAntdMenuItem -Icon (  
                New-UDAntdIcon -Icon SettingOutlined
            ) -Text "Settings"  -To "/users/alongvili/settings"
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon UserOutlined
            ) -Text "Profile"  -To "/users/alongvili/profile"
        }
    )
)