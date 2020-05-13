---
external help file: UniversalDashboard.Antd-help.xml
Module Name: UniversalDashboard.Antd
online version:
schema: 2.0.0
---

# New-UDAntdCard

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

### Default (Default)
```
New-UDAntdCard [-Id <String>] [-ClassName <String>] [-actions <Object[]>] [-Extra <Object[]>] [-Cover <Object>]
 [-Loading] [-Hoverable] [-Bordered] [-Size <String>] [-Content <ScriptBlock>] [-Style <Hashtable>]
 [-HeadStyle <Hashtable>] [-BodyStyle <Hashtable>] [-Title <Object>] [-Variant <String>] [-IsEndpoint]
 [-AutoRefresh] [-RefreshInterval <Int32>] [<CommonParameters>]
```

### Grid
```
New-UDAntdCard [-Id <String>] [-ClassName <String>] [-actions <Object[]>] [-Extra <Object[]>] [-Cover <Object>]
 [-Loading] [-Hoverable] [-Bordered] [-Size <String>] [-Style <Hashtable>] [-HeadStyle <Hashtable>]
 [-BodyStyle <Hashtable>] [-Title <Object>] [-Variant <String>] [-IsEndpoint] [-AutoRefresh]
 [-RefreshInterval <Int32>] -GridCards <Hashtable[]> [<CommonParameters>]
```

### Tabs
```
New-UDAntdCard [-Id <String>] [-ClassName <String>] [-actions <Object[]>] [-Cover <Object>] [-Loading]
 [-Hoverable] [-Bordered] [-Size <String>] [-Style <Hashtable>] [-HeadStyle <Hashtable>]
 [-BodyStyle <Hashtable>] [-Title <Object>] [-Variant <String>] [-IsEndpoint] [-AutoRefresh]
 [-RefreshInterval <Int32>] -Tabs <Hashtable[]> -DefaultActiveKey <String> [-TabBarExtraContent <Object>]
 [-TabBarGutter <Int32>] [-TabPosition <String>] [-TabBarStyle <Hashtable>] [<CommonParameters>]
```

### Meta
```
New-UDAntdCard [-Id <String>] [-ClassName <String>] [-actions <Object[]>] [-Extra <Object[]>] [-Cover <Object>]
 [-Loading] [-Hoverable] [-Bordered] [-Size <String>] [-Content <ScriptBlock>] [-Style <Hashtable>]
 [-HeadStyle <Hashtable>] [-BodyStyle <Hashtable>] [-Variant <String>] [-IsEndpoint] [-AutoRefresh]
 [-RefreshInterval <Int32>] [-MetaTitle <String>] [-MetaDescription <String>] [-MetaAvatar <Object>]
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
{{ Fill AutoRefresh Description }}

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

### -BodyStyle
{{ Fill BodyStyle Description }}

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

### -Bordered
{{ Fill Bordered Description }}

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
{{ Fill ClassName Description }}

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

### -Content
{{ Fill Content Description }}

```yaml
Type: ScriptBlock
Parameter Sets: Default, Meta
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Cover
{{ Fill Cover Description }}

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

### -DefaultActiveKey
{{ Fill DefaultActiveKey Description }}

```yaml
Type: String
Parameter Sets: Tabs
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Extra
{{ Fill Extra Description }}

```yaml
Type: Object[]
Parameter Sets: Default, Grid, Meta
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GridCards
{{ Fill GridCards Description }}

```yaml
Type: Hashtable[]
Parameter Sets: Grid
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -HeadStyle
{{ Fill HeadStyle Description }}

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

### -Hoverable
{{ Fill Hoverable Description }}

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

### -Id
{{ Fill Id Description }}

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
{{ Fill IsEndpoint Description }}

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

### -Loading
{{ Fill Loading Description }}

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

### -MetaAvatar
{{ Fill MetaAvatar Description }}

```yaml
Type: Object
Parameter Sets: Meta
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetaDescription
{{ Fill MetaDescription Description }}

```yaml
Type: String
Parameter Sets: Meta
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MetaTitle
{{ Fill MetaTitle Description }}

```yaml
Type: String
Parameter Sets: Meta
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RefreshInterval
{{ Fill RefreshInterval Description }}

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

### -Size
{{ Fill Size Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: small, default

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Style
{{ Fill Style Description }}

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

### -TabBarExtraContent
{{ Fill TabBarExtraContent Description }}

```yaml
Type: Object
Parameter Sets: Tabs
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TabBarGutter
{{ Fill TabBarGutter Description }}

```yaml
Type: Int32
Parameter Sets: Tabs
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TabBarStyle
{{ Fill TabBarStyle Description }}

```yaml
Type: Hashtable
Parameter Sets: Tabs
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TabPosition
{{ Fill TabPosition Description }}

```yaml
Type: String
Parameter Sets: Tabs
Aliases:
Accepted values: top, bottom, left, right

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tabs
{{ Fill Tabs Description }}

```yaml
Type: Hashtable[]
Parameter Sets: Tabs
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Title
{{ Fill Title Description }}

```yaml
Type: Object
Parameter Sets: Default, Grid, Tabs
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Variant
{{ Fill Variant Description }}

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: inner

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -actions
{{ Fill actions Description }}

```yaml
Type: Object[]
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

### Ant.Design.Card

## NOTES

## RELATED LINKS
