import { Request, Response } from 'express'

export const register = async (
	req: Request,
	res: Response
): Promise<Response> => {
	console.log('Request to register endpoint!')
	return res.send('Hello, Registration!')
}

export const login = async (req: Request, res: Response): Promise<Response> => {
	console.log('Request to login endpoint!')
	return res.send('Hello, Login!')
}
