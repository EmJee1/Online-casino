import { Knex } from 'knex'

export const up = async (knex: Knex): Promise<Knex.SchemaBuilder> =>
	knex.schema.createTable('friends', (table: Knex.TableBuilder) => {
		table.increments('id').primary()
		table
			.integer('requester')
			.unsigned()
			.references('id')
			.inTable('users')
			.notNullable()
		table
			.integer('requested')
			.unsigned()
			.references('id')
			.inTable('users')
			.notNullable()
		table
			.enum('status', ['INVITED', 'ACCEPTED', 'BLOCKED', 'IGNORED'])
			.notNullable()
		table.timestamps(true, true)
	})

export const down = async (knex: Knex): Promise<Knex.SchemaBuilder> =>
	knex.schema.dropTableIfExists('friends')
