function New-UDAntdComment {
    [CmdletBinding()]
    [OutputType('Ant.Design.Comment')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "List of action items rendered below the comment content")]
        [scriptblock]$Actions,
        [Parameter(HelpMessage = "The element to display as the comment avatar - generally an antd Avatar or src.")]
        [object]$Avatar,
        [Parameter(HelpMessage = "The element to display as the comment author")]
        [object]$Author,
        [Parameter(HelpMessage = "The main content of the comment.")]
        [scriptblock]$Message,
        [Parameter(HelpMessage = "The date time to display as string.")]
        [string]$DateTime = (get-date -Format "HH:mm dd/MM/yy"),
        [Parameter(HelpMessage = "Set comment css style.")]
        [hashtable]$Style,
        [Parameter()]
        [switch]$AutoRefresh,
        [Parameter()]
        [int]$RefreshInterval = 5000
    )

    End {
        $Content = @()
        $ReplysEndpoint = New-UDEndpoint -Endpoint { $Content } -Id $id

        $UDAntdComment = @{
            assetId         = $AssetId 
            isPlugin        = $true 
            type            = "ud-antd-comment"
            id              = $Id
            key             = (New-Guid).ToString()
            message         = $Message.Invoke()
            avatar          = $Avatar
            style           = $Style
            content         = $Content
            author          = $Author
            actions         = $Actions.Invoke() 
            datetime        = $DateTime
            autoRefresh     = $AutoRefresh.IsPresent
            refreshInterval = $RefreshInterval
        }
        $UDAntdComment.PSTypeNames.Insert(0, 'Ant.Design.Comment')
        $UDAntdComment
    }
}
