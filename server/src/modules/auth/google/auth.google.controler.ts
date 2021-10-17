import { OAuth2Client } from 'google-auth-library'
import { sign as signJwt } from 'jsonwebtoken'
import { Request, Response } from 'express'
import { UserResource } from '../../../resources/user.resource'
import { envOrFail } from '../../../utils/env-helpers'
import db from '../../../config/knex.conf'

const { GOOGLE_CLIENT_ID, JSON_WEBTOKEN_SECRET } = envOrFail(
	'GOOGLE_CLIENT_ID',
	'JSON_WEBTOKEN_SECRET'
)

const GoogleClient = new OAuth2Client({ clientId: GOOGLE_CLIENT_ID })

export default async (req: Request, res: Response): Promise<Response> => {
	const { idToken } = req.body

	const ticket = await GoogleClient.verifyIdToken({ idToken })
	const { email } = ticket.getPayload()

	const user = await db.table('users').where({ email }).first()

	if (user) {
		if (user.auth_provider === 'google') {
			return res.success(200, {
				token: signJwt({ id: user.id }, JSON_WEBTOKEN_SECRET),
				user: new UserResource(user).full,
			})
		}

		return res.clientError(401, `Please sign in with ${user.auth_provider}`)
	}

	const [id] = await db
		.table('users')
		.insert({ email, auth_provider: 'google' })

	return res.success(200, {
		token: signJwt({ id }, JSON_WEBTOKEN_SECRET),
		user: new UserResource(await db.table('users').where({ id }).first())
			.full,
	})
}
