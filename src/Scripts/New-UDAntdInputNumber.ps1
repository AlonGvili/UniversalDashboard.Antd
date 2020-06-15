function New-UDAntdInputNumber {
    [CmdletBinding()]
    [OutputType('Ant.Design.Input.Number')]
    param(
        [Parameter()]
        [string]$Id = (New-Guid).ToString(),
        [Parameter()]
        [ValidateSet("default", "small", "large")]
        [string]$size = "default",
        [Parameter()]
        [string]$Suffix,
        [Parameter()]
        [string]$Prefix,
        [Parameter()]
        [int]$DefaultValue,
        [Parameter()]
        [switch]$Disabled,
        [Parameter()]
        [int]$Max = 100,
        [Parameter()]
        [int]$Min = 0,
        [Parameter()]
        [int]$Precision,
        [Parameter()]	
        [string]$DecimalSeparator,
        [Parameter()]	
        [int]$Step = 1
    )

    End {
        $AntdInputNumber = @{
            assetId          = $AssetId 
            isPlugin         = $true 
            type             = "ud-antd-input-number"
            disabled         = $Disabled.IsPresent
            size             = $Size
            prefix           = $Prefix
            suffix           = $Suffix
            decimalseparator = $Decimalseparator
            defaultvalue     = $Defaultvalue
            max              = $Max
            min              = $Min
            precision        = $Precision
            step             = $Step
        }
        $AntdInputNumber.PSTypeNames.Insert(0, 'Ant.Design.Input.Number')
        $AntdInputNumber
    }
}
