
// Opbeat
// ––––––––––––––––––––––––––––––––––––––––––––––––––

(() => {
	'use strict'

	if (window.location.port === '3000') return

	const appId = ''
	const orgId = ''

	function opbeat (i, s, o, g, r, a, m, n) {
		n = s.createElement(o)
		n.async = 1
		n.src = g
		n.setAttribute('data-org-id', r)
		n.setAttribute('data-app-id', a)
		m = s.getElementsByTagName(o)[document.querySelectorAll(o).length - 1]
		m.parentNode.insertBefore(n, m)
	}

	opbeat(window, document, 'script', 'lib/opbeat-js/opbeat.min.js', orgId, appId)
})()
