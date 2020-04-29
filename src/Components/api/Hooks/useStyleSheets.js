import React from 'react'

export default function useStylesheet(url) {
	var styles = document.createElement("link")
	styles.rel = "stylesheet"
	styles.type = "text/css"
	styles.media = "screen"
	styles.href = url
	document.getElementsByTagName("head")[0].appendChild(styles)
}
