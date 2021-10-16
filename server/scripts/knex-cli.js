/* eslint-disable @typescript-eslint/no-var-requires */
const { exec, execSync } = require('child_process')
const { join } = require('path')
const log = require('./helpers/log')

const rootDir = process.cwd()
const [, , COMMAND_TYPE] = process.argv
const DATABASE_DIRECTORY = {
	src: join(rootDir, '/src/database'),
	dist: join(rootDir, '/dist/database'),
}
const MIGRATIONS_DIRECTORY = {
	src: join(DATABASE_DIRECTORY.src, '/migrations'),
	dist: join(DATABASE_DIRECTORY.dist, '/migrations'),
}
const KNEXFILE = {
	src: join(DATABASE_DIRECTORY.src, '/knexfile.ts'),
	dist: join(DATABASE_DIRECTORY.dist, '/knexfile.js'),
}

if (COMMAND_TYPE === 'make:migration') {
	const MIGRATION_NAME = process.argv[3]

	if (!MIGRATION_NAME) {
		console.error('> Please provide a name for the migration')
		process.exit(1)
	}

	exec(
		`knex migrate:make ${MIGRATION_NAME} -x ts --migrations-directory ${MIGRATIONS_DIRECTORY.src}`,
		log
	)
}

if (COMMAND_TYPE === 'make:seed') {
	const SEED_NAME = process.argv[3]

	if (!SEED_NAME) {
		console.error('> Please provide a name for the seed')
		process.exit(1)
	}

	exec(
		`cd ${DATABASE_DIRECTORY.src} && knex seed:make ${SEED_NAME} -x ts`,
		log
	)
}

if (COMMAND_TYPE === 'make:seed') {
	const SEED_NAME = process.argv[3]

	if (!SEED_NAME) {
		console.error('> Please provide a name for the seed')
		process.exit(1)
	}

	exec(
		`cd ${DATABASE_DIRECTORY.src} && knex seed:make ${SEED_NAME} -x ts`,
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

if (COMMAND_TYPE === 'seed:run') {
	console.log('> Compiling before running migrations\n')
	execSync('tsc')

	const [, , , ...specificSeeds] = process.argv
	if (specificSeeds.length) {
		exec(
			`cd ${
				DATABASE_DIRECTORY.dist
			} && knex seed:run --esm ${specificSeeds
				.map(seed => `--specific=${seed}.seed.js`)
				.join(' ')}`,
			log
		)
	} else {
		exec(`cd ${DATABASE_DIRECTORY.dist} && knex seed:run --esm`, log)
	}
}
