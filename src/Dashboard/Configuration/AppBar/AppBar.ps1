Import-Module $Root\Configuration\AppBar\AppBarMenu.ps1 -Variable * -Force
$AppBar = New-UDAntdAppBar -Visible -Content { 
    $AppBarMenu

}
