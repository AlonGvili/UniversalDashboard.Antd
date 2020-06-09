import './public-path'
import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { UniversalDashboardService } from './services/universal-dashboard-service.jsx'
import App from './App.jsx'


window.UniversalDashboard = UniversalDashboardService
require('./component-registration')

ReactDOM.render(<App />, document.getElementById('app'))