import { Knex } from 'knex'

export const up = async (knex: Knex): Promise<Knex.SchemaBuilder> =>
	knex.schema.createTable('friends', (table: Knex.TableBuilder) => {
		table.increments('id').primary()
		table.integer('first_user').unsigned().references('id').inTable('users')
		table
			.integer('second_user')
			.unsigned()
			.references('id')
			.inTable('users')
		table.timestamps(true, true)
	})

export const down = async (knex: Knex): Promise<Knex.SchemaBuilder> =>
	knex.schema.dropTableIfExists('friends')
