New-UDPage -Title 'ProgressBar' -Name ProgressBar -Endpoint {
    New-UDAntdRow -Content {
        New-UDAntdColumn -Span 6 -Content {
            New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh
            New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "line" 
            New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "circle" 
            New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "dashboard" 
        }
        New-UDAntdColumn -Span 6 -Content {
            New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "line"  -ShowInfo
            New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "circle"  -ShowInfo
            New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Type "dashboard"  -ShowInfo
            New-UDAntdProgress -Percent { 1..100 | Get-Random } -AutoRefresh -Step 8 -ShowInfo

        }
    } -Gutter @(16)
}