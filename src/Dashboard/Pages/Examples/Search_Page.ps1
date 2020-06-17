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
} -DefaultHomePage 