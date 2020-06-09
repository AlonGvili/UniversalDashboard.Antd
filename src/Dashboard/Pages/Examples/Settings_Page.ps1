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
            Default { }
        }
    }
}
New-UDPage -Title 'Profile' -Url "/Users/:user/profile" -Endpoint {
    param(
        [ValidateSet("AdamDriscoll", "AlonGvili")]
        $user
    )
    $UserInfo = Get-GHUser -User $User
    $UserFollowers = if ($user -eq "AdamDriscoll") { 
        Get-Content -Path "$Root\data\adamFollowers.json" -Raw | ConvertFrom-Json 
    }
    else { Get-Content -Path "$Root\data\ghFollowers.json" -Raw | ConvertFrom-Json }
    
    New-UDAntdRow -Content {
        New-UserCard -InputObject $UserInfo
        New-UserCard -InputObject $UserFollowers
    } -Gutter @(16, 16)
}