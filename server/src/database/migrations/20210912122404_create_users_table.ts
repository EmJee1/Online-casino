import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	knex.schema.createTable('users', table => {
		table.bigIncrements().unsigned().primary()
		table.string('email').unique().notNullable()
		table.string('username').notNullable()
		table.timestamps(true, true)
	})
}

export async function down(knex: Knex): Promise<void> {
	knex.schema.dropTableIfExists('users')
}
