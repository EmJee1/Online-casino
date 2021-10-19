import { Request, Response } from 'express'
import { UserResource } from '../../../resources/user.resource'
import db from '../../../config/knex.conf'

export const checkAvailability = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { username } = req.body

	let usernameCheck
	try {
		usernameCheck = await db.table('users').where({ username }).first()
	} catch {
		return res.serverError()
	}

	if (usernameCheck) {
		return res.clientError(409, 'That username is already taken')
	}

	return res.success(204)
}

export const registerUsername = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { username } = req.body

	if (req.user.username) {
		return res.clientError(400, 'You already finished registration')
	}

	try {
		await db.table('users').where({ id: req.user.id }).update({ username })

		return res.success(200, {
			user: new UserResource(
				await db.table('users').where({ id: req.user.id }).first()
			).full,
		})
	} catch {
		return res.serverError()
	}
}
