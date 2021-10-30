import { ObjectSchema } from 'joi'

export const validate = (
	schema: ObjectSchema<any>,
	data: { [key: string]: any }
): Promise<void | Error> =>
	new Promise((resolve, reject) => {
		const { error } = schema.validate(data)

		if (error) {
			reject(new Error(error.message))
		}

		resolve()
	})
