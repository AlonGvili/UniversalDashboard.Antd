/* eslint-disable react/display-name */
import React from "react"
import { Layout } from "antd"
import store from "./store"
import { ReactQueryDevtools } from "react-query-devtools/dist/react-query-devtools.development.js"
import { ThemeProvider } from 'antd-theme'
const PageManager = React.lazy(
	() => import(/* webpackChunkName: 'PageManager'*/ "../framework/pages/PageManager")
)

export default ({ appbar, sidebar, footer, udTheme }) => {
	const [theme, setTheme] = React.useState(() => {
		const savedTheme = localStorage.getItem("theme")
		if(!savedTheme) return { name: udTheme.name, variables: { 
			'primary-color': udTheme.color, 
			'progress-default-color': udTheme.color 
		}}
		else return JSON.parse(savedTheme)
	})

	const onThemeChange = value => {
		localStorage.setItem("theme", JSON.stringify(value))
		setTheme(value)
	}

	return (
		<ThemeProvider
			theme={ theme }
			onChange={ (value) => onThemeChange(value) }
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
