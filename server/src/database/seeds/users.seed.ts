import { hash } from 'bcrypt'
import { Knex } from 'knex'
import { IUser } from '../../models/tables/User'

export async function seed(knex: Knex): Promise<void> {
	await knex('users').del()

	const password = await hash('password', 10)

	const general: Partial<IUser> = { password, auth_provider: 'email' }

	await knex('users').insert([
		{ username: 'EmJee', email: 'mart-jan@gmail.com', ...general },
		{ username: 'sharpTshark', email: 'coen@gmail.com', ...general },
		{ username: 'StanDeMan', email: 'stanley@gmail.com', ...general },
	])
}
