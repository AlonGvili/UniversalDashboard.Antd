New-UDPage -Title 'Not Found' -Name "404"  -Endpoint {
    New-UDAntdResult -Status 404 -Title "Page not found" -SubTitle "Try again the url is not exsists" 
}  