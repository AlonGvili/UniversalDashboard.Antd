New-UDPage -Name GithubTimeline -Endpoint {
    New-UDAntdRow -Content {
        # Form column
        New-UDAntdColumn -Content {
            New-UDAntdCard -Bordered -Content {
                New-UDAntdForm -Variant small -Content {
                    New-UDAntdFormItem -Name 'name' -Content (
                        New-UDAntdInput -PlaceHolder 'Github repository name' -Prefix ( New-UDAntdIcon -Icon UserOutlined )
                    ) -Rules @(
                        @{
                            required = $true
                            message  = "you must enter repository name."
                        }
                    )
                    New-UDAntdFormItem -Name 'author' -Content (
                        New-UDAntdInput -PlaceHolder 'Github repository authjor name' -Prefix ( New-UDAntdIcon -Icon UserOutlined )
                    ) -Rules @(
                        @{
                            required = $true
                            message  = "you must enter author name."
                        }
                    )
                } -Layout inline -OnSubmit {
                    $RepoInfo = ConvertFrom-Json $EventData
                    $RepoCommitsInfo = Invoke-GHRestMethod -Method Get -UriFragment "/repos/$($RepoInfo.author)/$($RepoInfo.name)/commits" 
                    # $RepoCommitsInfo = Invoke-RestMethod "https://api.github.com/repos/$($RepoInfo.author)/$($RepoInfo.name)/commits" 

                    foreach ($item in $RepoCommitsInfo) {
                        $CommitInfo = Invoke-GHRestMethod -Method Get -UriFragment $item.url
                        $CommitProps = @{
                            Id      = $item.sha
                            Name    = $item.commit.committer.name
                            Date    = $item.commit.committer.date
                            Message = $item.commit.message
                            Stats   = @{
                                Total     = $CommitInfo.stats.total
                                Additions = $CommitInfo.stats.additions
                                Deletions = $CommitInfo.stats.deletions
                            }
                        }
                    
                        Add-UDAntdTimelineItem -TimelineId "gh_commits" -Item (
                            New-UDAntdTimeLineItem -Id $CommitProps.Id -Content {
                                New-UDAntdCard -MetaTitle $CommitProps.Message -MetaDescription (
                                    New-UDAntdSpace -Content {
                                        New-UDAntdStatistic -Title Total -Value { $CommitProps.Stats.Total } 
                                        New-UDAntdStatistic -Title Additions -Value { $CommitProps.Stats.Additions } 
                                        New-UDAntdStatistic -Title Deletions -Value { $CommitProps.Stats.Deletions }
                                    }
                                )
                            } -Label "$($CommitProps.Name) | $($CommitProps.Date)"
                        )
                    }
                }
            }
        } -Span 22 -Push 1 -Pull 1
    } -Align middle -Gutter @(24, 24)
    New-UDAntdRow -Content {
        # Timeline column
        New-UDAntdColumn -Content { New-UDAntdTimeLine -id "gh_commits" -Mode alternate } -Span 22 -Push 1 -Pull 1
    } -Align middle -Gutter @(24, 24)
}
# New-UDAntdPopConfirm -Id 'demo_popconfirm' -Title "Are you shure you wanna delete this item ?" -Content (
#     @(New-UDAntdButton -Label "Remove Item")
# ) -OnConfirm {
#     Remove-UDAntdTimelineItem -TimelineId "demo_timeline" -ItemId "item_$Cache:Titem"
# }

