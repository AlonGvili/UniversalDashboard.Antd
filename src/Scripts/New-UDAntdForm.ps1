
function New-UDAntdForm {
    [CmdletBinding()]
    [OutputType('Ant.Design.Form')]
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
        [object]$ResetButton, 
        [Parameter()]
        [hashtable]$LabelCol, 
        [Parameter()]
        [hashtable]$WrapperCol, 
        [Parameter()]
        [hashtable]$InitialValues, 
        [Parameter()]
        [object]$OnSubmit, 
        [Parameter()]
        [object]$OnReset 
    )
    End {
        if ($null -ne $OnSubmit) {
            New-UDEndpoint -Endpoint $OnSubmit -Id ($Id + "onSubmit") | Out-Null
        }
        
        if ($null -ne $OnReset) {
            New-UDEndpoint -Endpoint $OnReset -Id ($Id + "onReset") | Out-Null
        }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        $UDAntdForm = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-form"
            id               = $Id
            submitButton     = $SubmitButton
            resetButton      = $ResetButton
            wrapperCol       = $WrapperCol
            labelCol         = $LabelCol
            initialValues    = $InitialValues
            variant          = $Variant
            hideRequiredMark = $HideRequiredMark.IsPresent
            labelAlign       = $LabelAlign
            layout           = $Layout
            content          = $Content.Invoke()
            hasResetCallback = $null -ne $OnReset
        }
        $UDAntdForm.PSTypeNames.Insert(0, 'Ant.Design.Form')
        $UDAntdForm

    }
}



function New-UDAntdFormItem {
    [CmdletBinding()]
    [OutputType('Ant.Design.Form.Item')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [string]$ClassName,
        [Parameter()]
        [hashtable]$Style,
        [Parameter()]
        [string[]]$Name,
        [Parameter()]
        [string]$Message,
        [Parameter()]
        [switch]$Required,
        [Parameter()]
        [switch]$HasFeedback,
        [Parameter()]
        [object]$InitialValue,
        [Parameter()]
        [hashtable]$LabelCol, 
        [Parameter()]
        [hashtable]$WrapperCol, 
        [Parameter()]
        [string]$Label,
        [Parameter()]
        [switch]$NoStyle,
        [Parameter(Mandatory)]
        [scriptblock]$Content,
        [Parameter()]
        [string]$ValuePropName,
        [Parameter()]
        [hashtable[]]$Rules
    )
    End {
        $UDAntdFormItem = @{
            assetId       = $AssetId 
            isPlugin      = $true 
            type          = "ud-antd-form-item"
            id            = $Id
            style         = $Style
            name          = $Name
            label         = $Label
            wrapperCol    = $WrapperCol
            labelCol      = $LabelCol
            noStyle       = $NoStyle.IsPresent
            required      = $Required.IsPresent
            hasFeedback   = $HasFeedback.IsPresent
            initialValue  = $InitialValue
            rules         = if ($Rules.Length -gt 0) { $Rules }else { $null }
            content       = $Content.Invoke()
        }

        if ($PSBoundParameters.ContainsKey("ValuePropName")){
            $UDAntdFormItem.Add("valuePropName",$ValuePropName)
        }

        $UDAntdFormItem.PSTypeNames.Insert(0, 'Ant.Design.Form.Item')
        $UDAntdFormItem
    }
}
