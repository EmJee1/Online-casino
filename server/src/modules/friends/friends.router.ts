import { Router } from 'express'
import validate from '../../middlewares/validate'
import * as controller from './friends.controller'
import * as validation from './friends.validation'

const router = Router()

router.post('/', validate(validation.requestFriend), controller.requestFriend)

export const prefix = '/auth/google'
export const authenticated = true
export default router
