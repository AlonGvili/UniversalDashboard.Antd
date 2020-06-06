/* eslint-disable react/display-name */
import React from "react"
import { Layout, Alert } from "antd"
import store from "./store"
import { ReactQueryDevtools } from "react-query-devtools/dist/react-query-devtools.development.js"
const PageManager = React.lazy(
	() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager")
)
import { ThemeProvider } from 'antd-theme';

const initialTheme = {
	name: 'default',
	variables: { 'primary-color': '#00ff00' },
};



export default ({ appbar, sidebar, footer }) => {
	const [theme, setTheme] = React.useState(initialTheme);

	return (
		<ThemeProvider
			theme={theme}
			onChange={(value) => setTheme(value)}
		>
			<Alert.ErrorBoundary>
				<Layout style={{ minHeight: "100vh" }}>
					
						<store.Provider initialValue={{ isOpen: false }}>
							{UniversalDashboard.renderComponent(sidebar)}
						</store.Provider>
						<Layout>
							{UniversalDashboard.renderComponent(appbar)}
							<Layout.Content style={{ padding: 24 }}>
								<PageManager />
							</Layout.Content>
							{UniversalDashboard.renderComponent(footer)}
							<ReactQueryDevtools initialIsOpen={false} />
						</Layout>
					
				</Layout>
			</Alert.ErrorBoundary>
		</ThemeProvider>
	)
}
