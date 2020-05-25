function New-UDDashboard{
    [CmdletBinding(DefaultParameterSetName="Pages")]
    param(
        [Parameter()]
        [string]$Title = "PowerShell Universal Dashboard",
        [Parameter(ParameterSetName = "Content", Mandatory)]
        [Endpoint]$Content,
        [Parameter(ParameterSetName = "Pages")]
        [Parameter(ParameterSetName = "Configuration")]
        [Hashtable[]]$Pages = @(),
        [Parameter(ParameterSetName = "Pages")]
        [Parameter(ParameterSetName = "Configuration")]
        [Hashtable[]]$Configuration = @(),
        [Parameter()]
        [hashtable[]]$Theme = @(),
        [Parameter()]
        [object]$AppBar,
        [Parameter()]
        [object]$SideBar

    )   

    if ($PSCmdlet.ParameterSetName -eq 'Content')
    {
        $Pages += New-UDPage -Name 'Home' -Content $Content
    }


    $Cache:Pages = $Pages 
    $Cache:Configuration = $Configuration 
    $Cache:Theme = $Theme
    $Cache:AppBar = $AppBar
    $Cache:SideBar = $SideBar

    New-UDEndpoint -Id "pages" -Method GET -Url "/pages" -Endpoint {
        $Cache:Pages
    } | Out-Null

    New-UDEndpoint -Id "configuration" -Endpoint {
        $Cache:Configuration
    } | Out-Null

    New-UDEndpoint -Id "theme" -Endpoint {
        $Cache:Theme
    } | Out-Null

    New-UDEndpoint -Id "appbar" -Endpoint {
        $Cache:Appbar
    } | Out-Null

    @{
        title = $Title 
        pages = $Pages
        configuration = $Configuration
        theme = $Theme
        appbar = $AppBar
        sidebar = $SideBar
    }
}
