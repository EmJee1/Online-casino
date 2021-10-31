import { Router } from 'express'
import * as validation from 'validation/src/schemas/auth.email'
import * as controller from './auth.email.controller'
import validate from '../../../middlewares/validate'

const router = Router()

router.post('/register', validate(validation.register), controller.register)
router.post('/login', validate(validation.login), controller.login)

export const prefix = '/auth/email'
export default router
