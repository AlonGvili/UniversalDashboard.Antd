# $Config = @()
# Get-ChildItem "$PSScriptRoot\Configuration" -Recurse -Filter "*.config.ps1" | ForEach-Object {
#     $Config += . $_.FullName
# }
New-UDDashboard -Title "Dashboard" -Pages @(
    New-UDPage -Title 'Icons' -Name 'Icons' -Icon (New-UDAntdIcon -Icon GithubOutlined) -Content {

        
        (Get-Command -Name New-UDAntdIcon).parameters["Icon"].Attributes.ValidValues.foreach( {
                New-UDAntdIcon -Icon $_ -Size 4x
            })
        
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
       
    } -DefaultHomePage
    New-UDPage -Title 'Dynamic' -Name Dynamic -Url "/counter" -Endpoint {
        New-UDAntdNotification -Id "vv" -Title "Universal Dashboard" -Description "" -Preset "info" 
        New-UDAntdRow -Content {
            New-UDAntdColumn -span 12 -Content {
                New-UDAntdCard -Content {
                    New-UDAntdStatistic -Value { 1..250 | Get-Random } -Title Followers -Prefix ( New-UDAntdIcon -Icon GitlabOutlined -Size 2x )
                } -Title "GitLab Stats" -BodyStyle @{padding = 24 }
            }
            New-UDAntdColumn -span 12 -Content {
                New-UDAntdCard -Content {
                    New-UDAntdStatistic -Value { 1..250 | Get-Random } -Title Following -Prefix ( New-UDAntdIcon -Icon GithubOutlined -Size 2x )
                } -Title "GitHub Stats" -BodyStyle @{padding = 24 } -Extra @(
                    New-UDAntdTag -Color "#333" -Content "Github" -Icon ( New-UDAntdIcon -Icon GithubOutlined -Size xs)
                ) 
            }
        
        } -Gutter @(16, 16)
        New-UDAntdRow -Content {
            $Cache:rx = 0
            $Cache:FieldData = $null
            New-UDAntdColumn -span 8 -Content {
                New-UDAntdChartCard -Id "miniChart" -Title "UDAntd Info" -ContentHeight 45 -Content {
                    
                    if ($Cache:rx -eq 100) {
                        Set-UDElement -Id "miniChart" -Properties @{ attributes = @{ autoRefresh = $false; refreshInterval = 50000 } }
                    }
                    else {
                        $Cache:rx = $Cache:rx + 1
                        Set-UDElement -Id "miniChart" -Properties @{ attributes = @{ total = "$($Cache:rx)%" } }
                    }
                    
                    New-UDAntdChartMiniProgress -Id "miniProgress" -Percent $Cache:rx -StrokeWidth 5 -Color ("blue", "pink", "gold", "volcano", "green" | Get-Random) -Target 100 -TargetLabel "demo"
                } -AutoRefresh -RefreshInterval 5000 -Footer (
                    New-UDAntdChartField -Label "Just testing for demo" -Content { 20..154 | Get-Random } -AutoRefresh  
                )
                
            } 
            New-UDAntdColumn -span 8 -Content {
                New-UDAntdChartCard -Id "miniChart" -Title "UDAntd Info" -ContentHeight 45 -Content {
                    
                    if ($Cache:rx -eq 100) {
                        Set-UDElement -Id "miniChart" -Properties @{ attributes = @{ autoRefresh = $false; refreshInterval = 50000 } }
                    }
                    else {
                        $Cache:rx = $Cache:rx + 1
                        Set-UDElement -Id "miniChart" -Properties @{ attributes = @{ total = "$($Cache:rx)%" } }
                    }
                    
                    New-UDAntdChartMiniProgress -Id "miniProgress" -Percent $Cache:rx -StrokeWidth 5 -Color ("blue", "pink", "gold", "volcano", "green" | Get-Random) -Target 100 -TargetLabel "demo"
                } -AutoRefresh -RefreshInterval 5000 -Footer (
                    New-UDAntdChartField -Label "Just testing for demo" -Content { 20..154 | Get-Random } -AutoRefresh  
                )
                
            } 
            New-UDAntdColumn -span 8 -Content {
                New-UDAntdChartCard -Id "alon_info" -Title "Alon Gvili Info" -Content {
                    New-UDAntdChartTrend -Content "12%" -colorful -reverseColor -Flag down 
                    # New-UDAntdChartTrend -Content "46%" -colorful -Flag up   
                } -AutoRefresh -RefreshInterval 5000 -Avatar (
                    New-UDAntdAvatar -Src "https://avatars1.githubusercontent.com/u/34351424?s=400&u=1af0f32562a8f68850c736e3fca838c5ed022203&v=4"  -Shape circle -Size large 
                ) -Total (       
                    New-UDAntdStatistic -Value { 1..250 | Get-Random } -Title Followers -Prefix ( New-UDAntdIcon -Icon GitlabOutlined -Size 2x )    
                ) 
                
            } 
        } -Gutter @(16, 16)  
    }
    New-UDPage -Title 'Not Found' -Name "404" -Url "/404" -Endpoint {
        New-UDAntdResult -Status 404 -Title "Page not found" -SubTitle "Try again the url is not exsists" 
    }  
    New-UDPage -Url "/Demos/:demoId" -Endpoint {
        param($DemoId)
        New-UDAntdCard -Title $DemoId -Bordered -Content {
            if ($DemoId -eq "Monitor") {
                New-UDAntdIcon -Icon MonitorOutlined -Size 3x
            }
            if ($DemoId -eq "UserSettings") {
                New-UDAntdIcon -Icon SettingOutlined -Size 3x
            }
            if ($DemoId -eq "GithubClone") {
                New-UDAntdIcon -Icon GithubOutlined -Size 3x
            }
        } 
    }  

) -Theme @{
    color = "light"
} -AppBar (
    New-UDAntdAppBar -Visible -Content {
        New-UDAntdMenu -Mode horizontal -Content {
            New-UDAntdMenuItem -Text "Ant-Design" -To "/"
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon ForkOutlined
            ) -Text "Forks" -To "/Dynamic"
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon AppstoreOutlined
            ) -Text "Components" -To "/Form"
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon CiOutlined
            ) -Text "CI" -To "/Icons"
            New-UDAntdSubMenu -Title "Dashboard Examples" -Content {
                New-UDAntdMenuItem -Icon (
                    New-UDAntdIcon -Icon DashboardOutlined
                ) -Text "Monitor" -To "/Demos/Monitor"
                New-UDAntdMenuItem -Icon (
                    New-UDAntdIcon -Icon SettingOutlined
                ) -Text "User Settings" -To "/Demos/UserSettings"
                New-UDAntdMenuItem -Icon (
                    New-UDAntdIcon -Icon GithubOutlined
                ) -Text "Github Clone" -To "/Demos/GithubClone"
            } 
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon ReadOutlined
            ) -Text "Docs" -To "/Badge/colors"
            New-UDAntdMenuItem -Content (
                New-UDAntdHeaderAccountSettings -Name "Alon Gvili" -Image "https://avatars1.githubusercontent.com/u/34351424?s=400&u=1af0f32562a8f68850c736e3fca838c5ed022203&v=4" -Menu (
                    New-UDAntdMenu -Content {
                        New-UDAntdMenuItem -Icon (
                            New-UDAntdIcon -Icon ReadOutlined
                        ) -Text "Docs" -To "#"
                        New-UDAntdMenuItem -Icon (
                            New-UDAntdIcon -Icon BgColorsOutlined
                        ) -Content (New-AntdDarkModeToggle -Size "small") -Text "Dark Mode"
                        # New-UDAntdMenuDivider 
                        New-UDAntdMenuItem -Icon (  
                            New-UDAntdIcon -Icon SettingOutlined
                        ) -Text "Settings"  -To "#"
                        New-UDAntdMenuItem -Icon (
                            New-UDAntdIcon -Icon UserOutlined
                        ) -Text "Profile"  -To "#"
                        # New-UDAntdMenuDivider
                        New-UDAntdMenuItem -Icon (
                            New-UDAntdIcon -Icon LockOutlined
                        ) -Text "Security"  -To "#" 
                    }
                )
            )
        }
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