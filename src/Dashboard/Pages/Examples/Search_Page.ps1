New-UDPage -Title 'AutoComplete' -Name "AutoComplete"  -Endpoint {
    $Repos = Get-Content -Path "$Root\data\data.json" -Raw | ConvertFrom-Json
    [System.Collections.ArrayList]$filters = @()
    $null = $filters.AddRange($Repos[0].psobject.Properties.name)
    $null = $filters.Add('owner.id')
    New-UDAntdAutoComplete -FilterKeys $filters -dataSource {
        $Repos | ConvertTo-Json 
    } -OnChange {
        
    }

    $namesAsJson = $Repos.Name | ConvertTo-Json
    New-UDAntdSelect -Id "demo_select" -DataSource {
        $namesAsJson
    } -Bordered -Placeholder "Find github repo."

    New-UDantdTag -PresetColor blue -Content "Twitter"
    New-UDantdTag -Status processing -Content "in progress..."
    New-UDantdTag -Status processing -Content "in progress..." -WithIcon
    New-UDantdTag -Status success -Content "success" -WithIcon
    New-UDantdTag -Status error -Content "error" -WithIcon
    New-UDantdTag -Status warning -Content "warning" -WithIcon
    New-UDAntdTag -Content "Youtube" -PresetColor red -Icon (
        New-UDAntdIcon -Icon YoutubeOutlined -Size xs
    )
    New-UDAntdTag -Content "Youtube" -PresetColor red -Icon (
        New-UDAntdIcon -Icon YoutubeOutlined -Size xs
    ) -Closable
} -DefaultHomePage 