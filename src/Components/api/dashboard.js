/* eslint-disable react/display-name */
import React from "react"
import { Layout } from "antd"
import store from "./store"
import { ReactQueryDevtools } from "react-query-devtools/dist/react-query-devtools.development.js"
const PageManager = React.lazy(
	() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager")
)


export default ({ appbar, sidebar, footer }) => {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<store.Provider initialValue={{ darkMode: true }}>
				<store.Provider initialValue={{ isOpen: false }}>
					{UniversalDashboard.renderComponent(sidebar)}
				</store.Provider>
				<Layout>
					{UniversalDashboard.renderComponent(appbar)}
					<PageManager />
					{UniversalDashboard.renderComponent(footer)}
					<ReactQueryDevtools initialIsOpen={false} />
				</Layout>
			</store.Provider>
		</Layout>
	)
}
