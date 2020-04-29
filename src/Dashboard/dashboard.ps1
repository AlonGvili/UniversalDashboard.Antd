New-UDDashboard -Title 'AntD' -Pages @(
    New-UDPage -Name 'AntD Success' -Content {
        New-UDElement -Id 'Parent' -Tag 'div' -Content {}

        New-UDDynamic -Id 'dynamic' -Content {
            New-UDElement -Tag div -Content {
                Get-Date
            }
        }

        New-UDAntdButton -Label 'Add' -OnClick {
            Add-UDElement -ParentId 'Parent' -Content {
                New-UDElement -Tag 'div' -Content { Get-Date }
            }
        }

        New-UDAntdButton -Label 'Clear' -OnClick {
            Clear-UDElement -Id 'Parent'
        }

        New-UDAntdButton -Label 'Set' -OnClick {
            Set-UDElement -Id 'Parent' -Properties @{
                attributes = @{
                    style = @{
                        backgroundColor = 'red'
                    }
                }
            }
        }
        
        New-UDAntdButton -Label 'Get' -OnClick {
            Get-UDElement -Id 'Parent'
        }

        New-UDAntdButton -Label 'Sync' -OnClick {
            Sync-UDElement -Id 'dynamic'
        }
    }
    New-UDPage -Name 'AntD Wooo!' -Content {
        
    }
    New-UDPage -Name 'AntD Awesome' -Content {
        
    }
)