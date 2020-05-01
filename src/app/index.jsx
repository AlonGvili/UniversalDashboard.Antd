import './public-path';
import '@babel/polyfill';
import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
// import Promise from 'promise-polyfill'; 
import { UniversalDashboardService } from './services/universal-dashboard-service.jsx';
import App from './App.jsx';


window.UniversalDashboard = UniversalDashboardService;
require('./component-registration');

render(<App/>, document.getElementById('app'));