const log = (err, stdout) => {
	console.log('~~~ \n')
	if (err) {
		console.log('[err]')
		console.error(err)
	}
	if (stdout) {
		console.log('[stdout]')
		console.log(stdout)
	}
}

module.exports = log
