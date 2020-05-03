---
external help file: UniversalDashboard.Antd-help.xml
Module Name: UniversalDashboard.Antd
online version:
schema: 2.0.0
---

# New-UDAntdStatistic

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

### Statistic (Default)
```
New-UDAntdStatistic [-Id <String>] [-ClassName <String>] [-Value <ScriptBlock>] [-Suffix <Object>]
 [-Title <Object>] [-Prefix <Object>] [-IsEndpoint] [-AutoRefresh] [-RefreshInterval <Int32>]
 [-Precision <Int32>] [-GroupSeparator <String>] [-DecimalSeparator <String>] [-Style <Hashtable>]
 [-ValueStyle <Hashtable>] [<CommonParameters>]
```

### Countdown
```
New-UDAntdStatistic [-Id <String>] [-ClassName <String>] [-Value <ScriptBlock>] [-Suffix <Object>]
 [-Title <Object>] [-Prefix <Object>] [-IsEndpoint] [-AutoRefresh] [-RefreshInterval <Int32>]
 [-Style <Hashtable>] [-ValueStyle <Hashtable>] [-OnFinish <ScriptBlock>] [-Format <String>]
 [<CommonParameters>]
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
Do autorefresh the value scriptblock.

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
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DecimalSeparator
decimal separator

```yaml
Type: String
Parameter Sets: Statistic
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Format
Format as moment.js link to examples: https://momentjs.com/docs/#/parsing/string-formats/

```yaml
Type: String
Parameter Sets: Countdown
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GroupSeparator
group separator

```yaml
Type: String
Parameter Sets: Statistic
Aliases:

Required: False
Position: Named
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
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -IsEndpoint
Is the value scriptblock is register as ud endpoint

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

### -OnFinish
Trigger when time's up

```yaml
Type: ScriptBlock
Parameter Sets: Countdown
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Precision
precision of input value

```yaml
Type: Int32
Parameter Sets: Statistic
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Prefix
prefix node of value

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshInterval
When in ms to rerun the value scriptblock.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Style
Set the component main css style.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Suffix
suffix node of value

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title
Display title

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Value
Set target countdown time or Display value

```yaml
Type: ScriptBlock
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ValueStyle
Set value css style

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### UDAntd.Statistic

## NOTES

## RELATED LINKS
