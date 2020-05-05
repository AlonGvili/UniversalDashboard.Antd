import React, { useState, useContext } from "react"
import { slide as Menu } from "react-burger-menu"

// make a new context
const MyContext = React.createContext()

// create the provider
export const MyProvider = props => {
	const [menuOpenState, setMenuOpenState] = useState(false)

	return (
		<MyContext.Provider
			value={{
				isMenuOpen: menuOpenState,
				toggleMenu: () => setMenuOpenState(!menuOpenState),
				stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
			}}
		>
			{props.children}
		</MyContext.Provider>
	)
}

// create a button that calls a context function to set a new open state when clicked
export const Button = () => {
	const ctx = useContext(MyContext)
	return <button onClick={ctx.toggleMenu}>Toggle menu</button>
}

// create a navigation component that wraps the burger menu
export const Navigation = () => {
	const ctx = useContext(MyContext)

	return (
		<Menu
            outerContainerId="outer-container"
            pageWrapId="page-wrap"
			customBurgerIcon={false}
			isOpen={ctx.isMenuOpen}
			onStateChange={state => ctx.stateChangeHandler(state)}
    >{[
        <div key="1">demo</div>,
        <div key="2">demo</div>,
        <div key="3">demo</div>,
        <div key="4">demo</div>,
        <div key="5">demo</div>,
        <div key="6">demo</div>,
        <div key="7">demo</div>,
        <div key="8">demo</div>,
        <div key="9">demo</div>
    ]}</Menu>
	)
}
