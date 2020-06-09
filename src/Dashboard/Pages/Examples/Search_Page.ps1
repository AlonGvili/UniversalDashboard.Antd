New-UDPage -Title 'AutoComplete' -Name "AutoComplete"  -Endpoint {
    $Repos = Get-Content -Path "$Root\data\data.json" -Raw | ConvertFrom-Json
    [System.Collections.ArrayList]$filters = @()
    $null = $filters.AddRange($Repos[0].psobject.Properties.name)
    $null = $filters.Add('owner.id')
    New-UDAntdAutoComplete -FilterKeys $filters.ToArray() -dataSource {
        $Repos | ConvertTo-Json 
    }
}  