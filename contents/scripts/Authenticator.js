/**
 * @param {string} url
 */
function urlParser(url) {
	const parser = new URL(url)

	const pathname = parser.pathname.slice(1)
	const secret = parser.searchParams.get("secret")
	const issuer = parser.searchParams.get("issuer")

	return [pathname, secret, issuer]
}

function timestamp() {
	return (Date.now() / 1000 / 30) >> 0
}
