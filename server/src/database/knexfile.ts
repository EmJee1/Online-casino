import { envOrFail, env } from '../utils/env-helpers'

const variables = {
	...envOrFail('DB_DEV_CLIENT', 'DB_DEV_HOST', 'DB_DEV_DATABASE'),
	...env('DB_DEV_USER', 'DB_DEV_PASSWORD'),
}

export default {
	development: {
		client: variables.DB_DEV_CLIENT,
		connection: {
			host: variables.DB_DEV_HOST,
			user: variables.DB_DEV_USER,
			password: variables.DB_DEV_PASSWORD,
			database: variables.DB_DEV_DATABASE,
		},
	},
}
