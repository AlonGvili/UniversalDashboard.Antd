New-UDPage -Title 'Forms' -Name 'Form' -Content {
    New-UDAntdNotification -Id "info2" -Title "Universal Dashboard" -Description "Notification Description Content" -Preset "success" -Duration 8
    $InitialValues = @{
        username = "AlonGvili"
        password = "Aa123456"
        email    = "alon@gmail.com"
        textbox  = "GviliAlon"
    }
    $WrapperCol = @{ span = 20; pull = 2; push = 2 }
            
    $Repos = Get-Content -Path "$Root\data\data.json" -Raw | ConvertFrom-Json
    [System.Collections.ArrayList]$filters = @()
    $null = $filters.AddRange($Repos[0].psobject.Properties.name)
    $null = $filters.Add('owner.id')

    $v = Get-Content -Path "$Root\data\data.json" -Raw | ConvertFrom-Json
    $NamesAsJson = $v.Name | ConvertTo-Json
    New-UDAntdForm -Id 'demoForm' -Variant small -WrapperCol $WrapperCol -InitialValues $InitialValues -Content {
        New-UDAntdFormItem -Name 'username' -Content (
            New-UDAntdInput -PlaceHolder 'Enter your user name' -Prefix ( New-UDAntdIcon -Icon UserOutlined )
        ) -Rules @(@{
                required = $true
                message  = "you must enter a user name."
            })
        New-UDAntdFormItem -Name 'password' -Content (
            New-UDAntdInputPassword -PlaceHolder 'Enter your user password' -Prefix ( New-UDAntdIcon -Icon KeyOutlined  )
        ) -Rules @(@{
                required = $true
                message  = "you must enter a valide password."
            })
        New-UDAntdFormItem -Name "group" -Content (
            New-UDAntdPopover -Trigger (
                New-UDAntdInput -PlaceHolder 'Enter your group name' -Prefix ( New-UDAntdIcon -Icon TeamOutlined  )        
            ) -Content "valide groups names are: dev, ops, qa" 
        )
        New-UDAntdFormItem -Name 'email' -Content (
            New-UDAntdInput -PlaceHolder 'Enter your email address' -Prefix ( New-UDAntdIcon -Icon MailOutlined  )
        ) -Rules @(@{
                required = $true
                message  = "you must enter a email address."
                type     = 'email'
            })
        New-UDAntdFormItem -Name 'textbox' -Content (
            New-UDAntdInputTextArea
        )
        New-UDAntdFormItem -Name 'input_group' -Content (
            New-UDAntdInputGroup -Content {
                New-UDAntdSelect -DataSource {
                    (Get-Content -Path "$Root\data\data.json" -Raw | ConvertFrom-Json).Foreach( {
                            New-UDAntdSelectOption -Value $_.Name
                        })
                } -Bordered -DropdownMatchSelectWidth -Placeholder "Select github repo name."
                New-UDAntdInputNumber
            }
        )
            
        New-UDAntdFormItem -Name 'cnum' -Content (
            New-UDAntdInputNumber -DefaultValue 2 
        )
        New-UDAntdFormItem -HasFeedback -Name "gvili_select" -Content (
            New-UDAntdSelect -DataSource {
                (Get-Content -Path "$Root\data\data.json" -Raw | ConvertFrom-Json).Foreach( {
                        New-UDAntdSelectOption -Value $_.Name
                    })
            } -Bordered -DropdownMatchSelectWidth -Placeholder "Select github repo name."
        )
        New-UDAntdFormItem -Name 'radioGroup' -Content (
            New-UDAntdRadioGroup -Content {
                New-UDAntdRadio -Value "VScode" -Content { "Visual Studio Code" }
                New-UDAntdRadio -Value "VScodeInsider" -Content { "Visual Studio Code Insider" }
                New-UDAntdRadio -Value "VS" -Content { "Visual Studio" }
            } 
        )
        New-UDAntdFormItem -Name 'buttonGroup' -Content (
            New-UDAntdRadioGroup -Content {
                New-UDAntdRadioButton -Value "VScode" -Content { "Visual Studio Code" }
                New-UDAntdRadioButton -Value "VScodeInsider" -Content { "Visual Studio Code Insider" }
                New-UDAntdRadioButton -Value "VS" -Content { "Visual Studio" }
            } 
        )
        New-UDAntdFormItem -Name 'my_rate' -Content (
            New-UDAntdRate
        ) -Rules @(@{
                required = $true
                message  = "you must select a rate."
            })
        New-UDAntdFormItem -Name 'my_rate_custom' -Content (
            New-UDAntdRate -Character "??"
        )
        New-UDAntdFormItem -Name 'my_rate_custom_icon' -Content (
            New-UDAntdRate -Character (
                New-UDAntdIcon -Icon ForkOutlined -Size 2x
            )
        )
    } -Layout vertical -SubmitButton (
        New-UDAntdButton -Label Demo -HtmlType submit -ButtonType primary
    ) -ResetButton (
        New-UDAntdButton -Label Clear -ButtonType dashed
    ) -OnSubmit {
        Set-UDElement -Id "info2" -Properties @{
            attributes = @{
                description = ConvertFrom-Json $EventData -AsHashtable | ConvertTo-Json
                visible     = $true 
                preset      = "info"
                duration    = 4
            }
        }
    }
}