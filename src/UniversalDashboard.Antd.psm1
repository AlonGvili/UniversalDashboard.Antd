
# The main index.js bundle
$IndexJs = Get-ChildItem "$PSScriptRoot\jsfiles\index.*.bundle.js"

# Any other JS files in the bundle
$JsFiles = Get-ChildItem "$PSScriptRoot\jsfiles\*.js"

# Source maps to make it easier to debug in the browser
$Maps = Get-ChildItem "$PSScriptRoot\jsfiles\*.map"

# Css files
$Css = Get-ChildItem "$PSScriptRoot\jsfiles\*.css"

# Less files
$Less = Get-ChildItem "$PSScriptRoot\jsfiles\*.less"

# Register the main script and get the AssetID
# $AssetId = [UniversalDashboard.Services.AssetService]::Instance.RegisterScript($IndexJs.FullName)
$AssetId = [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($IndexJs.FullName)
[UniversalDashboard.Services.AssetService]::Instance.RegisterFramework("Antd", $AssetId)

# Register all the other scripts. We don't care about the asset ID. They will be loaded by the main JS file.
foreach ($item in $JsFiles) {
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
}

# Register all the source map files so we can make debugging easier.
foreach ($item in $Maps) {
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
}

# Register all the source map files so we can make debugging easier.
foreach ($item in $Css) {
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
}

# Register all the source map files so we can make debugging easier.
foreach ($item in $Less) {
    [UniversalDashboard.Services.AssetService]::Instance.RegisterAsset($item.FullName) | Out-Null
}

Get-ChildItem (Join-Path $PSScriptRoot "Scripts") -File -Filter "*.ps1" | ForEach-Object {
    . $_.FullName
}
