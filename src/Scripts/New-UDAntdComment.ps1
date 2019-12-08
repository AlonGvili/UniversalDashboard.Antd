function New-UDAntdComment {
    [CmdletBinding()]
    [OutputType('UDAntd.Comment')]
    param(
        [Parameter(HelpMessage = "The id of the control if not specified it will auto generate a guid.")]
        [string]$Id = (New-Guid).ToString(),
        [Parameter(HelpMessage = "A class name for the control use this to style the control using UDTheme.")]
        [string]$ClassName,
        [Parameter(HelpMessage = "List of action items rendered below the comment content")]
        [object[]]$Actions,
        [Parameter(HelpMessage = "The element to display as the comment avatar - generally an antd Avatar or src.")]
        [object]$Avatar,
        [Parameter(HelpMessage = "The element to display as the comment author")]
        [object]$Author,
        [Parameter(HelpMessage = "Use content for adding nested comments as children of the Comment.")]
        [scriptblock]$Content,
        [Parameter(HelpMessage = "The main content of the comment.")]
        [scriptblock]$Message,
        [Parameter(HelpMessage = "The date time to display.")]
        [string]$DateTime,
        [Parameter(HelpMessage = "Set comment css style.")]
        [hashtable]$Style
    )

    End {

        if ($null -ne $Content) {
            if ($Content -is [scriptblock]) {
                $ContenteEndpoint = New-UDEndpoint -Endpoint $Content -Id $Id
                $CommentContent = $Content.Invoke()
            }
            elseif ($Content -isnot [UniversalDashboard.Models.Endpoint]) {
                throw "Content must be a script block or UDEndpoint"
            }   
        }
        else{
            $CommentContent = @()
        }

        if ($null -ne $Message) {
            $CommentMessage = $Message.Invoke() 
        }
        else{
            $Message = {''}
            $CommentMessage = $Message.Invoke() 
        }

        $UDAntdComment = @{
            assetId   = $AssetId 
            isPlugin  = $true 
            type      = "ud-antd-comment"
            id        = $Id
            key       = (New-Guid).ToString()
            content   = $CommentContent
            message   = $CommentMessage
            className = $ClassName
            avatar    = $Avatar
            style     = $Style
            # hasCallback = $null -ne $OnClose
            author    = $Author
            actions   = $Actions
            datetime = $DateTime
        }
        $UDAntdComment.PSTypeNames.Insert(0, 'UDAntd.Comment')
        $UDAntdComment
    }
}
