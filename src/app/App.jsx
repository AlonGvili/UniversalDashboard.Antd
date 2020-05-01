import React from 'react';
import UdDashboard from './ud-dashboard.jsx'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

export default class App extends React.Component {

    constructor() {
        super();

        this.state = {
            loading: true,
            loadingMessage: 'Loading framework...'
        }
    }

    loadJavascript(url, onLoad) {
        var jsElm = document.createElement("script");
        jsElm.onload = onLoad;
        jsElm.type = "application/javascript";
        jsElm.src = url;
        document.body.appendChild(jsElm);
    }

    componentWillMount() {
        this.setState({
            loading: false
        })
    }

    render () {
        if (this.state.loading) return <span>Loading...</span>

        var pluginRoutes = UniversalDashboard.provideRoutes();

        return (<Router basename={window.routeBase}>
                <div className="ud-dashboard">
                    {pluginRoutes}
                    <Route path="/" component={UdDashboard} />
                </div>
            </Router> )
  }
}
