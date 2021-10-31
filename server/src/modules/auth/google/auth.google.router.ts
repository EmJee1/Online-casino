import { Router } from 'express'
import * as validation from 'validation/schemas/auth.google'
import * as controller from './auth.google.controler'
import validate from '../../../middlewares/validate'

const router = Router()

router.post('/', validate(validation.googleSignIn), controller.googleSignIn)

export const prefix = '/auth/google'
export default router
