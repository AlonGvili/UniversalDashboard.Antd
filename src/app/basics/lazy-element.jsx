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
    const componentRef = React.useRef()
    const history = useHistory()

    React.useEffect(() => {
        try {
            importJavascript(component, setLoading)

            if (loading) {
                return <Spin spinning={!element} size="small" />
            }
        }
        catch (err) {
            setError(err)
            return <Alert.ErrorBoundary ref={componentRef} message={
                `There was an error rendering component of type ${component.type}. ${error}`
            } description={error.message} />
        }
    }, [setLoading])

    let element = renderComponent(component, history, true)

    if (element == null) {
        return <Alert.ErrorBoundary ref={componentRef} message={`Component not registered: ${component.type}`} />
    }

    return element
}
