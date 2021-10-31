import Joi from 'joi'

export const googleSignIn = {
	body: Joi.object({
		idToken: Joi.string()
			.required()
			.error(new Error('The google ID token is required')),
	}),
}
