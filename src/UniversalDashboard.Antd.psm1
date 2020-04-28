$TAType = [psobject].Assembly.GetType('System.Management.Automation.TypeAccelerators')
$TAtype::Add('DashboardColor', 'UniversalDashboard.Models.DashboardColor')
$TAtype::Add('Endpoint', 'UniversalDashboard.Models.Endpoint')

