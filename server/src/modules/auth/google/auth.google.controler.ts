import { OAuth2Client } from 'google-auth-library'
import { Request, Response } from 'express'
import { envOrFail } from '../../../utils/env-helpers'

const { GOOGLE_CLIENT_ID } = envOrFail('GOOGLE_CLIENT_ID')

const GoogleClient = new OAuth2Client({ clientId: GOOGLE_CLIENT_ID })

export default async (req: Request, res: Response): Promise<Response> => {
	const { idToken } = req.body

	const ticket = await GoogleClient.verifyIdToken({
		idToken,
		audience: GOOGLE_CLIENT_ID,
	})

	console.log(ticket.getPayload())

	return res.send('Hello, World!').status(200)
}
