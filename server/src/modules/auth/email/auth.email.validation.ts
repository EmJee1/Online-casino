import Joi from 'joi'

export const register = {
	body: Joi.object({
		email: Joi.string()
			.email()
			.required()
			.error(new Error('Email is required and must be valid')),
		username: Joi.string()
			.min(5)
			.regex(/^[A-Za-z0-9]+$/)
			.required()
			.error(new Error('Username is invalid')),
	}),
}

export const login = {}
