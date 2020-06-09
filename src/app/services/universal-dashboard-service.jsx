import React from 'react'
import { fetchGet, fetchPost, fetchDelete, fetchPut, fetchPostRaw, fetchPostFormData, fetchPostHeaders } from './fetch-service.jsx'
import { internalRenderComponent } from './render-service.jsx'
import LazyElement from './../basics/lazy-element.jsx'
import PubSub from 'pubsub-js'
import { queryCache } from 'react-query'

queryCache.setQueryData("components", [])

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false
    }
    return true
}

function isString(obj) {
    return (Object.prototype.toString.call(obj) === '[object String]')
}

const renderComponent = (component, dynamicallyLoaded) => {
    if (!component) return null
    if (isEmpty(component)) return null
    if (component.$$typeof === Symbol.for('react.element')) return component
    if (Array.isArray(component)) return component.map(x => renderComponent(x))
    if (isString(component)) {
        try { component = JSON.parse(component) }
        catch { return component }
    }
    if (component.type == null) return null
    var existingComponent = queryCache.getQueryData('components')?.find(x => x.type === component.type)
    if (existingComponent) {
        return React.createElement(existingComponent.component, {
            ...component,
            key: component.id
        })
    } else if (component.isPlugin && !dynamicallyLoaded) {
        return <LazyElement component={ component } key={ component.id } />
    }
    return internalRenderComponent(component)
}

export const UniversalDashboardService = {
    components: queryCache.subscribe((cache) => {
        return cache.getQueryData("components")
    }),
    register: (type, component) => {
        let components = queryCache.getQueryData("components")
        let existingComponent = components.find(x => x.type === type)
        if (!existingComponent) queryCache.setQueryData("components", (oldData) => [...oldData, { type, component }])
    },
    renderDashboard: () => null,
    get: fetchGet,
    post: fetchPost,
    postFormData: fetchPostFormData,
    postRaw: fetchPostRaw,
    postWithHeaders: fetchPostHeaders,
    put: fetchPut,
    delete: fetchDelete,
    subscribe: PubSub.subscribe,
    unsubscribe: PubSub.unsubscribe,
    publish: PubSub.publishSync,
    connectionId: '',
    sessionId: '',
    sessionTimedOut: false,
    onSessionTimedOut: () => { },
    renderComponent
}
