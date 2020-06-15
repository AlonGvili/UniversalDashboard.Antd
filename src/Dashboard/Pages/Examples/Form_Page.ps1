New-UDPage -Title 'Forms' -Name 'Form' -Content {
    New-UDAntdNotification -Id "info2" -Title "Universal Dashboard" -Description "Notification Description Content" -Preset "success" -Duration 8
    $InitialValues = @{
        username = "AlonGvili"
        password = "Aa123456"
        email    = "alon@gmail.com"
    }
    $WrapperCol = @{ span = 20; pull = 2; push = 2 }
            
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
                New-UDAntdInput -PlaceHolder 'Enter your group name' -Prefix ( New-UDAntdIcon -Icon TeamOutlined  ) -AddonAfter (
                    New-UDAntdPopover -Trigger (
                        New-UDAntdIcon -Icon InfoCircleOutlined
                    ) -Content "valide groups names are: dev, ops, qa" -Title "test" 
                )        
        )
        New-UDAntdFormItem -Name 'email' -Content (
            New-UDAntdInput -PlaceHolder 'Enter your email address' -Prefix ( New-UDAntdIcon -Icon MailOutlined  )
        ) -Rules @(@{
                required = $true
                message  = "you must enter a email address."
                type     = 'email'
            })
        New-UDAntdFormItem -Name 'textbox' -Content (
            New-UDAntdInputTextArea -PlaceHolder '??' 
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