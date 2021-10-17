import Joi from 'joi'

export const checkAvailability = {
	body: Joi.object({
		username: Joi.string()
			.required()
			.error(new Error('Username is required')),
	}),
}

export const registerUsername = {
	body: Joi.object({
		username: Joi.string()
			.required()
			.error(new Error('Username is required')),
	}),
}
