/* eslint-disable react/display-name */
import React from "react"
import { Layout } from "antd"
import store from "./store"
import { ReactQueryDevtools } from "react-query-devtools/dist/react-query-devtools.development"
const PageManager = React.lazy(() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager"))
const DashboardFooter = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardFooter'*/ "../framework/core/DashboardFooter")
)
const DashboardSideBar = React.lazy(() =>
	import(/* webpackChunkName: 'DashboardSideBar'*/ "../framework/core/DashboardSideBar")
)

export default ({ appbar }) => {
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<store.Provider initialValue={{ darkMode: true }}>
				<store.Provider initialValue={{ isOpen: true }}>
					{/* <DashboardSideBar /> */}
					<Layout>
						{UniversalDashboard.renderComponent(appbar)}
						<PageManager />
						<ReactQueryDevtools initialIsOpen={false} />
						<DashboardFooter />
					</Layout>
				</store.Provider>
			</store.Provider>
		</Layout>
	)
}

window.less.options.javascriptEnabled = true
// window.less.env = "production"
// window.less.options.async = true
// window.less.options.modifyVars = { ...light, "@primary-color": "red" }
window.less.watch()
