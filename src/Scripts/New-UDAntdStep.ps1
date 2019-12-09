function New-UDAntdStep {
    [CmdletBinding()]
    [OutputType('UDAntd.Step')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Key = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "disabled step when onChange exist.")]
        [switch]$Disabled,
        [Parameter(HelpMessage = "title of step item.")]
        [string]$Title,
        [Parameter(HelpMessage = "To specify the status of current step, can be set to one of the following Contents: wait process finish error.")]
        [ValidateSet("wait", "process", "finish", "error")]
        [string]$Status,
        [Parameter(HelpMessage = "subTitle of step item.")]
        [object]$SubTitle,
        [Parameter(HelpMessage = "description of step item.")]
        [string]$Description,
        [Parameter(HelpMessage = "Steps container content, it should be StepsItem using New-UDAntdStepsItem.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "Is the Content scriptblock is register as ud endpoint")]
        [switch]$IsEndpoint,
        [Parameter(HelpMessage = "Do autorefresh the Content scriptblock.")]
        [switch]$AutoRefresh,
        [Parameter(HelpMessage = "When in ms to rerun the Content scriptblock.")]
        [int]$RefreshInterval = 5000,
        [Parameter(HelpMessage = "content above tail.")]
        [string]$TailContent,
        [Parameter(HelpMessage = "Custom error message on step error.")]
        [string]$ErrorMessage,
        [Parameter(HelpMessage = "set icon of step item.")]
        [object]$Icon,
        [Parameter(HelpMessage = "Set css style on the main container.")]
        [hashtable]$Style
    )

    End {

        if ($null -ne $Content) {
            if ($IsEndpoint) {
                if ($Content -is [scriptblock]) {
                    $StepContentEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
                    $StepContent = $Content.Invoke()
                }
                elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "Content must be a script block or UDEndpoint"
                }   
            }
            else {
                $StepContent = $Content.Invoke()
            }
        }

        $UDAntdStep = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            # type            = "ud-antd-steps-item"
            id              = $Id
            key             = $Key
            content         = $StepContent
            style           = $Style
            status          = $Status
            title           = $Title
            subTitle        = $SubTitle
            description     = $Description
            tailContent     = $TailContent
            disabled        = $Disabled.IsPresent
            errorMessage = $ErrorMessage
            # autorefresh     = $AutoRefresh.IsPresent
            # refreshInterval = $RefreshInterval
        }
        $UDAntdStep.PSTypeNames.Insert(0, 'UDAntd.Step')
        $UDAntdStep
    }
}
