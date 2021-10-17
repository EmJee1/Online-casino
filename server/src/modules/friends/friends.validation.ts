import Joi from 'joi'

export const request = {
	body: Joi.object({
		userId: Joi.number().required().error(new Error('userId is required')),
	}),
}

export const accept = {
	body: Joi.object({
		userId: Joi.number().required().error(new Error('userId is required')),
	}),
}

export const remove = {
	body: Joi.object({
		userId: Joi.number().required().error(new Error('userId is required')),
	}),
}
