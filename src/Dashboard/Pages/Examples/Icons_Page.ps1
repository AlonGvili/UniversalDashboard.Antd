New-UDPage -Title 'Icons' -Name 'Icons' -Content {
    (Get-Command -Name New-UDAntdIcon).parameters["Icon"].Attributes.ValidValues.foreach( {
            New-UDAntdIcon -Icon $_ -Size 4x
        })
}