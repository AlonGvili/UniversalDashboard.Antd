
function New-UDAntdPageHeader {
    [CmdletBinding()]
    [OutputType('Ant.Design.Page.Header')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(
            HelpMessage = "PageHeader type, will change background color"
        )]
        [switch]$Ghost,
        [Parameter(
            HelpMessage = "Avatar next to the title bar"
        )]
        [object]$Avatar,
        [Parameter(
            HelpMessage = "Custom title text"
        )]
        [string]$Title,
        [Parameter(
            HelpMessage = "Custom subtitle text"
        )]
        [string]$SubTitle,
        [Parameter(
            HelpMessage = "Tag list next to title"
        )]
        [object[]]$Tags,
        [Parameter(
            HelpMessage = "Operating area, at the end of the line of the title line"
        )]
        [object[]]$Extra,
        [Parameter(
            HelpMessage = "PageHeader's footer, generally used to render TabBar"
        )]
        [object]$Footer,
        [Parameter(
            HelpMessage = "Breadcrumb configuration"
        )]
        [object]$Breadcrumb,
        [Parameter(
            HelpMessage = "Custom back icon, if false the back icon will not be displayed"
        )]
        [object]$BackIcon
    )
    End {        
        $UDAntdPageHeader = @{
            assetId    = $AssetId 
            isPlugin   = $true 
            type       = "ud-antd-page-header"
            id         = $Id
            footer     = $Footer
            extra      = $Extra
            tags       = $Tags
            backIcon   = $BackIcon
            avatar     = $Avatar
            title      = $Title
            subTitle   = $SubTitle
            breadcrumb = $Breadcrumb
            ghost      = $Ghost.IsPresent
        }
        $UDAntdPageHeader.PSTypeNames.Insert(0, 'Ant.Design.Page.Header')
        $UDAntdPageHeader

    }
}
