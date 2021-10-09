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

		return res.status(status).json({ data })
	}
	res.clientError = (status, ...errors) => {
		console.log(status)

		return res.status(status).json({
			errors: errors.map(err => {
				if (err instanceof Error) {
					return err.message
				}

				return err
			}),
		})
	}
	res.serverError = (status, ...errors) => {
		if (errors) {
			return res.status(status).json({
				errors: errors.map(err => {
					if (err instanceof Error) {
						return err.message
					}

					return err
				}),
			})
		}

		return res.sendStatus(status)
	}

	next()
}

export default injectResponseMethods
