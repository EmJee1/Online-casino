import { Request, Response } from 'express'
import { compare, hash } from 'bcrypt'
import { sign as signJwt } from 'jsonwebtoken'
import { UserResource } from '../../../resources/user.resource'
import { envOrFail } from '../../../utils/env-helpers'
import db from '../../../config/knex.conf'

const { JSON_WEBTOKEN_SECRET } = envOrFail('JSON_WEBTOKEN_SECRET')

export const register = async (
	req: Request,
	res: Response
): Promise<Response> => {
	if (await db.table('users').where('email', req.body.email).first()) {
		return res.clientError(409, 'A user with that email already exists')
	}

	try {
		const hashed = await hash(req.body.password, 10)

		const [id] = await db
			.table('users')
			.insert({ ...req.body, password: hashed })

		const token = signJwt({ id }, JSON_WEBTOKEN_SECRET)

		return res.success(201, { token })
	} catch {
		return res.serverError(500, 'Unexpected server error')
	}
}

export const login = async (req: Request, res: Response): Promise<Response> => {
	const { email, password } = req.body

	const user = await db.table('users').where('email', email).first()

	if (!user || !(await compare(password, user.password))) {
		return res.clientError(401, 'Invalid email or password')
	}

	const token = signJwt({ id: user.id }, JSON_WEBTOKEN_SECRET)

	return res.success(200, { token, user: new UserResource(user).full })
}
