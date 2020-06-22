function New-UDAntdSideBar {
    [CmdletBinding()]
    [OutputType('Ant.Design.SideBar')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Key = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "reverse direction of arrow, for a sider that expands from the right")]
        [switch]$ReverseArrow,
        [Parameter(HelpMessage = "width of the collapsed sidebar, by setting to 0 a special trigger will appear")]
        [int]$CollapsedWidth = 80,
        [Parameter(HelpMessage = "color theme of the sidebar.")]
        [ValidateSet("light", "dark")]
        [string]$Theme = "light",
        [Parameter(HelpMessage = "specify the customized trigger, set to null to hide the trigger")]
        [object]$Trigger,
        [Parameter(HelpMessage = "width of the sidebar.")]
        [int]$Width = 200,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [hashtable]$Style,
        [Parameter(HelpMessage = "SideBar content it usally a menu componen.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "Set if sidebar is visible or not")]
        [switch]$Visible
    )

    End {

        if ( $Null -ne $Content ) {
            New-UDEndpoint -Endpoint $Content -Id $Id | Out-Null
        }

        $UDAntdSider = @{
            assetId        = $AssetId 
            isPlugin       = $true 
            type           = "ud-antd-sidebar"
            id             = $Id
            key            = $Key
            # trigger        = $Trigger
            theme          = $Theme
            collapsedWidth = $CollapsedWidth
            width          = $Width
            reverseArrow   = $ReverseArrow.IsPresent
            className      = $ClassName
            style          = $Style
            hasCallback    = $null -ne $Content
            # content        = $Content.Invoke()
            visible        = $Visible.IsPresent
        }
        $UDAntdSider.PSTypeNames.Insert(0, 'Ant.Design.SideBar')
        $UDAntdSider
    }
}
