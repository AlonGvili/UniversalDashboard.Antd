New-UDPage -Title 'Forms' -Name 'Form' -Content {
    New-UDAntdNotification -Id "info2" -Title "Universal Dashboard" -Description "Notification Description Content" -Preset "success" -Duration 8
    New-UDAntdForm -Id 'demoForm' -Variant small -Content {
        New-UDAntdFormItem -Name 'username' -Content (
            New-UDAntdInput -PlaceHolder 'Enter your user name' -Prefix ( New-UDAntdIcon -Icon UserOutlined )
        ) -Rules @(@{
                required = $true
                message  = "you must enter a user name."
            })
        New-UDAntdFormItem -Name 'group' -Content (
            New-UDAntdInput -PlaceHolder 'Enter your group name' -Prefix ( New-UDAntdIcon -Icon UserOutlined )
        ) -Rules @(@{
                required = $true
                message  = "you must enter a valid group name."
                enum     = @('dev', 'ops', 'qa')
                type     = 'enum'
            })
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
    } -Layout vertical -OnSubmit {
        # $t = ConvertFrom-Json $EventData 
        Set-UDElement -Id "info2" -Properties @{
            attributes = @{
                description = ConvertFrom-Json $EventData | ConvertTo-Json
                visible     = $true 
                preset      = "error"
                duration    = 3
            }
        }
    } 
}