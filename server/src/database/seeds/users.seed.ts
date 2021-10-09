import { hash } from 'bcrypt'
import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
	await knex('users').del()

	const password = await hash('password', 10)

	await knex('users').insert([
		{ username: 'EmJee', email: 'mart-jan@gmail.com', password },
		{ username: 'sharpTshark', email: 'coen@gmail.com', password },
		{ username: 'StanDeMan', email: 'stanley@gmail.com', password },
	])
}
