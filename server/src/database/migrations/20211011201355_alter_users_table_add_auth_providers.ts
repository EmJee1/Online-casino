import { Knex } from 'knex'

export const up = async (knex: Knex): Promise<Knex.SchemaBuilder> =>
	knex.schema.alterTable('users', (table: Knex.TableBuilder) => {
		table.string('password').nullable().alter()
		table
			.enum('auth_provider', ['email', 'google'])
			.after('password')
			.notNullable()
	})

export const down = async (knex: Knex): Promise<Knex.SchemaBuilder> =>
	knex.schema.alterTable('users', (table: Knex.TableBuilder) => {
		table.string('password').notNullable().alter()
		table.dropColumn('auth_provider')
	})
