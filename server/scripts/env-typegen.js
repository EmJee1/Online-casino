/* eslint-disable @typescript-eslint/no-var-requires */
const result = require('dotenv').config()

if (result.error) {
	console.error(`[err] error while parsing env file: ${result.error.message}`)
	process.exit(1)
}

console.log(result.parsed)
