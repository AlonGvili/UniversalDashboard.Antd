# Switch Component As Example

    This component use React 16.8.6 and the new Hooks,  useState and useEffect


## Listen for events.
```javascript

    useEffect(() => {
        const pubSubToken = UniversalDashboard.subscribe(props.id,events);
        return () => {
            UniversalDashboard.unsubscribe(pToken)
        }
    },[])

```

### This line will make our component to listen for events that include his id, and if there is event the function events will run
```javascript
 const pubSubToken = UniversalDashboard.subscribe(props.id,events);
 ```

## The events function

```javascript

    const events = (msg,event) => {
        if(event.type === 'setState'){
            if(event.state.proprties !== null){
                setState({...event.state.properties})
            }
        }
    }

```



the function will get 2 props msg and event
props
-   ```msg``` : this is the component id
-   ```event``` : the return object that we will get and he have 2 props ***type*** and ***state***.



#### In this component we will use ```setState``` type

The ```type``` can be : ***requestState***,***setState***

-   ```requestState``` : will come from ***Get-UDElement*** command
-   ```setState``` : will come from ***Set-UDElement*** command

The ```state```  will have 3 props ***content***, ***attributes***, ***properties***

The example below check if the event ```type``` is ***setState*** and if is true , it check if the ```properties``` prop is empty,  if ***false*** , then the content of the ```properties``` prop will add to the component ***state***

you can do the same for the ***content*** and ***attributes*** props.




## Send Content To PowerShell

This step will send a message to the universal dashboard server.
The server will be listen for message named ***element-event*** , and the content of this message will  need to be an object with 4 props.

```type``` :  need to be ***clientEvent***   
```eventid``` : the powershell endpoint id     
               
    New-UDEndpoint -Endpoint $onChange -Id ($Id + "onChange")
```$OnChange``` is Parameter on the ***New-UDAntdSwitch*** function and the type is ```[scriptblock]```           

```eventName``` : can be empty.
```eventData``` : the content for the universal dashboard automatic veriable ***$EventData***
```javascript
    const handleChange = () => {
        UniversalDashboard.publish("element-event", {
            type: "clientEvent",
            eventId: props.id + "onChange",
            eventName: "onChange",
            eventData: !state.checked
        });
        setState({
            ...state,
            checked: !state.checked
        })
    };
```

## The PowerShell Part
```powershell

    New-UDAntdSwitch {
        param(
            [Parameter()]
            [scriptblock]$OnChange,
            [Parameter()]
            [string]$Id
        )

        End{

            if ($null -ne $onChange) {
                if ($onChange -is [scriptblock]) {
                    $onChange = New-UDEndpoint -Endpoint $onChange -Id ($Id + "onChange")
                }
                elseif ($onChange -isnot [UniversalDashboard.Models.Endpoint]) {
                    throw "OnClick must be a script block or UDEndpoint"
                }
            }

            @{
                assetId = $AssetId 
                isPlugin = $true 
                type = "ud-antd-switch"
                id = $Id
                onChange = $OnChange
            }
        }
    }
```


```javascript

import React, { useState, useEffect } from 'react'
import { Switch } from 'antd'


const AntdSwitch = (props) => {
    
    const [state, setState] = useState({ ...props })

    useEffect(() => {
        const pubSubToken = UniversalDashboard.subscribe(props.id,events);
        return () => {
            UniversalDashboard.unsubscribe(pubSubToken)
        }
    },[])

    const events = (msg,event) => {
        if(event.type === 'setState'){
            if(event.state.proprties !== null){
                setState({...event.state.properties})
            }
        }
    }

    const handleChange = () => {
        UniversalDashboard.publish("element-event", {
            type: "clientEvent",
            eventId: props.id + "onChange",
            eventName: "onChange",
            eventData: !state.checked
        });
        setState({
            ...state,
            checked: !state.checked
        })
    };

    return <Switch 
            id={props.id} 
            className={state.className} 
            autoFocus={state.autoFocus} 
            size={state.size} 
            checked={state.checked} 
            checkedChildren={UniversalDashboard.renderComponent(state.checkedChildren)} 
            disabled={state.disabled} 
            defaultChecked={state.defaultChecked} 
            unCheckedChildren={UniversalDashboard.renderComponent(state.unCheckedChildren)}
            onChange={handleChange}
            loading={state.loading}/>
}

export default AntdSwitch
```