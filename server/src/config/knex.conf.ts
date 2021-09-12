import { knex } from 'knex'
import knexfile from '../database/knexfile'

const database = knex(knexfile.development)

export default database
