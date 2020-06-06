import React from 'react';
import { getApiPath } from './../config.jsx'
import renderComponent from './../services/render-service.jsx';
import { Alert, Spin } from 'antd';
import { useHistory } from 'react-router-dom';

const importJavascript = (component, setLoading) => {
    let script = document.createElement('script');
    script.onload = () => setLoading(false)
    script.src = getApiPath() + "/api/internal/javascript/" + component.assetId;
    document.head.appendChild(script);
}

export default function LazyElement({ component }) {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const history = useHistory()

    React.useEffect(() => {
        try {
            importJavascript(component, setLoading)
            if (loading) {
                return <Spin spinning={!element} size="default" tip={`Loading component ${component.type}`}/>
            }
        }
        catch (err) {
            setError(err)
            return <Alert description={`There was an error rendering component of type ${component.type}. ${error}`} type="error" />
        }
    }, [setLoading])

    let element = renderComponent(component, history, true)

    if (element === null) {
        return <Alert description={`Component not registered: ${component.type}`} type="error"/>
    }

    return element
}
