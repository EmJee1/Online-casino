import { Request, Response } from 'express'
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
		return res.serverError(500, 'Unexpected server error')
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
	} catch {
		return res.serverError(500, 'Unexpected server error')
	}

	return res.success(204)
}
