Import-Module $Root\Configuration\AppBar\UserProfileButton.ps1 -Variable * -Force
$AppBarMenu = New-UDAntdMenu -Mode horizontal -Content {
    New-UDAntdMenuItem -Text "Ant-Design" -To "/"
    New-UDAntdMenuItem -Icon (
        New-UDAntdIcon -Icon ForkOutlined
    ) -Text "ProgressBar" -To "/ProgressBar"
    New-UDAntdMenuItem -Icon (
        New-UDAntdIcon -Icon AppstoreOutlined
    ) -Text "Form" -To "/Form"
    New-UDAntdMenuItem -Icon (
        New-UDAntdIcon -Icon CiOutlined
    ) -Text "Icons" -To "/Icons"
    New-UDAntdSubMenu -Title "Examples" -Content {
        New-UDAntdMenuItem -Text "Timeline" -To "/Demos/Timeline"
        New-UDAntdMenuItem -Text "Adam Driscoll" -To "/Users/AdamDriscoll/profile"
        New-UDAntdMenuItem -Text "Alon Gvili" -To "/Users/AlonGvili/profile"
        New-UDAntdMenuItem -Text "CountDown" -To "/Demos/CountDown"
        New-UDAntdMenuItem -Text "Background Slides" -To "/Demos/BGSlides"
    } 
    New-UDAntdMenuItem -Icon (
        New-UDAntdIcon -Icon ReadOutlined
    ) -Text "Badges" -To "/Badges"
    $UserProfileBtn
}  
