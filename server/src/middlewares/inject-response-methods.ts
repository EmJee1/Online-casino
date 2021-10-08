import { NextFunction, Request, Response } from 'express'

const injectResponseMethods = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	res.success = (status, data) => res.json({ data }).status(status)
	res.clientError = (status, ...errors) =>
		res
			.json({
				errors: errors.map(err => {
					if (err instanceof Error) {
						return err.message
					}

					return err
				}),
			})
			.status(status)
	res.serverError = status => res.sendStatus(status)

	next()
}

export default injectResponseMethods
