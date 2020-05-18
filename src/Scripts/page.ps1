function New-UDPage 
{
    param(
        [Parameter(Position = 0)]
        [object]$Name,
        [Parameter(Position = 2)]
        [Alias("Endpoint")]
        [Endpoint]$Content,
        [Parameter(Position = 0)]
        [string]$Url,
        [Parameter(Position = 3)]
        [Switch]$DefaultHomePage,
        [Parameter(Position = 4)]
        [string]$Title,
        [Parameter()]
        [Switch]$Blank,
        [Parameter()]
        [string]$Id = [Guid]::NewGuid().ToString(),
        [Parameter()]
        [ScriptBlock]$OnLoading,
        [Parameter()]
        [object]$Icon
    )

    $Content.Register($Id, $PSCmdlet)

    if ($null -ne $Url -and -not $Url.StartsWith("/"))
    {
        $Url = "/" + $Url
    }

    if ($Null -eq $Url -and $null -ne $Name -and $Name -is [System.string])
    {
        $Url = "/" + $Name.Replace(' ', '-');
    }

    if ($OnLoading)
    {
        $LoadingContent = & $OnLoading
    }
    

    @{
        name = $Name
        url = $Url
        id = $Id
        defaultHomePage = $DefaultHomePage.IsPresent
        title = $Title
        blank = $Blank.IsPresent
        loading = $LoadingContent
        content = $Content 
        icon = $Icon
        dynamic = $Url -match ":"
    }
}