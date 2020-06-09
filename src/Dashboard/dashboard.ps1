$root = $PSScriptRoot
Import-Module -Variable * $Root\Configuration\AppBar\AppBar.ps1 -Force
Import-Module -Variable * $Root\Configuration\SideBar\SideBar.ps1 -Force

$Pages = Get-ChildItem -Path $Root\Pages\Examples -Filter *.ps1 -Recurse | ForEach-Object {
    . $_.FullName
}

$Theme = @{
    name  = "dark"
    color = "#fadb14" #Yellow
}
New-UDDashboard -Title "Dashboard" -Pages $Pages -AppBar $AppBar -SideBar $SideBar -Theme $Theme