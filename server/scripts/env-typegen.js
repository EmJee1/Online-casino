/* eslint-disable @typescript-eslint/no-var-requires */
const { writeFileSync } = require('fs')
const { join } = require('path')
const result = require('dotenv').config()

if (result.error) {
	console.error(`[err] error while parsing env file: ${result.error.message}`)
	process.exit(1)
}

const parsedWithTypes = Object.entries(result.parsed)
	.map(([key]) => `\t\t${key}: string`)
	.join('\n')

const fileContents = `declare namespace NodeJS {
	export interface ProcessEnv {
${parsedWithTypes}
	}
}
`

writeFileSync(
	join(process.cwd(), '/src/models/environment', 'environment.d.ts'),
	fileContents
)
