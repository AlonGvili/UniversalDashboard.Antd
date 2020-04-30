New-UDDashboard -Title "Dashboard" -Pages @(
    New-UDPage -Title 'Icons' -Name 'Icons' -Content {
        New-UDAntdPageHeader -SubTitle "this is the icon page"
        New-UDElement -Tag 'main' -Content {
            (Get-Command -Name New-UDAntdIcon).parameters["Icon"].Attributes.ValidValues.foreach( {
                    New-UDAntdIcon -Icon $_ -Size 4x
                })
        }
    }
    New-UDPage -Title 'Bages' -Name Badges -url '/Badge/colors' -Endpoint {
        New-UDAntdPageHeader -SubTitle "this is the badges color page" -Tags @(
            New-UDAntdTag -Color "pink" -Content "ud v.3"
            New-UDAntdTag -Color "lime" -Content "ud v.2"
            New-UDAntdTag -Color "#cd201f" -Content "Youtube" -Closable -Icon "😂🤣"
            New-UDAntdTag -Color "#55acee" -Content "Twitter" -Closable -Icon ( New-UDAntdIcon -Icon TwitterOutlined -Size xs)
        )
        (Get-Command -Name New-UDAntdBadge).Parameters["PresetColor"].Attributes.ValidValues | ForEach-Object {
            New-UDAntdBadge -PresetColor $_ -Content ( New-UDAntdIcon -Icon BellOutlined -Size 2x )
        }   
           
    }
    New-UDPage -Title 'Forms' -Name 'Form' -Content {
        New-UDAntdNotification -Id "info2" -Title "Universal Dashboard" -Description "Notification Description Content" -Preset "success" -Duration 0
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
            $t = ConvertFrom-Json $EventData 
            Set-UDElement -Id "info2" -Properties @{
                attributes = @{
                    description = "$($t.username)"
                    visible = $true 
                    preset = "error"
                    # description = (ConvertFrom-Json -InputObject $EventData | ConvertTo-Json)
                }
            }
        }
    }
    New-UDPage -Title 'Profile' -Name Profile -Endpoint {
       
        New-UDAntdNotification -Id "userInfo" -Title "Universal Dashboard" -Description "The UserID is:and its name is:" -Preset "info" 
        New-UDAntdButton -Label Demo -ButtonType primary -OnClick {
            Set-UDElement -Id "userInfo" -Properties @{
                attributes = @{
                    visible = $true 
                }
            }
        }
       
    }
    New-UDPage -Title 'Dynamic' -Name Dynamic -Url "/counter" -Endpoint {
        New-UDAntdRow -Content {
            New-UDAntdColumn -span 12 -Content {
                New-UDAntdCard -Content {
                    New-UDAntdStatistic -Value { 1..250 | Get-Random } -Title Followers -Prefix ( New-UDAntdIcon -Icon GitlabOutlined -Size 2x )
                } -Title "GitLab Stats" -BodyStyle @{padding = 24 }
            } -AutoRefresh -RefreshInterval 8000
            New-UDAntdColumn -span 12 -Content {
                New-UDAntdCard -Content {
                    New-UDAntdStatistic -Value { 1..250 | Get-Random } -Title Following -Prefix ( New-UDAntdIcon -Icon GithubOutlined -Size 2x )
                } -Title "GitHub Stats" -BodyStyle @{padding = 24 } -Extra @(
                    New-UDAntdTag -Color "#333" -Content "Github" -Icon ( New-UDAntdIcon -Icon GithubOutlined -Size xs)
                ) -Bordered
            } -AutoRefresh -RefreshInterval 8000

        } -Gutter 16
    }  

) 


# $Dashboard.FrameworkAssetId = [UniversalDashboard.Services.AssetService]::Instance.Frameworks[“Antd”]

# $pageEndPoint = New-UDEndpoint -Id 'pageValues' -Endpoint { 
            
#     $dash = Get-UDDashboard
#     $data = ConvertFrom-Json -InputObject $EventData
#     $NewPage = New-UDPage -Title $data.name -Name $data.name -Content {
#         New-UDAntdCard -Content {
#             [scriptblock]::Create($data.content).Invoke()
#         }
#     }
#     $NewPage.Callback.Name = $data.Id 
#     $dash.DashboardService.EndpointService.Endpoints.TryAdd($NewPage.Callback.Name, $NewPage.Callback)
#     $NewPage  
# }   