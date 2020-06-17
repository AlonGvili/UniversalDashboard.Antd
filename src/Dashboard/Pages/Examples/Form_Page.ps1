New-UDPage -Title 'Forms' -Name 'Form' -Content {
    New-UDAntdNotification -Id "info2" -Title "Universal Dashboard" -Description "Notification Description Content" -Preset "success" -Duration 8
    $ReposNames = (Get-Content -Path "$Root\data\data.json" -Raw | ConvertFrom-Json).Name
    
    $WrapperCol = @{ span = 20; pull = 2; push = 2 }
    $InitialValues = @{
        input_username = "AlonGvili"
        input_password = "Aa123456"
        input_email    = "alon@gmail.com"
    }
    $Submit = New-UDAntdButton -Label Demo -HtmlType submit -ButtonType primary

    $Props = @{
        Variant       = "small" 
        Id            = "demoForm" 
        Layout        = "vertical" 
        WrapperCol    = $WrapperCol 
        InitialValues = $InitialValues 
        SubmitButton  = $Submit
    }

    New-UDAntdForm @Props -Content {
        
        New-UDAntdFormItem -Name 'input_username' -Content {
            New-UDAntdInput -PlaceHolder 'Enter your user name' -Prefix ( New-UDAntdIcon -Icon UserOutlined )
        } -Rules @(@{
                required = $true
                message  = "you must enter a user name."
            })
            
        New-UDAntdFormItem -Name 'input_password' -Content {
            New-UDAntdInputPassword -PlaceHolder 'Enter your user password' -Prefix ( New-UDAntdIcon -Icon KeyOutlined  )
        } -Rules @(@{
                required = $true
                message  = "you must enter a valide password."
            })

        New-UDAntdFormItem -Name "input_group_name" -Content {
            New-UDAntdInput -PlaceHolder 'Enter your group name' -Prefix ( New-UDAntdIcon -Icon TeamOutlined  )        
        }

        New-UDAntdFormItem -Name 'input_email' -Content {
            New-UDAntdInput -PlaceHolder 'Enter your email address' -Prefix ( New-UDAntdIcon -Icon MailOutlined  )
        } -Rules @(@{
                required = $true
                message  = "you must enter a email address."
                type     = 'email'
            })

        New-UDAntdFormItem -Name @('user', 'text_area_basic') -Content {
            New-UDAntdFormItem -NoStyle -Content {
                New-UDAntdInputTextArea -Value "alon gvili ud"
            }
        }

        New-UDAntdFormItem -Name @('user', 'input_group') -Content {
            New-UDAntdInputGroup -Content {
                New-UDAntdSelect -DataSource {
                    $ReposNames.Foreach( { New-UDAntdSelectOption -Value $_ })
                } -Bordered -Placeholder "Select github repo name."
                New-UDAntdInputNumber
            } 
        } -WrapperCol $WrapperCol

        New-UDAntdFormItem -Name 'input_number' -Content {
            New-UDAntdInputNumber  
        }

        New-UDAntdFormItem -HasFeedback -Name "select_single" -Content {
            New-UDAntdSelect -DataSource {
                $ReposNames.Foreach( { New-UDAntdSelectOption -Value $_ })
            } -Bordered -DropdownMatchSelectWidth -Placeholder "Select github repo name."
        }
        
        New-UDAntdFormItem -Name 'radio_group' -Content {
            New-UDAntdRadioGroup -Content {
                New-UDAntdRadio -Value "VScode" -Content { "Visual Studio Code" }
                New-UDAntdRadio -Value "VScodeInsider" -Content { "Visual Studio Code Insider" }
                New-UDAntdRadio -Value "VS" -Content { "Visual Studio" }
            } 
        }

        New-UDAntdFormItem -Name 'radio_buttons_group' -Content {
            New-UDAntdRadioGroup -Content {
                New-UDAntdRadioButton -Value "VScode" -Content { "Visual Studio Code" }
                New-UDAntdRadioButton -Value "VScodeInsider" -Content { "Visual Studio Code Insider" }
                New-UDAntdRadioButton -Value "VS" -Content { "Visual Studio" }
            } 
        }

        New-UDAntdFormItem -Name 'rate_basic' -Content {
            New-UDAntdRate
        } 

        New-UDAntdFormItem -Name 'rate_emojy' -Content {
            New-UDAntdRate -Character "🎀"
        }

        New-UDAntdFormItem -Name 'rate_icon' -Content {
            New-UDAntdRate -Character (
                New-UDAntdIcon -Icon ForkOutlined -Size 2x
            )
        }

        New-UDAntdFormItem -Name 'switch_basic' -ValuePropName "checked" -Content {
            New-UDAntdSwitch
        }

    } -OnSubmit {
        Set-UDElement -Id "info2" -Properties @{
            attributes = @{
                description = ConvertFrom-Json $EventData -AsHashtable | ConvertTo-Json
                visible     = $true 
                preset      = "info"
                duration    = 8
            }
        }
    }
}