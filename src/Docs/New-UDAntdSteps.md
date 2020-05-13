---
external help file: UniversalDashboard.Antd-help.xml
Module Name: UniversalDashboard.Antd
online version:
schema: 2.0.0
---

# New-UDAntdSteps

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

```
New-UDAntdSteps [[-Id] <String>] [[-Key] <String>] [[-ClassName] <String>] [[-Variant] <String>]
 [[-Current] <Int32>] [[-Direction] <String>] [[-LabelPlacement] <String>] [-ProgressDot] [[-Size] <String>]
 [[-Status] <String>] [[-Initial] <Int32>] [[-OnChange] <ScriptBlock>] [[-Content] <ScriptBlock>] [-IsEndpoint]
 [-AutoRefresh] [[-RefreshInterval] <Int32>] [[-CustomErrorIcon] <Object>] [[-CustomFinishIcon] <Object>]
 [[-Style] <Hashtable>] [<CommonParameters>]
```

## DESCRIPTION
{{ Fill in the Description }}

## EXAMPLES

### Example 1
```powershell
PS C:\> {{ Add example code here }}
```

{{ Add example description here }}

## PARAMETERS

### -AutoRefresh
Do autorefresh the Content scriptblock.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ClassName
A class name for the control use this to style the control using UDTheme.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Content
Steps container content, it should be StepsItem using New-UDAntdStepsItem.

```yaml
Type: ScriptBlock
Parameter Sets: (All)
Aliases:

Required: False
Position: 11
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Current
To set the current step, counting from 0.
You can overwrite this state by using status of Step.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 4
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomErrorIcon
Set custom error icon when step get an error.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 13
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CustomFinishIcon
Set custom finish icon when step finish.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 14
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Direction
To specify the direction of the step bar, horizontal or vertical.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: horizontal, vertical

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Id
The id of the control if not specified it will auto generate a guid.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Initial
Set the initial step, counting from 0.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsEndpoint
Is the Content scriptblock is register as ud endpoint

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Key
The id of the control if not specified it will auto generate a guid.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LabelPlacement
Place title and description with horizontal or vertical direction.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: horizontal, vertical

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OnChange
Trigger when Step is changed.

```yaml
Type: ScriptBlock
Parameter Sets: (All)
Aliases:

Required: False
Position: 10
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProgressDot
Steps with progress dot style.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshInterval
When in ms to rerun the Content scriptblock.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 12
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Size
To specify the size of the step bar, default and small are currently supported.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: default, small

Required: False
Position: 7
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Status
To specify the status of current step, can be set to one of the following Contents: wait process finish error.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: wait, process, finish, error

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Style
Set css style on the main container.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 15
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Variant
Type of steps, can be set to one of the following Contents: default, navigation.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: navigation, default

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Ant.Design.Steps

## NOTES

## RELATED LINKS
