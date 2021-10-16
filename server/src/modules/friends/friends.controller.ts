import { NextFunction, Request, Response } from 'express'

export const requestFriend = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<Response> => {
	console.log('Received request')
	return res.success(401)
}
