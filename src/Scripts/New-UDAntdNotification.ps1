function New-UDAntdNotification {
    [CmdletBinding()]
    [OutputType('Ant.Design.Notification')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$UpdateKey = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "Add custom close button to the notification.")]
        [object]$CustomCloseButton,
        [Parameter(HelpMessage = "How long the notification will appear in seconds, if set to 0 will not disapear.")]
        [int]$Duration = 4.5,
        [Parameter(HelpMessage = "Custom icon for the notification.")]
        [object]$Icon,
        [Parameter(HelpMessage = "Notification description.")]
        [object]$Description,
        [Parameter(HelpMessage = "The notification title.")]
        [object]$Title,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [object]$OnClose,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [hashtable]$Style,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [hashtable]$TitleStyle,
        [Parameter(HelpMessage = "Set notification position.")]
        [ValidateSet("topLeft", "topRight", "bottomLeft", "bottomRight")]
        [string]$Placement = "topRight",
        [Parameter(HelpMessage = "Set notification with buildin icon.")]
        [ValidateSet("success", "error", "warning", "info")]
        [string]$Preset = "info",
        [Parameter(HelpMessage = "Display the notification")]
        [switch]$Visible
    )

    End {

        if ($null -ne $OnClose) {
            if ($OnClose -is [scriptblock]) {
                $OnCloseEndpoint = New-UDEndpoint -Endpoint $OnClose -Id ($Id + "onClose") 
            }
            elseif ($OnClose -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnClose must be a script block or UDEndpoint"
            }   
        }

        $UDAntdNotification = @{
            assetId           = $AssetId 
            isPlugin          = $true 
            type              = "ud-antd-notification"
            id                = $Id
            updateKey         = $UpdateKey
            message           = $Title
            description       = $Description
            placement         = $Placement
            duration          = $Duration
            customCloseButton = $CustomCloseButton
            className         = $ClassName
            icon              = $Icon
            style             = $Style
            titleStyle        = $TitleStyle
            hasCallback       = $null -ne $OnClose
            preset            = $Preset
            visible           = $Visible.IsPresent
        }
        $UDAntdNotification.PSTypeNames.Insert(0, 'Ant.Design.Notification')
        $UDAntdNotification
    }
}
