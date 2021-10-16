import Joi from 'joi'

export const requestFriend = {
	body: Joi.object({
		userId: Joi.number().required().error(new Error('userId is required')),
	}),
}

export const removeFriend = {
	body: Joi.object({
		userId: Joi.number().required().error(new Error('userId is required')),
	}),
}
