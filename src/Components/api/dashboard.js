/* eslint-disable react/display-name */
import React from "react"
import { Layout } from "antd"
import store from "./store"
import { ReactQueryDevtools } from "react-query-devtools/dist/react-query-devtools.development.js"
import { ThemeProvider } from 'antd-theme'
const PageManager = React.lazy(
	() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager")
)

export default ({ appbar, sidebar, footer, theme: udTheme }) => {
	const [theme, setTheme] = React.useState({
		name: udTheme.name,
		variables: { 'primary-color': udTheme.color, 'progress-default-color': udTheme.color },
	})

	return (
		<ThemeProvider
			theme={ theme }
			onChange={ (value) => setTheme(value) }
		>
			<Layout style={ { minHeight: "100vh" } }>
				<store.Provider initialValue={ { isOpen: false } }>
					{ UniversalDashboard.renderComponent(sidebar) }
				</store.Provider>
				<Layout>
					{ UniversalDashboard.renderComponent(appbar) }
					<Layout.Content style={ { padding: 24 } }>
						<PageManager />
					</Layout.Content>
					{ UniversalDashboard.renderComponent(footer) }
					<ReactQueryDevtools initialIsOpen={ false } />
				</Layout>
			</Layout>
		</ThemeProvider >
	)
}
