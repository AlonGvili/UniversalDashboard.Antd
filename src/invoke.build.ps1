task Clean {
    Remove-Item -Path "$PSScriptRoot\output" -Force -ErrorAction SilentlyContinue -Recurse
    # Remove-Item -Path "$PSScriptRoot\public" -Force -ErrorAction SilentlyContinue -Recurse
}

task Stage {
    $OutputPath = "$PSScriptRoot\output\UniversalDashboard.Antd"
    New-Item $OutputPath -Type Directory 
}

task MergePsm1 {
    Copy-Item "$PSScriptRoot\UniversalDashboard.Antd.psm1" "$PSScriptRoot\output\UniversalDashboard.Antd\UniversalDashboard.Antd.psm1"
    # Copy-Item "$PSScriptRoot\public" $OutputPath -Recurse
    Get-ChildItem "$PSScriptRoot\Scripts" -File -Recurse -Filter "*.ps1" | ForEach-Object {
        Get-Content $_.FullName -Raw | Out-File  "$PSScriptRoot\output\UniversalDashboard.Antd\UniversalDashboard.Antd.psm1" -Append -Encoding UTF8
    }
}

task . Clean, Stage, MergePsm1