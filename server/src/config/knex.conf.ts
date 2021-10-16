import { Knex, knex } from 'knex'
import knexfile from '../database/knexfile'

const mode = process.env.NODE_ENV as 'development'

const db = knex(knexfile[mode])

const checkDbConnection = async (knexInstance: Knex<any, unknown[]>) => {
	try {
		await knexInstance.raw('SELECT 1 + 1 AS `result`')
		console.log('DB connection successful')
	} catch (err) {
		console.error('DB connection error:', err)
	}
}

checkDbConnection(db)

export default db
