
function New-UDAntdForm {
    [CmdletBinding()]
    [OutputType('UDAntd.Form')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [string]$Variant,
        [Parameter()]
        [scriptblock]$Content,
        [Parameter()]
        [switch]$HideRequiredMark,
        [Parameter()]
        [ValidateSet("horizontal", "vertical", "inline")]
        [string]$Layout,
        [Parameter()]
        [ValidateSet("left", "right")]
        [string]$LabelAlign,
        [Parameter()]
        [object]$SubmitButton, 
        [Parameter()]
        [object]$OnSubmit 
    )
    End {
        if ($null -ne $OnSubmit) {
            if ($OnSubmit -is [scriptblock]) {
                $SubmitEndpoint = New-UDEndpoint -Endpoint $OnSubmit -Id ($Id + "onSubmit")
            }
            elseif ($OnSubmit -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }
        }

        $UDAntdForm = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-form"
            id = $Id
            submitButton = $SubmitButton
            # className = $ClassName
            variant = $Variant
            # hideRequiredMark = $HideRequiredMark.IsPresent
            # labelAlign = $LabelAlign
            layout= $Layout
            content = $Content.Invoke()
            
        }
        $UDAntdForm.PSTypeNames.Insert(0, 'UDAntd.Form')
        $UDAntdForm

    }
}



function New-UDAntdFormItem {
    [CmdletBinding()]
    [OutputType('UDAntd.FormItem')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string]$Name,
        [Parameter()]
        [string]$Message,
        [Parameter()]
        [switch]$Required,
        [Parameter()]
        [switch]$HasFeedback,
        [Parameter()]
        [object]$InitialValue,
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [object]$Content,
        [Parameter()]
        [hashtable[]]$Rules
    )
    End {
        # if ($null -ne $Content) {
        #     if ($Content -is [scriptblock]) {
        #         $Content = New-UDEndpoint -Endpoint $Content -Id ($Id + "Content")
        #     }
        #     elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
        #         throw "Content must be a script block or UDEndpoint"
        #     }
        # }

        $UDAntdFormItem = @{
            assetId = $AssetId 
            isPlugin = $true 
            type = "ud-antd-form-item"
            id = $Id
            # className = $ClassName
            # style = $Style
            name = $Name
            label = $Label
            required = $Required.IsPresent
            # hasFeedback = $HasFeedback.IsPresent
            # initialValue = $InitialValue
            rules = if($Rules.Length -gt 0){$Rules}else{$null}
            content = $Content
            
        }
        $UDAntdFormItem.PSTypeNames.Insert(0, 'UDAntd.FormItem')
        $UDAntdFormItem

    }
}
