import { Router } from 'express'
import validate from '../../../middlewares/validate'
import * as controller from './auth.username.controller'
import * as validation from './auth.username.validation'

const router = Router()

router.post(
	'/check-availability',
	validate(validation.checkAvailability),
	controller.checkAvailability
)
router.post(
	'/register-username',
	validate(validation.registerUsername),
	controller.registerUsername
)

export const prefix = '/auth/username'
export const authenticated = true
export default router
