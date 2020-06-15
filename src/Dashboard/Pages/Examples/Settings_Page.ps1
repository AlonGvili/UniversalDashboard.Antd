New-UDPage -Title 'Settings' -Url "/users/:user/settings" -Endpoint {
    New-UDAntdRow -Content {
        # Form column
        New-UDAntdColumn -Content {
            New-UDAntdCard -Content {
                New-UDAntdForm -Variant small -Content {
                    New-UDAntdFormItem -Name 'name' -Content (
                        New-UDAntdInput -PlaceHolder 'Github repository name' -Prefix ( New-UDAntdIcon -Icon GithubOutlined )
                    ) -Rules @(
                        @{
                            required = $true
                            message  = "you must enter repository name."
                        }
                    )
                    New-UDAntdFormItem -Name 'author' -Content (
                        New-UDAntdInput -PlaceHolder 'Author name' -Prefix ( New-UDAntdIcon -Icon UserOutlined )
                    ) -Rules @(
                        @{
                            required = $true
                            message  = "you must enter author name."
                        }
                    )
                    New-UDAntdFormItem -Name 'commits' -Content (
                        New-UDAntdInputNumber -DefaultValue 2 
                    )
                } -Layout inline -OnSubmit {
                    Update-UDAntdTimeLine -TimelineId "gh_commits" -Properties @{pending = "Processing timeline items.."}
                    # Clear-UDAntdTimeline -TimelineId "gh_commits"
                    [System.Collections.ArrayList]$ItemsToAdd = @()
                    $RepoInfo = ConvertFrom-Json $EventData
                    $RepoCommitsInfo = Invoke-GHRestMethod -Method Get -UriFragment "/repos/$($RepoInfo.author)/$($RepoInfo.name)/commits" 
                   
                    foreach ($item in $RepoCommitsInfo[0..($RepoInfo.commits - 1)]) {
                        $CommitInfo = Invoke-GHRestMethod -Method Get -UriFragment $item.url
                        $CommitProps = @{
                            Id      = $item.sha
                            Name    = $item.commit.committer.name
                            AName   = $item.commit.author.name
                            Date    = $item.commit.committer.date
                            Message = $item.commit.message
                            Stats   = @{
                                Total     = $CommitInfo.stats.total
                                Additions = $CommitInfo.stats.additions
                                Deletions = $CommitInfo.stats.deletions
                                Comments  = $item.commit.comment_count
                            }
                        }
                    
                        
                        
                            $item = New-UDAntdTimeLineItem -Id $CommitProps.Id -Label "$($CommitProps.Date)" -Content {
                            New-UDAntdCard -MetaTitle "$($CommitProps.AName)" -MetaDescription (
                                @(
                                    New-UDAntdRow -Content {
                                        New-UDAntdColumn -Content {
                                            "$($CommitProps.Message)"
                                        }
                                    } 
                                    New-UDAntdRow -Content {
                                        New-UDAntdColumn -Content {
                                            New-UDAntdStatistic -Title Total -Value { $CommitProps.Stats.Total } 
                                        }
                                        New-UDAntdColumn -Content {
                                            New-UDAntdStatistic -Title Additions -Value { $CommitProps.Stats.Additions } 
                                        }
                                        New-UDAntdColumn -Content {
                                            New-UDAntdStatistic -Title Deletions -Value { $CommitProps.Stats.Deletions }
                                        }
                                    } -Align middle -Justify space-around 
                                )
                            ) 
                        } 
                        $null = $ItemsToAdd.Add($item)
                    }
                    
                    Add-UDAntdTimelineItem -TimelineId "gh_commits" -Items $ItemsToAdd
                    Update-UDAntdTimeLine -TimelineId "gh_commits" -Properties @{pending = $null}
                } -OnReset {
                    Clear-UDAntdTimeline -TimelineId "gh_commits"
                }
            } -BodyStyle @{padding = 24 }
        } -Span 20 -Push 2 -Pull 2
    } -Align middle -Gutter @(24, 24)
    New-UDAntdRow -Content {
        New-UDAntdColumn -Content { 
            New-UDAntdTimeLine -id "gh_commits" -Mode alternate -Pending "initial timeline"
        } -Span 12 -Push 6 -Pull 6
    } -Align middle
}


