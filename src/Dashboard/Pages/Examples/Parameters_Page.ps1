New-UDPage -Url "/Demos/:demoId" -Endpoint {
    param($DemoId)
    $Cache:Titem = 0
    if ($DemoId -eq "Timeline") {
        New-UDAntdTimeLine -id "demo_timeline" -Mode alternate 
        New-UDAntdButton -Label "Add Item" -OnClick {
            ++$Cache:Titem
            Add-UDAntdTimelineItem -TimelineId "demo_timeline" -Item (
                New-UDAntdTimeLineItem -Id "item_$Cache:Titem" -Content {
                    New-UDAntdCard -MetaTitle "$Cache:Titem | Time line card" -MetaDescription "Just Do It."
                }
            )
        }
        New-UDAntdPopConfirm -Id 'demo_popconfirm' -Title "Are you shure you wanna delete this item ?" -Content (
            @(New-UDAntdButton -Label "Remove Item")
        ) -OnConfirm {
            Remove-UDAntdTimelineItem -TimelineId "demo_timeline" -ItemId "item_$Cache:Titem"
            --$Cache:Titem
        }
    }
    if ($DemoId -eq "CountDown") {
        New-UDAntdRow -Align middle -Justify center -Gutter @(24, 24) -Content {
            New-UDAntdColumn -Span 24 -Content {
                New-UDAntdCountdown -Id "demo_countdown" -Title "Demo Countdown" -ValueStyle @{fontSize = 64 } -Format "DD HH:mm:ss" -Value (
                    [DateTimeOffset]::Now.AddDays(2).ToUnixTimeMilliseconds()
                ) 
            }
        }
    }
    if ($DemoId -eq "BGSlides") {
        New-UDAntdRow -Content {
            New-UDAntdColumn -Span 24 -Content {
                New-UDAntdCarousel -Content {
                    New-UDAntdCard -MetaTitle "card 1" -MetaDescription "card 1 desc" -BodyStyle @{backgroundColor = "#ff7875"; height = "100vh"; width = "100vw" }
                    New-UDAntdCard -MetaTitle "card 2" -MetaDescription "card 2 desc" -BodyStyle @{backgroundColor = "#91d5ff"; height = "100vh"; width = "100vw" }
                    New-UDAntdCard -MetaTitle "card 3" -MetaDescription "card 3 desc" -BodyStyle @{backgroundColor = "#eaff8f"; height = "100vh"; width = "100vw" }
                    New-UDAntdCard -MetaTitle "card 4" -MetaDescription "card 4 desc" -BodyStyle @{backgroundColor = "#ffadd2"; height = "100vh"; width = "100vw" }
                    New-UDAntdCard -MetaTitle "card 4" -MetaDescription "card 4 desc" -BodyStyle @{backgroundColor = "#d3adf7"; height = "100vh"; width = "100vw" }
                    New-UDAntdCard -MetaTitle "card 4" -MetaDescription "card 4 desc" -BodyStyle @{backgroundColor = "#ffe58f"; height = "100vh"; width = "100vw" }
                } -Dots -DotPosition top -AutoPlay
            }
        }
    }
}  