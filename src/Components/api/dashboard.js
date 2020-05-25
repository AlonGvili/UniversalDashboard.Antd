/* eslint-disable react/display-name */
import React from "react"
import { Layout } from "antd"
import store from "./store"
import { ReactQueryDevtools } from "react-query-devtools/dist/react-query-devtools.development.js"
import { queryCache } from "react-query"
const PageManager = React.lazy(
	() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager")
)
const DashboardFooter = React.lazy(
	() => import(/* webpackChunkName: 'DashboardFooter'*/ "../framework/core/DashboardFooter")
)

export default ({ appbar, sidebar, theme }) => {
	queryCache.setQueryData("theme", theme[0].primaryColor)
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<store.Provider initialValue={{ darkMode: true }}>
				<store.Provider initialValue={{ isOpen: false }}>
					{UniversalDashboard.renderComponent(sidebar)}
				</store.Provider>
				<Layout>
					{UniversalDashboard.renderComponent(appbar)}
					<PageManager />
					<DashboardFooter />
					<ReactQueryDevtools initialIsOpen={false} />
				</Layout>
			</store.Provider>
		</Layout>
	)
}
