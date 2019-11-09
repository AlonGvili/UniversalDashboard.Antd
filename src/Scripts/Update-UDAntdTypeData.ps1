
# function Update-UDAntdTypeData {
#     Param(
#         [Parameter(ValueFromPipeline)]
#         [object]$InputObject
#     )
#     Begin {
#         $CommonParameters = [System.Management.Automation.Internal.CommonParameters].DeclaredMembers | 
#             Where-Object { $_.MemberType -eq 'Property' } | Select-Object -Expand Name
#     }
#     Process {
#         # $ = 
#         (Get-Command -Name $CommandName).Parameters.Values.Name | ForEach-Object {
#             if ($_ -notin $CommonParameters) {
#                 # Add-Member -InputObject $BlanckObject -MemberType NoteProperty -Name $_.Name -Value '' -Force -TypeName ($CommonParameters | Get-Member).TypeName[0]
#                 Update-TypeData -MemberType NoteProperty -MemberName $_ -TypeName $type -Force -Value $null 
#             }
#         }
#     }
# }