function New-UDAntdSteps {
    [CmdletBinding()]
    [OutputType('UDAntd.Steps')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Key = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "Type of steps, can be set to one of the following Contents: default, navigation.")]
        [ValidateSet("navigation", "default")]
        [string]$Variant = "default",
        [Parameter(HelpMessage = "To set the current step, counting from 0. You can overwrite this state by using status of Step.")]
        [int]$Current,
        [Parameter(HelpMessage = "To specify the direction of the step bar, horizontal or vertical.")]
        [ValidateSet("horizontal", "vertical")]
        [string]$Direction = "horizontal",
        [Parameter(HelpMessage = "Place title and description with horizontal or vertical direction.")]
        [ValidateSet("horizontal", "vertical")]
        [string]$LabelPlacement = "horizontal",
        [Parameter(HelpMessage = "Steps with progress dot style.")]
        [switch]$ProgressDot,
        [Parameter(HelpMessage = "To specify the size of the step bar, default and small are currently supported.")]
        [ValidateSet("default", "small")]
        [string]$Size = "default",
        [Parameter(HelpMessage = "To specify the status of current step, can be set to one of the following Contents: wait process finish error.")]
        [ValidateSet("wait", "process", "finish", "error")]
        [string]$Status = "process",
        [Parameter(HelpMessage = "Set the initial step, counting from 0.")]
        [int]$Initial = 0,
        [Parameter(HelpMessage = "Trigger when Step is changed.")]
        [scriptblock]$OnChange,
        [Parameter(HelpMessage = "Steps container content, it should be StepsItem using New-UDAntdStepsItem.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "Is the Content scriptblock is register as ud endpoint")]
        [switch]$IsEndpoint,
        [Parameter(HelpMessage = "Do autorefresh the Content scriptblock.")]
        [switch]$AutoRefresh,
        [Parameter(HelpMessage = "When in ms to rerun the Content scriptblock.")]
        [int]$RefreshInterval = 5000,
        [Parameter(HelpMessage = "Set custom error icon when step get an error.")]
        [object]$CustomErrorIcon,
        [Parameter(HelpMessage = "Set custom finish icon when step finish.")]
        [object]$CustomFinishIcon,
        [Parameter(HelpMessage = "Set css style on the main container.")]
        [hashtable]$Style
    )

    End {

        if ($null -ne $OnChange) {
            if ($OnChange -is [scriptblock]) {
                $OnChangeEndpoint = New-UDEndpoint -Endpoint $OnChange -Id ($Id + "onChange") 
            }
            elseif ($OnChange -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "OnChange must be a script block or UDEndpoint"
            }   
        }

        if ($null -ne $Content) {
            if ($IsEndpoint) {
                if ($Content -is [scriptblock]) {
                    $ContentEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
                    $StepsContent = $Content.Invoke()
                }
                elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Content must be a script block or UDEndpoint"
                }   
            }
            else {
                $StepsContent = $Content.Invoke()
            }
        }

        $Icons = @{
            finish = $CustomFinishIcon
            error  = $CustomErrorIcon
        }

        $UDAntdSteps = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-steps"
            id              = $Id
            key             = $Key
            content         = $StepsContent
            initial         = $Initial
            className       = $ClassName
            icons           = $Icons
            style           = $Style
            hasCallback     = $null -ne $OnChange
            status          = $Status
            size            = $Size
            labelPlacement  = $LabelPlacement
            direction       = $Direction
            # current         = $Current
            variant         = $Variant
            progressDot     = $ProgressDot.IsPresent
            autorefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
        $UDAntdSteps.PSTypeNames.Insert(0, 'UDAntd.Steps')
        $UDAntdSteps
    }
}
