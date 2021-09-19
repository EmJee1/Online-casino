/* eslint-disable @typescript-eslint/no-var-requires */
const { exec } = require('child_process')
const { join } = require('path')

const rootDir = process.cwd()
const [, , COMMAND_TYPE] = process.argv
const MIGRATIONS_DIRECTORY = {
	src: join(rootDir, '/src/database/migrations'),
	dist: join(rootDir, '/dist/database/migrations'),
}
const KNEXFILE = {
	src: join(rootDir, '/src/database/knexfile.ts'),
	dist: join(rootDir, '/dist/database/knexfile.js'),
}

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

if (COMMAND_TYPE === 'make:migration') {
	const MIGRATION_NAME = process.argv[3]

	if (!MIGRATION_NAME) {
		console.error('> Please provide a name for the migration')
		process.exit(1)
	}

	exec(
		`knex migrate:make ${MIGRATION_NAME} -x ts --migrations-directory ${MIGRATIONS_DIRECTORY}`,
		log
	)
}

if (COMMAND_TYPE === 'migrate:latest') {
	console.log('> Compiling before running migrations\n')
	exec(`tsc && knex migrate:latest --esm --knexfile ${KNEXFILE.dist}`, log)
}

if (COMMAND_TYPE === 'migrate:rollback') {
	console.log('> Compiling before running migrations\n')
	exec(`tsc && knex migrate:rollback --esm --knexfile ${KNEXFILE.dist}`, log)
}
