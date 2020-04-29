import React from 'react'

export default function useJavascript(url, onLoad) {
	var jsElm = document.createElement("script")
	jsElm.onload = onLoad
	jsElm.type = "application/javascript"
	jsElm.src = url
	document.body.appendChild(jsElm)
}
