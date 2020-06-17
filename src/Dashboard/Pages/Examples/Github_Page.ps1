function New-UserCard {
    param(
        [Parameter(ValueFromPipeline)]
        [object[]]$InputObject
    )
    process {
        foreach ($User in $InputObject) {
            New-UDAntdColumn -Content {
                New-UDAntdCard -MetaTitle $User.login -MetaDescription (
                    @(
                        "Followers $($User.followers)" 
                        New-UDAntdDivider -Variant vertical
                        "Following $($User.following)"
                    )
                ) -MetaAvatar (
                    New-UDAntdAvatar -Src $User.avatar_url -Shape circle -Size large
                )
            } -Span 4 
        }
    }
}

function Get-GHUser {
    param (
        [Parameter()]
        [string]$User
    )
    Process {
        switch ($User) {
            "AlonGvili" { 
                Get-Content -Path "$Root\data\alon_gh.json" -Raw | ConvertFrom-Json 
            }
            "AdamDriscoll" { 
                Get-Content -Path "$Root\data\adam_gh.json" -Raw | ConvertFrom-Json 
            }   
        }
    }
}
function Get-GHFollowers {
    param (
        [Parameter()]
        [string]$User
    )
    Process {
        switch ($User) {
            "AlonGvili" { 
                Get-Content -Path "$Root\data\ghFollowers.json" -Raw | 
                    ConvertFrom-Json | 
                        Select-Object -Property login, id, name, email, location, company, avatar_url, followers, following 
            }
            "AdamDriscoll" { 
                Get-Content -Path "$Root\data\adamFollowers.json" -Raw | 
                    ConvertFrom-Json |
                        Select-Object -Property login, id, name, email, location, company, avatar_url, followers, following  
            }   
        }
    }
}

New-UDPage -Title 'Profile' -Url "/Users/:user/profile" -Endpoint {
    param(
        [ValidateSet("AdamDriscoll", "AlonGvili")]
        $user
    )
    $UserInfo = Get-GHUser -User $User
    $UserFollowers = Get-GHFollowers -User $User  
    
    New-UDAntdRow -Content {
        New-UDAntdColumn -Span 6 -Content {
            New-UserCard -InputObject $UserInfo
        }
        New-UDAntdRow -Content {
            @(2020, 2019, 2018, 2017, 2016).ForEach( {
                    New-UDAntdColumn -Span 6  -Content {
                        New-UDAntdGithubCalendar -UserName $User -FullYear -Years $_
                    }
                })
        } -Gutter @(16, 16)   
    } -Gutter @(16, 16)

    New-UDAntdRow -Content {
        New-UDAntdColumn -Span 24 -Content {
            New-UDAntdAutoComplete -FilterKeys @("login", "id", "name", "email", "location", "company") -dataSource {
                $UserFollowers | ConvertTo-Json 
            } -OnChange {
                $e = ConvertFrom-Json -InputObject $EventData
                $t = New-UDAntdRow -Content { New-UserCard -InputObject $e } -Gutter @(16, 16)
                Set-UDElement -Id "gh_followers_card" -Properties @{ attributes = @{
                        metaDescription = $t  
                    }
                }
            } -Style @{width = "100%" } -Placeholder "Search for followers..."
        }
    } -Gutter @(24, 24)
    New-UDAntdRow -Content {
        New-UDAntdColumn -Span 24 -Content {
            New-UDAntdCard -Id "gh_followers_card" -MetaTitle "FOLLOWERS" -MetaDescription ""
        }
    } -Gutter @(24, 24)
}