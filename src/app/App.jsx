import React from 'react'
import Dashboard from './ud-dashboard.jsx'
import { BrowserRouter, Route, } from 'react-router-dom'

export default function App() {
    return (
        <BrowserRouter basename={ window.routeBase }>
            <div className="ud-dashboard">
                <Route path="/" >
                    <Dashboard />
                </Route>
            </div>
        </BrowserRouter>
    )
}
