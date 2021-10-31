import { Router } from 'express'
import * as validation from 'validation/schemas/auth.username'
import * as controller from './auth.username.controller'
import validate from '../../../middlewares/validate'

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
