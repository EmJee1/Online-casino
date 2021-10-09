import { NextFunction, Request, Response } from 'express'

const injectResponseMethods = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	res.success = (status, data) => {
		if (status === 204) {
			return res.sendStatus(status)
		}

		return res.json({ data }).status(status)
	}
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
	res.serverError = (status, ...errors) => {
		if (errors) {
			return res
				.json({
					errors: errors.map(err => {
						if (err instanceof Error) {
							return err.message
						}

						return err
					}),
				})
				.status(status)
		}

		return res.sendStatus(status)
	}

	next()
}

export default injectResponseMethods
