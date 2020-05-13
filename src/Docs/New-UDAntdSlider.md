---
external help file: UniversalDashboard.Antd-help.xml
Module Name: UniversalDashboard.Antd
online version:
schema: 2.0.0
---

# New-UDAntdSlider

## SYNOPSIS
{{ Fill in the Synopsis }}

## SYNTAX

```
New-UDAntdSlider [[-Id] <String>] [[-ClassName] <String>] [-Disabled] [-Dots] [-Included]
 [[-Marks] <Hashtable>] [[-Max] <Int32>] [[-Min] <Int32>] [-Range] [-AllowCross] [-Pushable]
 [[-DefaultValue] <Int32[]>] [-Reverse] [[-Step] <Int32>] [[-BeforeIcon] <Object>] [[-AfterIcon] <Object>]
 [-Vertical] [[-OnChange] <Object>] [[-TooltipPlacement] <String>] [-TooltipVisible]
 [[-TrackStyle] <Hashtable>] [[-RailStyle] <Hashtable>] [[-HandleStyle] <Hashtable>] [[-DotStyle] <Hashtable>]
 [[-ActiveDotStyle] <Hashtable>] [<CommonParameters>]
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

### -ActiveDotStyle
The style used for the active dots.

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

### -AfterIcon
Add icon after the slider.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 8
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowCross
could be set as true to allow those handles to cross.

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

### -BeforeIcon
Add icon before the slider.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 7
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
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultValue
The default value of slider.
When range is false, use number, otherwise, use @(0, 30)

```yaml
Type: Int32[]
Parameter Sets: (All)
Aliases:

Required: False
Position: 5
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Disabled
If true, the slider will not be interactable

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

### -DotStyle
For styling the dot circle only visible if dots switch is used.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 14
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Dots
Whether the thumb can drag over tick only

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

### -HandleStyle
For styling the handle circle.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 13
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

### -Included
Make effect when marks not null, true means containment and false means coordinative

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

### -Marks
Tick mark of Slider, type of key must be number, and must in closed interval \[min, max\], each mark can declare its own style.
example: @{0 = '0°C'} or @{100 = @{style =  @{color = 'red'}; label = '100°C'}}

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Max
The maximum value the slider can slide to.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Min
The minimum value the slider can slide to.

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

### -OnChange
Callback function that is fired when the user changes the slider's value.

```yaml
Type: Object
Parameter Sets: (All)
Aliases:

Required: False
Position: 9
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Pushable
could be set as true to allow pushing of surrounding handles when moving a handle.
When set to a number, the number will be the minimum ensured distance between handles.

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

### -RailStyle
For styling the rail line.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 12
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Range
dual thumb mode

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

### -Reverse
reverse the component

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

### -Step
The granularity the slider can step through values.
Must greater than 0, and be divided by (max - min).

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:

Required: False
Position: 6
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TooltipPlacement
Set Tooltip display position.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Accepted values: top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom

Required: False
Position: 10
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TooltipVisible
If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering.

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

### -TrackStyle
For styling the track line.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases:

Required: False
Position: 11
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Vertical
If true, the slider will be vertical.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### Ant.Design.Slider

## NOTES

## RELATED LINKS
