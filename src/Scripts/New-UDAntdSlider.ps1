function New-UDAntdSlider {
    [CmdletBinding()]
    [OutputType('UDAntd.Slider')]
    param(
        [Parameter(HelpMessage="The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage="A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage="If true, the slider will not be interactable")]
        [switch]$Disabled,
        [Parameter(HelpMessage="Whether the thumb can drag over tick only")]
        [switch]$Dots,
        [Parameter(HelpMessage="Make effect when marks not null, true means containment and false means coordinative")]
        [switch]$Included,
        [Parameter(HelpMessage = "Tick mark of Slider, type of key must be number, and must in closed interval [min, max], each mark can declare its own style. example: @{0 = '0°C'} or @{100 = @{style =  @{color = 'red'}; label = '100°C'}}")]
        [hashtable]$Marks,
        [Parameter(HelpMessage="The maximum value the slider can slide to.")]
        [int]$Max = 100,
        [Parameter(HelpMessage="The minimum value the slider can slide to.")]
        [int]$Min = 0,
        [Parameter(HelpMessage = "dual thumb mode")]
        [switch]$Range,
        [Parameter(HelpMessage = "The default value of slider. When range is false, use number, otherwise, use @(0, 30)")]
        [int[]]$DefaultValue,
        [Parameter(HelpMessage = "reverse the component")]
        [switch]$Reverse,
        [Parameter(HelpMessage = "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min).")]
        [int]$Step = 1,
        [Parameter(HelpMessage = "Add icon before the slider.")]
        [object]$BeforeIcon,
        [Parameter(HelpMessage = "Add icon after the slider.")]
        [object]$AfterIcon,
        [Parameter(HelpMessage = "If true, the slider will be vertical.")]
        [switch]$Vertical,
        [Parameter(HelpMessage = "Callback function that is fired when the user changes the slider's value.")]
        [object]$OnChange,
        [Parameter(HelpMessage = "Set Tooltip display position.")]
        [ValidateSet("top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom")]
        [string]$TooltipPlacement,
        [Parameter(HelpMessage = "If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering.")]
        [switch]$TooltipVisible,
        [Parameter(HelpMessage = "For styling the track line.")]
        [hashtable]$TrackStyle,
        [Parameter(HelpMessage = "For styling the rail line.")]
        [hashtable]$RailStyle,
        [Parameter(HelpMessage = "For styling the handle circle.")]
        [hashtable]$HandleStyle,
        [Parameter(HelpMessage = "For styling the dot circle only visible if dots switch is used.")]
        [hashtable]$DotStyle
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

        $UDAntdSlider = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-slider"
            id        = $Id
            className = $ClassName
            marks = $Marks
            max = $Max
            min = $Min
            disabled = $Disabled.IsPresent
            dots = $Dots.IsPresent
            included = $Included.IsPresent
            range = $Range.IsPresent
            reverse = $Reverse.IsPresent
            vertical = $Vertical.IsPresent
            defaultValue = $DefaultValue
            step = $Step
            beforeIcon = $BeforeIcon
            afterIcon = $AfterIcon
            # isEndpoint = $IsEndpoint
            # onChange = $OnChange
            # Schedule = $Schedule
            hasCallback = $null -ne $OnChange
            tooltipPlacement = $TooltipPlacement
            tooltipVisible = $TooltipVisible.IsPresent
            trackStyle = $TrackStyle
            railStyle = $RailStyle
            handleStyle = $HandleStyle
            dotStyle = $DotStyle
        }
        $UDAntdSlider.PSTypeNames.Insert(0, 'UDAntd.Slider')
        $UDAntdSlider
    }
}
