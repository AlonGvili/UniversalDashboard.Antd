$root = $PSScriptRoot
New-UDDashboard -Title "Dashboard" -Pages @(
    New-UDPage -Title 'Icons' -Name 'Icons' -Icon (New-UDAntdIcon -Icon GithubOutlined) -Content {
        (Get-Command -Name New-UDAntdIcon).parameters["Icon"].Attributes.ValidValues.foreach( {
                New-UDAntdIcon -Icon $_ -Size 4x
            })
    }
    New-UDPage -Title 'Bages' -Name Badges -Content {
        New-UDAntdPageHeader -SubTitle "this is the badges color page" -Tags @(
            New-UDAntdTag -Color "pink" -Content "ud v.3"
            New-UDAntdTag -Color "lime" -Content "ud v.2"
            New-UDAntdTag -Color "#cd201f" -Content "Youtube" -Closable -Icon "🤣"
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
        New-UDAntdStatistic -Value { 
           $Cache:Pages.Count
        } -Title Pages -AutoRefresh 
       
        New-UDAntdList -bordered -itemLayout vertical -Content {
            New-UDAntdListItem -Avatar (New-UDAntdAvatar -Shape circle -Size small -Content "AG") -Title "Alon Gvili" -Description "User profile item" -Extra {
                New-UDAntdButtonGroup -Content {
                    New-UDAntdButton -Label 01 
                    New-UDAntdButton -Label 02 
                    New-UDAntdButton -Label 03 
                }
            } -Actions {
                New-UDAntdButtonGroup -Content {
                    New-UDAntdButton -Label 01 
                    New-UDAntdButton -Label 02 
                    New-UDAntdButton -Label 03 
                }
            } -Content {
                New-UDAntdListItem -Avatar (New-UDAntdAvatar -Shape circle -Size small -Content "AD") -Title "Adam Driscoll" -Description "User profile item"
            }
            New-UDAntdListItem -Avatar (New-UDAntdAvatar -Shape circle -Size small -Content "AD") -Title "Adam Driscoll" -Description "User profile item"
            New-UDAntdListItem -Avatar (New-UDAntdAvatar -Shape circle -Size small -Content "IL") -Title "Israel" -Description "User profile item"
        }


    } -DefaultHomePage
    New-UDPage -Title 'Dynamic' -Name Dynamic -Endpoint {
        New-UDAntdNotification -Id "vv" -Title "Universal Dashboard" -Description "" -Preset "info" 
        New-UDAntdRow -Content {
            New-UDAntdColumn -span 12 -Content {
                New-UDAntdCard -Content {
                    New-UDAntdStatistic -Value { 
                        1..250 | Get-Random 
                    } -Title Followers -Prefix ( New-UDAntdIcon -Icon GitlabOutlined -Size 2x ) -AutoRefresh 
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
            New-UDAntdColumn -span 8 -Content {
                New-UDAntdChartCard -Id "miniChart" -Title "UDAntd Info" -ContentHeight 45 -Content {
                    New-UDAntdChartMiniProgress -Value { 20..100 | Get-Random } -StrokeWidth 3 -Target 100 -AutoRefresh -RefreshInterval 4000 
                } -Footer (
                    New-UDAntdChartField -Label "Just testing for demo" -Content { 20..154 | Get-Random } -AutoRefresh  
                )
                
            } 
            New-UDAntdColumn -span 8 -Content {
                New-UDAntdChartCard -Id "miniChart" -Title "UDAntd Info" -ContentHeight 45 -Total "12%" -Content {
                    "Test"
                    New-UDAntdChartMiniProgress -Value { 20..99 | Get-Random } -StrokeWidth 3 -Target 100 -AutoRefresh -RefreshInterval 2000 
                } -Footer (
                    New-UDAntdChartField -Label "Just testing for demo" -Content { 20..154 | Get-Random } -AutoRefresh
                )
                
            } 
            New-UDAntdColumn -span 8 -Content {
                New-UDAntdCard -Id "mini_ring_progress" -Title "Mini Ring Progress" -Content {
                    New-UDAntdRow -Content {
                        New-UDAntdColumn -Span 8 -Content {
                            New-UDAntdMiniRingProgress -Percent 30 -Color @("red", "transparent") -AutoRefresh
                        } -Style @{ padding = 16 }
                        New-UDAntdColumn -Span 8 -Content {
                            New-UDAntdMiniRingProgress -Percent 80 -Color @("lime", "transparent") -AutoRefresh
                        } -Style @{ padding = 16 }
                        New-UDAntdColumn -Span 8 -Content {
                            New-UDAntdMiniRingProgress -Percent 40 -Color @("pink", "transparent") -AutoRefresh
                        } -Style @{ padding = 16 }
                    } -Gutter @(24)
                } 
            } 
        } -Gutter @(16, 16)  
        New-UDAntdRow -Content {
            New-UDAntdColumn -Span 6 -Content {
                New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh
                New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "line" -StrokeColor "gold"
                New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "circle" -StrokeColor "gold"
                New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "dashboard" -StrokeColor "gold"
            }
            New-UDAntdColumn -Span 6 -Content {
                New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "line" -StrokeColor "gold" -ShowInfo
                New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "circle" -StrokeColor "gold" -ShowInfo
                New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "dashboard" -StrokeColor "gold" -ShowInfo
                New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -StrokeColor "gold" -Step 10 -ShowInfo

            }
            New-UDAntdColumn -Span 6 -Content {

            }
            New-UDAntdColumn -Span 6 -Content {

            }
        } -Gutter @(16)
    }
    New-UDPage -Title 'Not Found' -Name "404"  -Endpoint {
        New-UDAntdResult -Status 404 -Title "Page not found" -SubTitle "Try again the url is not exsists" 
    }  
    New-UDPage -Title 'AutoComplete' -Name "AutoComplete"  -Endpoint {
        $Repos = Get-Content -Path "$Root\data\data.json" -Raw | ConvertFrom-Json
        [System.Collections.ArrayList]$filters = @()
        $null = $filters.AddRange($Repos[0].psobject.Properties.name)
        $null = $filters.Add('owner.id')
        New-UDAntdAutoComplete -FilterKeys $filters.ToArray() -dataSource {
            $Repos | ConvertTo-Json 
        }
    }  
    New-UDPage -Url "/Demos/:demoId" -Endpoint {
        param($DemoId)
      
        if ($DemoId -eq "Monitor") {
            New-UDAntdTimeLine -Mode alternate -Content {
                New-UDAntdTimeLineItem -Color "red" -Content {
                    New-UDAntdCard -MetaTitle "Time line card" -MetaDescription "Just Do It." -Bordered
                }
                New-UDAntdTimeLineItem -Color "red" -Dot ( New-UDAntdIcon -Icon GithubOutlined -Size xs ) -Content {
                    New-UDAntdCard -MetaTitle "Time line card" -MetaDescription "Just Do It." -Bordered
                }
            } -Id "timeline" -IsEndpoint 

            $Cache:Titem = 0
            New-UDAntdButton -Label "Add Item" -OnClick {
                ++$Cache:Titem
                Add-UDElement -ParentId "timeline" -Content {
                    New-UDAntdTimeLineItem -Id "demo_$Cache:Titem" -Color "pink" -Content {
                        New-UDAntdCard -MetaTitle "Time line card" -MetaDescription "Just Do It. demo$Cache:Titem" -Bordered
                    }
                }

            }
            New-UDAntdPopConfirm -Id 'demo_popconfirm' -Title "Are you shure you wanna delete this item ?" -Content (
                @(New-UDAntdButton -Label "Remove Item" 
                    "demo me")
            ) -OnConfirm {
                --$Cache:Titem
                Remove-UDElement -ParentId "timeline" -Id "demo_$Cache:Titem"
            }
        }
        if ($DemoId -eq "UserSettings") {
            New-UDAntdRow -Align middle -Justify center -Gutter @(24, 24) -Content {
                New-UDAntdColumn -Span 24 -Content {
                    New-UDAntdCountdown -Id "demo_countdown" -Title "Demo Countdown" -ValueStyle @{fontSize = 64 } -Format "DD HH:mm:ss" -Value (
                        [DateTimeOffset]::Now.AddDays(2).ToUnixTimeMilliseconds()
                    ) 
                }
            }
        }
        if ($DemoId -eq "GithubClone") {
            New-UDAntdRow -Align middle -Justify center -Gutter @(24, 24) -Content {
                New-UDAntdColumn -Span 24 -Content {
                    New-UDAntdComment -Id 'main_comment' -Author "alon gvili" -Message { "Demo message for checking the comment component" } -Actions {
                        New-UDAntdButton -Label 'Reply' -ButtonType link -Icon (
                            New-UDAntdIcon -Icon RetweetOutlined -Size sm
                        ) -OnClick {
                            Add-UDElement -ParentId "main_comment" -content { New-UDAntdComment -Author "adam" -Message { "checking the comment component" } -Actions {
                                    New-UDAntdButton -Label 'Reply' -ButtonType link -Icon (
                                        New-UDAntdIcon -Icon RetweetOutlined -Size sm
                                    )
                                }
                            }
                            
                        }
                    }

                }
            }
            # New-UDAntdRow -Align middle -Justify center -Gutter @(24, 24) -Content {
            #     New-UDAntdColumn -Span 24 -Content {
            #         # $Cach:Forks.Foreach({ Get-GitHubUser -User })
            #         New-UDAntdAvatarList -Size large -MaxLength 6 -Content {
            #             $Cache:Forks = (Get-GitHubRepositoryFork -OwnerName AlonGvili -RepositoryName UniversalDashboard.Markdown).owner 
            #             $Cache:Forks | % {
            #                 $user = Get-GithubUser -User $_.login
            #                 New-UDAntdAvatarListItem -Source $_.avatar_url -Tips (
            #                     "{0} Followers {1} | Following {2}" -f $user.name, $user.followers, $user.following
            #                 ) -OnClick {
            #                     Invoke-UDRedirect -Url $_.html_url -OpenInNewWindow
            #                 } 
            #             }
                        
            #         }
            #     }
            # }
            New-UDAntdRow -Align middle -Justify center -Gutter @(24, 24) -Content {
                New-UDAntdColumn -Span 24 -Content {
                    New-UDAntdCarousel -Content {
                        New-UDAntdCard -MetaTitle "card 1" -MetaDescription "card 1 desc" -BodyStyle @{backgroundColor = "red"; height = 350}
                        New-UDAntdCard -MetaTitle "card 2" -MetaDescription "card 2 desc" -BodyStyle @{backgroundColor = "blue"; height = 350}
                        New-UDAntdCard -MetaTitle "card 3" -MetaDescription "card 3 desc" -BodyStyle @{backgroundColor = "green"; height = 350}
                        New-UDAntdCard -MetaTitle "card 4" -MetaDescription "card 4 desc" -BodyStyle @{backgroundColor = "yellow"; height = 350}
                    } -Dots -DotPosition bottom -AutoPlay
                }
            }
            New-UDAntdRow -Align middle -Justify center -Gutter @(24, 24) -Content {
                New-UDAntdColumn -Span 24 -Content {
                    New-UDAntdCalendar -Data {
                        Get-Content -Path "$PSScriptRoot\data\data2.json" -Raw 
                    } -DateRange @("2019-05-01","2019-10-31") -Width 1200 -Height 600
                }
            }
        }
        
    }  

) -Theme @{
    primaryColor = "#642ab5"
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
            ) -Text "Docs" -To "/Badges"
            New-UDAntdMenuItem -Content (
                New-UDAntdHeaderAccountSettings -Name "Alon Gvili" -Image "https://avatars1.githubusercontent.com/u/34351424?s=400&u=1af0f32562a8f68850c736e3fca838c5ed022203&v=4" -Menu (
                    New-UDAntdMenu -Content {
                        New-UDAntdMenuItem -Icon (
                            New-UDAntdIcon -Icon ReadOutlined
                        ) -Text "Docs" -To "#"
                        New-UDAntdMenuItem -Icon (  
                            New-UDAntdIcon -Icon SettingOutlined
                        ) -Text "Settings"  -To "#"
                        New-UDAntdMenuItem -Icon (
                            New-UDAntdIcon -Icon UserOutlined
                        ) -Text "Profile"  -To "#"
                        New-UDAntdMenuItem -Icon (
                            New-UDAntdIcon -Icon LockOutlined
                        ) -Text "Security"  -To "#" 
                        New-UDAntdMenuItem -Content (
                            New-UDAntdTogglePrimaryColor
                        )
                        New-UDAntdMenuItem -Content (
                            New-UDAntdToggleColorMode
                        )
                    }
                )
            )
        }
        
        
    }
) -SideBar (
    New-UDAntdSideBar -Visible -Theme dark -Content {
        New-UDAntdMenu -Mode inline -Content {
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon ReadOutlined
            ) -Text "Docs" -To "#"
            New-UDAntdMenuItem -Icon (  
                New-UDAntdIcon -Icon SettingOutlined
            ) -Text "Settings"  -To "#"
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon UserOutlined
            ) -Text "Profile"  -To "#"
            New-UDAntdMenuDivider
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon LockOutlined
            ) -Text "Security"  -To "#" 
            New-UDAntdMenuItem -Icon (
                New-UDAntdIcon -Icon FileSearchOutlined
            ) -Text "AutoComplete"  -To "/AutoComplete" 
        }
    }
)