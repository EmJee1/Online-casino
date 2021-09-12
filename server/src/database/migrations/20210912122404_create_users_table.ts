import { Knex } from 'knex'

export const up = async (knex: Knex): Promise<Knex.SchemaBuilder> =>
	knex.schema.createTable('users', (table: Knex.TableBuilder) => {
		table.increments('id').primary()
		table.string('email').unique().notNullable()
		table.string('username').unique().notNullable()
		table.timestamps(true, true)
	})

export const down = async (knex: Knex): Promise<Knex.SchemaBuilder> =>
	knex.schema.dropTableIfExists('users')
