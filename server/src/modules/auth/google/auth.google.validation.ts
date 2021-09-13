import Joi from 'joi'

export default {
	body: Joi.object({
		idToken: Joi.string()
			.required()
			.error(new Error('The google ID token is required')),
	}),
}
