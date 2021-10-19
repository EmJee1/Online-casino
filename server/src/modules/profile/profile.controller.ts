import { Request, Response } from 'express'
import { UserResource } from '../../resources/user.resource'
import db from '../../config/knex.conf'

export const getProfile = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const user = await db.table('users').where({ id: req.user.id }).first()

		return res.success(200, { user: new UserResource(user).full })
	} catch {
		return res.serverError()
	}
}
