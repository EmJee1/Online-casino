import { Request, Response, NextFunction } from 'express'
import { verify as verifyJwt } from 'jsonwebtoken'
import { envOrFail } from '../utils/env-helpers'
import db from '../config/knex.conf'

const { JSON_WEBTOKEN_SECRET } = envOrFail('JSON_WEBTOKEN_SECRET')

const isAuthenticated = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<Response | void> => {
	const [type, token] = req.headers.authorization?.split(' ') ?? []

	if (type !== 'Bearer') {
		return res.clientError(401, "Authorization must be of type 'Bearer'")
	}

	try {
		const payload = verifyJwt(token, JSON_WEBTOKEN_SECRET)

		if (typeof payload === 'string') {
			throw new Error()
		}

		const user = await db.table('users').where('id', payload.id).first()

		if (!user) {
			throw new Error()
		}

		req.user = user
	} catch {
		return res.clientError(401, 'Token is invalid')
	}

	return next()
}

export default isAuthenticated
