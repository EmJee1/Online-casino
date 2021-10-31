import Joi from 'joi'

export const register = {
	body: Joi.object({
		email: Joi.string()
			.email()
			.required()
			.error(new Error('Email is required and must be valid')),
		password: Joi.string()
			.min(6)
			.required()
			.error(new Error('Password must meet the requirements')),
	}),
}

export const login = {
	body: Joi.object({
		email: Joi.string()
			.email()
			.required()
			.error(new Error('Email must be valid')),
		password: Joi.string()
			.required()
			.error(new Error('Password is required')),
	}),
}
