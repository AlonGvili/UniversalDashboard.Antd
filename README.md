# UniversalDashboard.Antd
Ant-Design library as cutom components for universaldashboard

The module in this repo is still in development so there are bugs!!
the module was based on this awesome library https://ant.design/docs/react/introduce

I will try to add more components to this module but is goint to take time, they have a lot of components ( 63 )

## Build the module
Run the build script
```powershell
.\src\build.ps1
```
## Notes
if you want to test the new controls with out side effects of the materialzeCss css file do this

```powershell
$Dashboard = New-UDDashboard -Title … -Content { … }
$Dashboard.FrameworkAssetId = [UniversalDashboard.Services.AssetService]::Instance.Frameworks[“Antd”]
Start-UDDashboard -Dashboard $Dashboard -Port 10000 -Force
```

This will load only the Antd stuff and no materializeCss stuff.
