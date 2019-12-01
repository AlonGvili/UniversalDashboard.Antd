function New-UDAntdMessage {
    [CmdletBinding()]
    [OutputType('UDAntd.Message')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Key = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "How long the Message will appear in seconds, if set to 0 will not disapear.")]
        [int]$Duration,
        [Parameter(HelpMessage = "Custom icon for the Message.")]
        [object]$Icon,
        [Parameter(HelpMessage = "Message Content.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [object]$OnClose,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [hashtable]$Style,
        [Parameter(HelpMessage = "Set Message with buildin icon.")]
        [ValidateSet("success", "error", "warning", "info","loading")]
        [string]$Preset,
        [Parameter(HelpMessage = "Display the Message")]
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

        if ($null -ne $Content) {
            if ($Content -is [scriptblock]) {
                $ContenteEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }   
        }

        $UDAntdMessage = @{
            assetId     = $AssetId 
            isPlugin    = $true 
            type        = "ud-antd-message"
            id          = $Id
            key         = $Key
            content     = $Content.Invoke()
            duration    = $Duration
            className   = $ClassName
            icon        = $Icon
            style       = $Style
            hasCallback = $null -ne $OnClose
            preset      = $Preset
            visible     = $Visible.IsPresent
        }
        $UDAntdMessage.PSTypeNames.Insert(0, 'UDAntd.Message')
        $UDAntdMessage
    }
}
